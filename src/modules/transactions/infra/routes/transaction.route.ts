import { Router } from "express";
import { transactionUseCase } from "../../app/usecase/transaction.usecase";
import transactionRepository from "../repositories/transaction.repository";
import { transactionController } from "../controllers/transaction.controller";

const transactionRouter = Router();

const instanceUseCase: transactionUseCase = new transactionUseCase(transactionRepository);
const instanceController = new transactionController(instanceUseCase);

transactionRouter.post("/post", instanceController.post.bind(instanceController));

export default transactionRouter;