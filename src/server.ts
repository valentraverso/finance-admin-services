import express, { urlencoded } from "express";
import { PORT } from "./shared/config/config";
import ROUTER from "./shared/routes/router";
import connectMongo from "./shared/repositories/mongo/init.repository";
import cors from 'cors';
import helmet from "helmet";
import { configureRoutes } from "./infraestructure/express/routes";

const app = express();

app.use(cors({
    origin: '*',
}))

app.use(express.json());
app.use(helmet());

app.set('query parser', "extended");

// Set Routes
configureRoutes(app);

app.listen(PORT, () => {
    console.log(`SERVER STARTED IN PORT: ${PORT}`);
})

connectMongo;