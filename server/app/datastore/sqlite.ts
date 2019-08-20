import { IDs } from "./iDs";
import { IDatabaseConnector } from "./IDatabaseConnector"
import { DatabaseConnetor } from "./DatabaseConnector";

export class Sqlite implements IDs {
    private databaseConnector: IDatabaseConnector;

    constructor(dbfilepath: string, dbfilename: string) {
        //to do: create if not exists
        this.databaseConnector = new DatabaseConnetor();
        this.databaseConnector.createDatabase(dbfilepath, dbfilename);
    }

    createTable(tableName: string, tableColumns: Array<string>): Promise<any> {
        tableName = this.validateData(tableName, tableColumns);

        let query = `CREATE TABLE ${tableName} ( ${tableColumns.join(" varchar, ")} varchar);`;
        console.log(query);
        return this.databaseConnector.runSql(query);
    }


    insertValues(tableName: string, data: Array<Array<string>>, chunkSize: number = 50): void {
        tableName = this.validateData(tableName, data);
        if (chunkSize <= 0) {
            throw new Error("Watch your language young man!");
        }

        let sqlScript = "";

        for (let i = 0; i < data.length; i++) {
            
            sqlScript += `INSERT INTO ${tableName}`
            
            
            if (i % chunkSize === 0) {
                this.databaseConnector.runSql(sqlScript);
            }
        }
    };

    drop(tableName: string): void {
        let sqlScript = `DROP TABLE ${tableName};`
        this.databaseConnector.runSql(sqlScript);
    }


    validateData(tableName: string, data: Array<Object>): string {
        if (tableName === "" || !tableName) {
            throw new Error("Invalid table name");
        }

        if (data === null || data.length <= 0) {
            throw new Error("Data is invalid.")
        }

        return this.replaceInvalidCharacters(tableName);
    }

    replaceInvalidCharacters(literal: string): string {
        return literal;
    }
}
