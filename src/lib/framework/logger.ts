import winston from "winston";
import {winstonTransports} from "../../config/winston-transports";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: winstonTransports
});

export {logger}
