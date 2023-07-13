import express from "express";
import { PORT } from "../config/config";
import ROUTER from "./routes/router";
import connectMongo from "./repositories/mongo/init.repository";

const app = express();

app.use(express.json());

app.use('/api/v1', ROUTER);

export default function startServer() {
    app.listen(PORT, () => {
        console.log(`SERVER STARTED IN PORT: ${PORT}`)
    })

    connectMongo;
}