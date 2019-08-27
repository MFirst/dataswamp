import DatabaseConnector from "./db.connector";

export default class SQLExecutor {
  private connector!: DatabaseConnector;

  constructor(location: string) {
    let connector: DatabaseConnector | undefined;
    (async () => {
      connector = new DatabaseConnector(location);
    })();
    if (connector) {
      this.connector = connector;
    }
  }

  public async createTable(
    tableName: string,
    columnNames: Array<string>
  ): Promise<any> {
    let query = `CREATE TABLE ${tableName} ( id INTEGER PRIMARY KEY, ${columnNames.join(
      " varchar, "
    )} varchar);`;
    return this.connector.runSql(query);
  }

  public async insertValues(
    tableName: string,
    columns: Array<string>,
    data: Array<Array<any>>,
    chunkSize: number = 50
  ): Promise<any> {
    tableName = this.validateData(tableName, data);
    if (chunkSize <= 0) {
      throw new Error("Watch your language young man!");
    }

    for (let i = 0, j = data.length; i < j; i += chunkSize) {
      let temparray = data.slice(i, i + chunkSize);
      let sqlScript = `INSERT INTO ${tableName} (${columns.join(",")}) VALUES 
        ${temparray.map(item => `("${item.join('","')}")`).join(",")}  
      `;
      await this.connector.runSql(sqlScript);
    }
  }

  public async getById(tableName: String, id: number): Promise<any> {
    return await this.connector.getSingle(
      `SELECT * FROM ${tableName} where id = ?`,
      [id]
    );
  }

  public async getAll(tableName: String): Promise<any> {
    return await this.connector.getAll(`SELECT * FROM ${tableName}`);
  }

  public async removeDatabase() {
    return this.connector.deleteDbFile();
  }

  private validateData(tableName: string, data: Array<Object>): string {
    if (tableName === "" || !tableName) {
      throw new Error("Invalid table name");
    }

    if (data === null || data.length <= 0) {
      throw new Error("Data is invalid.");
    }

    return this.replaceInvalidCharacters(tableName);
  }

  private replaceInvalidCharacters(literal: string): string {
    return literal;
  }
}
