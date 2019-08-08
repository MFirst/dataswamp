import { IDatabaseConnector } from "./IDatabaseConnector";
import { Database, RunResult } from "sqlite3"

export class DatabaseConnetor implements IDatabaseConnector {
    private db: Database | undefined;

    createDatabase(databasePath: string, databaseName: string): void {
        this.db = new Database(`${databasePath}/${databaseName}`);
    }

    async runSql(sqlStatement: string): Promise<any> {
        if (this.db) {
            await this.db.run(sqlStatement);
        }
    }

    getTableDetails(tableName: string) : void {
        var data = [];
        if (this.db) {
            this.db.run(`PRAGMA table_info('${tableName}') `, [], function (rsp : any) {
                console.log(typeof rsp)
                if (rsp.rows.length > 0) {
                    for (var i = 0; i < rsp.rows.length; i++) {
                        data.push(rsp.rows.item(i).name);
                    }
                }
                console.log(rsp.rows.item(0).name);

            }, function (error: any) {
                console.log(JSON.stringify(error));
            });
        }
    }
}