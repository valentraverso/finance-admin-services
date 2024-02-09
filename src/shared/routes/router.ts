import { Router } from "express";
import accountRouter from "../../modules/accounts/adapter/express/accounts.route";
import transactionRouter from "../../modules/transactions/adapter/express/transaction.route";


const router = Router();

router.use("/accounts", accountRouter);
router.use("/transactions", transactionRouter);

export default router;