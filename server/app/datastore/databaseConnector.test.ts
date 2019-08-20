import { expect } from 'chai';
import { Sqlite } from "./sqlite";

describe("instantiate", function () {
    let instance = new Sqlite(".", "testdb.db");

    it("create database", function () {
        expect(instance).to.not.be.undefined;
    });

    it("create table", async () => {
        await instance.createTable("testTable1", ['Id', 'FirstName']);
    });

    
    // it("run sql", async () => {
    //     await instance.runSql("sqlSatement");
    // });

    it("gettabledetails", async() => {
        await instance.getTableDefinition("testTable");
    });

})
