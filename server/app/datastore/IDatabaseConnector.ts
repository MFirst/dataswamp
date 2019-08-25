export interface IDatabaseConnector{ 
    createDatabase( databaseName: string) : void;
    runSql(sqlStatement : string) : Promise<any>;
    getTableDetails(tableName : string) :void ;
}
