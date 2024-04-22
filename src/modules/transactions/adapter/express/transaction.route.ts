import { Router } from "express";
import { transactionUseCase } from "../../application/usecases/transaction.usecase";
import { transactionController } from "./transaction.controller";

const transactionRouter = Router();

const instanceUseCase: transactionUseCase = new transactionUseCase();
const instanceController = new transactionController(instanceUseCase);

transactionRouter.post("/create/one", instanceController.create.bind(instanceController));

transactionRouter.get("/spends/all", instanceController.getSpends.bind(instanceController));

export default transactionRouter;