import express, {Request, Response} from "express";
import {Controller} from "../lib/framework/controller";

export class HomeController extends Controller {
    name: string = "home";

    private index(req: Request, res: Response) {
        return res.render('index', {});
    }

    routes(): void {
        this.router.get('/', this.index);
    }
}
