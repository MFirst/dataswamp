import { Database, RunResult } from "sqlite3";
import fs from "fs";

export default class DatabaseConnetor {
  private db: Database | undefined;
  private name: string;

  constructor(databaseName: string) {
    this.name =
      databaseName.indexOf(".db") === databaseName.length - 3
        ? databaseName
        : `${databaseName}.db`;
    this.db = new Database(this.name);
  }

  deleteDbFile() {
    if (this.db) {
      this.db.close();
    }
    return fs.unlinkSync(this.name);
  }

  async runSql(sqlStatement: string): Promise<any> {
    if (this.db) {
      const database = this.db;
      return new Promise((res, rej) => {
        database.run(sqlStatement, (err: Error | null, result: RunResult) => {
          if (err) {
            rej(err);
          } else {
            res(result);
          }
        });
      });
    }
  }

  async getSingle(sqlStatement: string, params: Array<any>): Promise<any> {
    if (this.db) {
      let db = this.db;
      return new Promise((res, rej) =>
        db.get(sqlStatement, params, (err, rows) => {
          if (err) {
            rej(err);
          } else {
            res(rows);
          }
        })
      );
    }
  }

  async getAll(sqlStatement: string): Promise<any> {
    if (this.db) {
      let db = this.db;
      return new Promise((res, rej) =>
        db.all(sqlStatement, (err, rows) => {
          if (err) {
            rej(err);
          } else {
            res(rows);
          }
        })
      );
    }
  }

  async getTableDetails(tableName: string): Promise<any> {
    console.log("begining");
    var data = [];
    console.log(this.db);
    if (this.db) {
      let query = `PRAGMA table_info('${tableName}'); `;
      console.log(query);
      await this.db.run(
        query,
        function(err: any, rsp: Array<any>) {
          console.log("running query");
          console.log(typeof rsp);
          console.log(rsp);
          // if (rsp.rows.length > 0) {
          //     for (var i = 0; i < rsp.rows.length; i++) {
          //         data.push(rsp.rows.item(i).name);
          //     }
          // }
          // console.log(rsp.rows.item(0).name);
          return Promise.resolve(rsp);
        },
        function(error: any) {
          console.log(JSON.stringify(error));
        }
      );
    }
  }
}
