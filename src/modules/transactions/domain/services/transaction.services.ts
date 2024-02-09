export default interface ITransactionService{
    /**
     * POST
     */
    post(data: any): Promise<any>;

    /**
     * GET
     */
    getLastTransaction({idAccount}: {idAccount: string}): Promise<any>;
}