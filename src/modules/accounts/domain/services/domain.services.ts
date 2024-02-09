export default interface IAccountsService {
    /**
     * GET
     */
    findById({id, projection}: {id: string, projection?: any}): Promise<any>;

    /**
     * UPDATE
     */
    updateOne({ filters, data }: { filters: any, data: any }): Promise<any>;
}