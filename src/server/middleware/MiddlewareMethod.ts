/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import { Request, Response, NextFunction } from "express"
import { AUTHENTICATION, CLIENT } from "../../utils/Config";

export const Middleware = async (req: Request, res: Response, next: NextFunction) => {
    if(req.path == "/auth/callback") {
        return next()
    }

    if(!req.session.user) {
         return res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT.CLIENT_ID}&redirect_uri=${encodeURIComponent(AUTHENTICATION.REDIRECT)}&response_type=code&scope=${AUTHENTICATION.SCOPES.join('%20')}`)
    }

    return next()
}