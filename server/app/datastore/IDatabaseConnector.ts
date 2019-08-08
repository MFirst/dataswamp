export interface IDatabaseConnector{ 
    createDatabase(databasePath: string, databaseName: string) : void;
    runSql(sqlStatement : string) : Promise<any>;
    getTableDetails(tableName : string) :void ;
}
