import { expect } from 'chai';
import { Sqlite } from "./sqlite";
import { IDs } from "./iDs";

describe('dataStoreTest', function () {
  const s: IDs = new Sqlite("C:\temp", "testDb");
  it('createTable', function () {

    let result = s.createTable("awesomeTableName", ['Id', 'FirstName', 'LastName', 'Age']);
    expect(result).equal("CREATE TABLE awesomeTableName ( Id varchar,FirstName varchar,LastName varchar,Age varchar);");
  });

  it("drop table", async () => {
    
  });
});