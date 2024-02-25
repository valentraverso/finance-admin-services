import { Router } from "express";
import accountRouter from "../../modules/accounts/adapter/express/accounts.route";
import transactionRouter from "../../modules/transactions/adapter/express/transaction.route";
import categorieRouter from "../../modules/categories/adapter/express/categorie.route";

const router = Router();

router.use("/accounts", accountRouter);
router.use("/transactions", transactionRouter);
router.use("/categories", categorieRouter);

export default router;