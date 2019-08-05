import { iDs } from "./iDs";
export class Sqlite implements iDs {
    createTable(tableName: string, tableColumns: Array<string>): string {
        if (tableName === "" || !tableName) {
            throw new Error("Invalid table name");
        }

        if (tableColumns === null || tableColumns.length <= 0) {
            throw new Error("You need to provide at least one column for the table")
        }

        tableName = this.replaceInvalidCharacters(tableName);

        let query = "";
        query = "CREATE TABLE " + tableName + " ( ";

        for (let i = 0; i < tableColumns.length; i++) {
            query += tableColumns[i] + " varchar,";
        }

        query = query.substring(0, query.length - 1);
        query += ");"
        return query;


    }


    insert(tableName: string, data: Array<string>): void {

    };

    delete(tableName: string): void {

    }

    replaceInvalidCharacters(literal: string): string {
        return literal.replace(/[^a-z0-9]/gi, '');
    }
}
