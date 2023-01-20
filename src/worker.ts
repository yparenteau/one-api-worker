import {connect, ConnectParameters} from "@activfinancial/one-api";

const ConnectParams: ConnectParameters = {
    user: "pragma-replay",
    password: "michio117119",
    host: "aop-ny4-replay.activfinancial.com",
    onLogMessage(logType, message) {
        console.log(message);
    },
};

(async () =>  {
    const session = await connect(ConnectParams);

})()

export {};
