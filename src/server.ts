import {app} from "./app";
import {logger} from "./lib/framework/logger";
import {Server} from "./lib/framework/server";

const PORT: number = <number><unknown>process.env.NODE_PORT || 3000;
const server = new Server(app, PORT);

/**
 * Startup Hooks
 * Register the functions that you would like to run asynchronously before the program starts listening.
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

// noinspection JSIgnoredPromiseFromCall
server.start();
