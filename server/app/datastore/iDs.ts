export interface IDs {
    createTable(tableName: string, tableColumns: Array<string>): Promise<any>;
    insert(tableName: string, data: Array<string>): void;
    delete(tableName: string): void;
}
