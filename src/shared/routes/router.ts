import { Router } from "express";
import accountRouter from "../../modules/accounts/infra/routes/accounts.route";
import transactionRouter from "../../modules/transactions/infra/routes/transaction.route";


const router = Router();

router.use("/accounts", accountRouter);
router.use("/transactions", transactionRouter);

export default router;