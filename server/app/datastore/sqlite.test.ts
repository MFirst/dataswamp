import { expect } from 'chai';
import {Sqlite} from "./sqlite";
import {iDs} from "./iDs";

describe('dataStoreTest', function() {
    const s : iDs = new Sqlite();
    it('createTable', function() {
    
      let result = s.createTable("awesomeTableName", ['Id','FirstName','LastName','Age']);
      expect(result).equal("CREATE TABLE awesomeTableName ( Id varchar,FirstName varchar,LastName varchar, Age varchar");
    });
    
  });