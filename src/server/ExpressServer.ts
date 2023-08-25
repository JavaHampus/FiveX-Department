/**
 * Developed by hampuiz (Discord Username). Project is free to use, 
 * please don't remove the credit that's present within the embeds, they
 * are there to allow me to release free products like this. 
 * 
 * If you have any errors contact me on discord.
 */

import bodyParser from "body-parser";
import session from 'express-session'
import express, { Express, Request, Response } from "express";
import path from 'path';
import { Middleware } from "./middleware/MiddlewareMethod";

import { AuthRoute } from "./routes/Auth.route";

export const app: Express = express();

app.use(session({
	secret: 'departmentXc2',
	resave: false,
	saveUninitialized: true,
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(Middleware)

app.get('/', (req: Request, res: Response) => {
    return res.render('index')
})

app.use('/auth', AuthRoute)