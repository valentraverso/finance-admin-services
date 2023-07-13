export interface transactionEntity {
    id: String;
    amount: Number;
    description: String;
    type: String;
    accountId: String;
}

export type createTransactionDTO = Omit<transactionEntity, "id">;