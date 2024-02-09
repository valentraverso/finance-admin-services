import express from "express";
import { PORT } from "../config/config";
import ROUTER from "./routes/router";
import connectMongo from "./repositories/mongo/init.repository";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

app.use(express.json());

app.use('/api/v1', ROUTER);

export default function startServer() {


    app.listen(PORT, () => {
        console.log(`SERVER STARTED IN PORT: ${PORT}`)
    })

    connectMongo;
}