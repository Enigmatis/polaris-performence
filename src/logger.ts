import {LoggerConfiguration, PolarisGraphQLLogger} from "@enigmatis/polaris-core";

export const loggerConfig : LoggerConfiguration = {
    loggerLevel: 'debug',
    writeToConsole: true,
    writeFullMessageToConsole: false
};

const applicationLogProperties = {
    id: 'example',
    name: 'example',
    component: 'repo',
    environment: 'dev',
    version: '1'
};

export const polarisGraphQLLogger = new PolarisGraphQLLogger({
    loggerLevel: 'debug',
    writeToConsole: true,
    writeFullMessageToConsole: false
}, applicationLogProperties);