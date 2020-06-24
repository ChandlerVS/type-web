import express from "express";

export abstract class Controller {
    abstract name: string;
    protected router: express.Router;

    constructor() {
        this.router = express.Router();
    }

    /**
     * Use this function to register any middleware specific to all routes in this controller
     */
    middleware(): void {};

    /**
     * Use this function to register routes within this controller
     */
    abstract routes(): void;

    /**
     * Gets the router, adds the middleware and routes and then returns it. (This is how each controller gets hooked into the app)
     */
    getRouter() {
        this.middleware();
        this.routes();
        return this.router;
    }
}
