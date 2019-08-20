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

    async getTableDetails(tableName: string): Promise<any> {
        console.log("begining");
        var data = [];
        console.log(this.db);
        if (this.db) {
            let query = `PRAGMA table_info('${tableName}'); `;
            console.log(query);
            await this.db.run(query, function (err: any, rsp: Array<any>) {
                console.log('running query');
                console.log(typeof rsp);
                console.log(rsp);
                // if (rsp.rows.length > 0) {
                //     for (var i = 0; i < rsp.rows.length; i++) {
                //         data.push(rsp.rows.item(i).name);
                //     }
                // }
                // console.log(rsp.rows.item(0).name);
                return Promise.resolve(rsp);
            }, function (error: any) {
                console.log(JSON.stringify(error));
            });
        }
    }
}