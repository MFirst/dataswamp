export interface IDs {
    createTable(tableName: string, tableColumns: Array<string>): Promise<any>;
    insertValues(tableName: string, data: Array<Array<string>>, chunkSize: number): void;
    drop(tableName: string): void;
}
