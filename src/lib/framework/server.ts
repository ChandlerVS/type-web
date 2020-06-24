import {Express} from "express";
import {app} from "../../app";
import {logger} from "./logger";

export class Server {
    private app: Express;
    private readonly port: number;
    private startUpHooks: Array<() => Promise<boolean>> = [];

    constructor(app: Express, port: number = 3000) {
        this.app = app;
        this.port = port;
    }

    registerStartupHook(hookFunction: () => Promise<boolean>) {
        this.startUpHooks.push(hookFunction);
    }

    async start() {
        for (let i = 0; i < this.startUpHooks.length; i++) {
            await this.startUpHooks[i]();
        }

        app.listen(this.port, () => {
            logger.info(`App listening on port ${this.port}`);
        });
    }
}
