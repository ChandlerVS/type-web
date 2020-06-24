import {app} from "./app";
import {logger} from "./lib/framework/logger";
import {Server} from "./lib/framework/server";

const PORT: number = <number><unknown>process.env.NODE_PORT || 3000;

const server = new Server(app, PORT);

// noinspection JSIgnoredPromiseFromCall
server.start();
