import express, { urlencoded } from "express";
import { PORT } from "./config/config";
import ROUTER from "./shared/routes/router";
import connectMongo from "./shared/repositories/mongo/init.repository";
import cors from 'cors';
import helmet from "helmet";

const app = express();

app.use(cors({
    origin: '*',
}))

app.use(express.json());
app.use(helmet());

app.set('query parser', "extended");

app.use('/api/v1', ROUTER);

app.listen(PORT, () => {
    console.log(`SERVER STARTED IN PORT: ${PORT}`);
})

connectMongo;