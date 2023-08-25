/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import { app } from "./server/ExpressServer";
import { client } from "./client/DiscordClient";
import { LogMessage } from "./utils/LogMessage";
import { CLIENT } from "./utils/Config";

app.listen(80, () => LogMessage.Standard("Web Server is online."))
client.login(CLIENT.TOKEN)