import { expect } from "chai";
import { describe } from "mocha";
import SQLExecutor from "./sql.executor";

describe("SQL Executor", function() {
  const randomDbName = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);

  let executor: SQLExecutor;

  it("expect to create database", async () => {
    const location = `./data/${randomDbName}`;
    executor = new SQLExecutor(location);
  });

  it("expect to create table from array of column names", async () => {
    await executor.createTable("projects", ["name", "hash"]);
  });

  it("expect to insert 3 rows", async () => {
    await executor.insertValues(
      "projects",
      ["name", "hash"],
      [["name1", "hash1"], ["name2", "hash2"], ["name3", "hash3"]],
      2
    );
  });

  it("expect to remove row with id 1", async () => {
     const row = await executor.deleteById("projects", 1);
     console.log(row);
  });

  it("expect to get row with id 2", async () => {
    const row = await executor.getById("projects", 2);
    expect(row.id).to.eq(2);
  });

  it("expect to get al 3", async () => {
    const rows = await executor.getAll("projects");
    expect(rows.length).to.eq(2);
  });

  it("expect to remove database file", () => {
    executor.removeDatabase();
  });
});
