import {server} from "./server.js";
import "./database.js";

server.start({port: 4000}, ({port}) => {
    console.log('Server is running on ' + port)
})