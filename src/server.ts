import express from "express";
import { Server as SocketIoServer, Socket } from "socket.io";
import { Session } from "./models/session";
import { Events } from "./models/common/events";
import { generateJoinCode } from "./util/wordLoader";

const port = process.env.port || 3001;
const app: express.Application = express();

const sessions: { [k: string]: Session } = {};

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
const io = new SocketIoServer(server, { transports: ["websocket"] });

io.on("connection", (socket: Socket) => {
  console.log(`connected ${socket.id}`);

  socket.on(Events.JOIN_SESSION, (data: string) => {
    console.log(`Someone joined the session: ${socket.id}`);
    console.log(`Their join code was ${data}`);
  });

  socket.on(Events.CREATE_SESSION, () => {
    console.log("create");
    const joinCode = generateJoinCode(sessions);
    sessions["joinCode"] = {
      clients: [{ submitted: false }],
      joinCode: joinCode,
      roundState: "creating",
    };
    console.log(`Created new session with code: ${joinCode}`);
  });
});
