import { Client, GatewayIntentBits } from "discord.js";
import { CLIENT } from "../utils/Config";
import { LogMessage } from "../utils/LogMessage";

export const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent , GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping]
});

client.on('ready', () => {
    LogMessage.Standard("Discord client is running.")
})

