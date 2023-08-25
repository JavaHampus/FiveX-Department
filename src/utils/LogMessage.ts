/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import { LOG_PREFIX } from "./Config"

class LogMessageClass {
    constructor() {}

    Standard(message: string): void {
        console.log(LOG_PREFIX.STANDARD + message)
    }

    Warning(message: string): void {
        console.log(LOG_PREFIX.WARNING + message)
    }

    Error(message: string): void {
        console.log(LOG_PREFIX.ERROR + message)
    }

    Developer(message: string): void {
        console.log(LOG_PREFIX.DEVELOPER + message)
    }
}

export const LogMessage: LogMessageClass = new LogMessageClass();
