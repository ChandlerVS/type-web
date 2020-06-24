import {Express} from "express";
import {app} from "../../app";
import {logger} from "./logger";

export class Server {
    private app: Express;
    private readonly port: number;

    constructor(app: Express, port: number = 3000) {
        this.app = app;
        this.port = port;
    }

    async start() {
        app.listen(this.port, () => {
            logger.info(`App listening on port ${this.port}`);
        });
    }
}
