import { expect } from 'chai';
import { Sqlite } from "./sqlite";
import { IDs } from "./iDs";
import { DatabaseConnetor } from './DatabaseConnector';

describe('dataStoreTest', function () {
  const s: IDs = new Sqlite("testdb.db");
  const databaseConnector = new DatabaseConnetor();

  it('createTable', function () {

    s.createTable("awesomeTableName", ['Sex', 'FirstName', 'LastName', 'Age']);
    var result = databaseConnector.getSql("SELECT name FROM sqlite_master WHERE type='table' AND name='awesomeTableName';")
    
    console.log(result);
    expect(result)
  });


  it("dropTable", function()  {
    s.drop('awesomeTableName');
    
  });
});