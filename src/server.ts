
import express from "express";
import { Server as SocketIoServer, Socket} from "socket.io";

const port = process.env.port || 3001
const app: express.Application = express();

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});
const io = new SocketIoServer(server, { transports: ["websocket"] });

io.on('connect', (socket: Socket) => {
    console.log(`connected ${socket.id}`)
});


