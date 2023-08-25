/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import { Router, Request, Response } from "express";
import { CLIENT, AUTHENTICATION, RANKS, SERVER, DEPARTMENT } from "../../utils/Config";
import fetch from "node-fetch";
import FormData from 'form-data';
import { client } from "../../client/DiscordClient";
import { Guild, GuildMember } from "discord.js";

/**
 * Fetch and place ranks for user.
 * @param req
 * @param res
 * @param discordId 
 */
export const fetchRanks = async (req: Request, res: Response , discordId: string): Promise<void | undefined> => {
    const guild: Guild | undefined = await client.guilds.cache.get(SERVER.SERVER_ID)
    const user: GuildMember | undefined = await guild?.members.cache.get(discordId)
    let ranksArray: Array<Object> = []

    if(!user?.roles.cache.has(DEPARTMENT.DEPARTMENT_ROLE)) return undefined;

    for(let x of RANKS) {
        if(user?.roles.cache.has(x.role_id)) {
            ranksArray.push(x)
        }
    }

    if(ranksArray.length != 1) return undefined;

    req.session.user!.rank = ranksArray
}

const router: Router = Router();

router.get('/callback', async (req: Request, res: Response) => {
    const accessCode: any = req.query.code;
    if(!accessCode) return res.send('No access code was provided!');

    const data = new FormData()
    data.append('client_id', CLIENT.CLIENT_ID);
    data.append('client_secret', CLIENT.CLIENT_SECRET);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', AUTHENTICATION.REDIRECT);
    data.append('scope', AUTHENTICATION.SCOPES.join(' '));
    data.append('code', accessCode);

    const response = await fetch('https://discordapp.com/api/oauth2/token', {
        method: 'POST',
        body: data
    });

    const json = await response.json();

    const userResponse = await fetch(`https://discordapp.com/api/users/@me`, {
        headers: {
            Authorization: `${json['token_type']} ${json['access_token']}`
        }
    });
    
    const userJson = await userResponse.json();
    req.session.user = userJson;
    req.session.user!.avatar = userJson.avatar ? `https://cdn.discordapp.com/avatars/${userJson.id}/${userJson.avatar}.png` : 'https://cdn.discordapp.com/embed/avatars/0.png';

    await fetchRanks(req, res, req.session.user?.id)
    if(req.session.user!.rank == undefined) return req.session.destroy(() => {
        res.send("You can only have 1 Department rank. Or you don't have a department role.")
    })

    await req.session.save();

    return res.redirect('/');
})

export const AuthRoute: Router = router;