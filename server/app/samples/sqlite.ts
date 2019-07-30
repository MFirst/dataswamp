import { Database } from "sqlite3";

export default class SQLLiteConnector {
  private db: Database;

  constructor(dbfilepath: string) {
    this.db = new Database(dbfilepath);
  }

  async createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT)`;
    await this.db.run(sql);
  }

  async insertProject(name: string) {
    await this.db.run("INSERT INTO projects (name) VALUES (?)", [name]);
  }

  async getProjects(callback: Function) {
    return await this.db.get("SELECT * FROM projects", callback);
  }
}
