import {Controller} from "../lib/framework/controller";
import {HomeController} from "../controllers/home-controller";

const controllerStack: Array<Controller> = [
    new HomeController()
];

export {controllerStack}
