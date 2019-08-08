import { IDs } from "./iDs";
import { IDatabaseConnector } from "./IDatabaseConnector"
import { DatabaseConnetor } from "./DatabaseConnector";

export class Sqlite implements IDs {
    private databaseConnector: IDatabaseConnector;

    constructor(dbfilepath: string, dbfilename: string) {
        this.databaseConnector = new DatabaseConnetor();
        this.databaseConnector.createDatabase(dbfilepath, dbfilename);
    }

    createTable(tableName: string, tableColumns: Array<string>): Promise<any> {
        if (tableName === "" || !tableName) {
            throw new Error("Invalid table name");
        }

        if (tableColumns === null || tableColumns.length <= 0) {
            throw new Error("You need to provide at least one column for the table")
        }

        tableName = this.replaceInvalidCharacters(tableName);

        let query = `CREATE TABLE ${tableName} ( ${tableColumns.join(" varchar, ")} varchar);`;

        return this.databaseConnector.runSql(query);
    }


    insert(tableName: string, data: Array<string>): void {

    };

    delete(tableName: string): void {

    }

    replaceInvalidCharacters(literal: string): string {
        return literal.replace(/[a-zA-Z1-9_]/gi, '');
    }
}
