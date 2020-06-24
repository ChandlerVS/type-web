import {app} from "./app";
import {logger} from "./lib/framework/logger";

const PORT = process.env.NODE_PORT || 3000;

const start = async () => {
    app.listen(PORT, () => {
        logger.info(`App listening on port ${PORT}`);
    });
};

// noinspection JSIgnoredPromiseFromCall
start();
