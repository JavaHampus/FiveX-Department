/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}