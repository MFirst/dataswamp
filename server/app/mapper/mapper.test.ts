import { Base } from "./base";

class TestObj extends Base{
    name : string
    type : string

    constructor(id : number, name : string, type : string) {
      super(id)
      this.name = name
      this.type = type
    }
}
describe('mapDynamicObject', function() {
  it('mapObjectToDataSet', function() {

    var testObj = new TestObj(1,'ciorba', 'zeama')
    let result = testObj.Map();
    console.log(result)
    });
});