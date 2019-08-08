import { expect } from 'chai';
import { Sqlite } from "./sqlite";

describe("instantiate", function () {
    let instance = new Sqlite("data", "testdb.db");

    it("create database", function () {
        expect(instance).to.not.be.undefined;
    });

    // it("run sql", async () => {
    //     await instance.runSql("sqlSatement");
    // });
})
