import { expect } from "chai";
import { describe } from "mocha";
import DatabaseConnector from "./db.connector";
import fs from "fs";

describe("SQL DB Connector Test", function() {
  const randomDbName = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);

  describe("expect to create database", async () => {
    const location = `./data/${randomDbName}`;
    const database = new DatabaseConnector(location);

    it("expect file exists", async () => {
      const res = fs.existsSync(location);
    });

    it("expect to create table", async () => {
      const table = await database.runSql(
        "CREATE TABLE test ( id INTEGER PRIMARY KEY, name VARCHAR)"
      );
      const res1 = await database.runSql(
        'INSERT INTO test VALUES (null, "test1")'
      );
      const res2 = await database.runSql(
        'INSERT INTO test VALUES (null, "test2")'
      );
      try {
        await database.runSql("SELECT * FOM test");
      } catch (err) {
        expect(err.code).to.eq("SQLITE_ERROR");
      }
    });

    it("expect to get row with id 2", async () => {
      const res = await database.getSingle(`SELECT * FROM test where id = ?`, [
        2
      ]);
      expect(res.id).to.eq(2);
      expect(res.name).to.eq("test2");
    });

    it("expect to get all from test", async () => {
      const res = await database.getAll(`SELECT * FROM test`);
      expect(res).to.exist;
      expect(res.length).to.eq(2);
    });

    it("expect to delete database file", async () => {
      database.deleteDbFile();
      const res = fs.existsSync(location);
      expect(res).to.be.false;
    });
  });
});
