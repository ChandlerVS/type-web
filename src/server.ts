import {app} from "./app";
import {logger} from "./lib/framework/logger";
import {Server} from "./lib/framework/server";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

const PORT: number = <number><unknown>process.env.NODE_PORT || 3000;
const server = new Server(app, PORT);



/**
 * Startup Hooks
 * Register the functions that you would like to run before the program starts listening.
 * This is where you would want to initialize any database connections or other such things.
 * Startup Hooks must resolve a promise with a boolean set to true. Any rejected promises will cause the program to crash.
 * Below is an example of a basic startup hook.
 */
server.registerStartupHook(() => {
    return new Promise((resolve, reject) => {
        logger.info("Starting TypeWeb...");
        resolve(true);
    });
});

/**
 * This startup hook checks for an ENV file. If it exists, the ENV file gets loaded into the program
 */
server.registerStartupHook(() => {
    return new Promise((resolve, reject) => {
        if(fs.existsSync(path.join(process.cwd(), '.env'))) {
            logger.info("A .env file exists. Loading environment variables.");
            dotenv.config();
        } else {
            logger.info("A .env file does not exist. Environment variables must be loaded from somewhere else.");
        }
        return resolve(true);
    });
});

// noinspection JSIgnoredPromiseFromCall
server.start();
