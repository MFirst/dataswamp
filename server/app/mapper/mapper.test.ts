import { expect } from 'chai';

import { Base } from "./base";
import { IBase } from "./base.interface";

class TestObj extends Base{
  [key: string]: any

    name : string
    type : string

    constructor(id : number, name : string, type : string) {
      super(id)
      this.name = name
      this.type = type
    }
}

const testDataSet = [['id', 'name', 'type'], ['1', 'ciorba', 'zeama']]
const testObj = new TestObj(1, 'ciorba', 'zeama')

describe('mapDynamicObject', function() {
  it('mapObjectToDataSet', function() {
    let result = testObj.Map()
      expect(result[1][0]).to.equal(`${testObj.id}`)
      expect(result[1][1]).to.equal(testObj.name)
      expect(result[1][2]).to.equal(testObj.type)
    })

  it('mapDataSetToObject', function() {
    let testBase : IBase = new Base(0)
    testBase = testObj.MapDataSet(testDataSet)
      expect(`${(<TestObj>testBase).id}`).to.equal(testDataSet[1][0])
      expect((<TestObj>testBase).name).to.equal(testDataSet[1][1])
      expect((<TestObj>testBase).type).to.equal(testDataSet[1][2])
  })
})