import configs from "./configs";


function logger(data: any, mandatory: boolean = false) {
    if (configs?.logger || mandatory) {
        console.log(`\n[time]: ${new Date()} \n${data}`);
    }
}

function errorLogger(data: any) {
    console.error(`\n[time]: ${new Date()} \n${data}`);
}

export { logger, errorLogger };