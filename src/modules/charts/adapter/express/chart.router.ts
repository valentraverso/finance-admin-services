import { Router } from "express";
import ChartController from "./chart.controller";
import ChartUseCase from "../../application/usecases/chart.usecase";

const chartRouter = Router();
const chartUseCase = new ChartUseCase();
const chartController = new ChartController(chartUseCase);

chartRouter.post("/create", chartController.create.bind(chartController));

export default chartRouter;