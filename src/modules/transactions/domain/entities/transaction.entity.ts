export interface ITransactionEntity {
    id?: string;
    amount: number;
    description: string;
    type: number;
    date: Date;
    categorie: string;
    idAccount: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

export type createTransactionDTO = Omit<ITransactionEntity, "id">;