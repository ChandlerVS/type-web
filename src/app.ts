import express from "express";
import {controllerStack} from "./config/controllers";

const app = express();

app.set('view engine', 'ejs');

/**
 * Middleware definitions here
 */
app.use(express.static('public'));

/**
 * NO NEED TO EDIT ANYTHING PAST THIS LINE
 * Goes through the list of controllers and adds them to the app
 */
controllerStack.forEach((controller) => {
    app.use(controller.getRouter());
});

export {app};
