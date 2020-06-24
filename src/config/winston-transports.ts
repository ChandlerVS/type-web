import winston from "winston";
import * as Transport from 'winston-transport';

const winstonTransports: Transport[] | Transport = [
    new winston.transports.Console({format: winston.format.simple()}),
    new winston.transports.File({filename: 'storage/logs/error.log', level: 'error'}),
    new winston.transports.File({filename: 'storage/logs/application.log'})
];

export {winstonTransports};
