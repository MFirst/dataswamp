export interface iDs{ 
    createTable(tableName: string, tableColumns: Array<string> ) : string;
    insert(tableName : string, data: Array<string>) : void;
    delete(tableName: string) : void ;
}
