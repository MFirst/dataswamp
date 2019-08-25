import { expect } from 'chai';
import { Sqlite } from "./sqlite";

describe("televizor", function () {
    let instance = new Sqlite("testdb1.db");

    it("create database", function () {
        expect(instance).to.not.be.undefined;
    });

    it("create table", async () => {
        await instance.createTable("testTable1", ['Age', 'FirstName']);
    });

    it("drop table", async() => {
        await instance.drop("testTable1");
    });
})
