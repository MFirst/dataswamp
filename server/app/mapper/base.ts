import { IBase } from "./base.interface";

export class Base implements IBase {

    [key: string]: any
    
    constructor(id: number) {
        this.id = id
    }
    
    public id : number;

    public Map(): Array<string[]> {
      let result = []
      let resultKeys : string[] = []
      let resultValues : string[] = []

      Object.keys(this).forEach((key: string) => {
        resultKeys.push(key)
        if (this.hasOwnProperty(key)) {
          resultValues.push(`${this[key]}`)
        }
      });

      result.push(resultKeys)
      result.push(resultValues)

      return result
    }

    public MapDataSet(dataSet: Array<string[]>): IBase {
      if(dataSet.length < 1 || dataSet[0].length !== dataSet[1].length){
        throw Error("Invalid data provided");
      }

      let result: Base = new Base(0)
      const keys : string[] = dataSet[0]
      const values : string[] = dataSet[1]

      keys.forEach((key, index) => {
        result[key] = values[index]
      })

      return result
    }
}