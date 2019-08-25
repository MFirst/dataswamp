import { expect } from "chai";
import SQLLite from "./sqlite";
import { unlink } from "fs";

describe("instantiate", function() {
  let instance = new SQLLite("data/testdb.db");

  it("create database", function() {
    expect(instance).to.not.be.undefined;
  });

  describe("tables", function() {
    it("create table", async () => {
      await instance.createTable();
    });

    it("insert into table", async () => {
      await instance.insertProject("project");
    });

    it("read from table", async () => {
      await instance.getProjects((err: any, rows: Array<any>) => {
        console.log(rows);
      });
    });

    // it("cleanup", () => {
    //   unlink("data/testdb.db", () => {});
    // });
  });
});
