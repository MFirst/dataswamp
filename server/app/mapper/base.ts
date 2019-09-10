import { IBase } from "./base.interface";

export class Base implements IBase {

    [key: string]: any
    
    constructor(id: number) {
        this.id = id
    }
    
    public id : number;

    Map(): Array<string[]> {
      let result: Array<string[]> = [[]]
      let resultKeys : string[] = []
      let resultValues : string[] = []

      Object.keys(this).forEach((key: string) => {
        resultKeys.push(key)
        if (this.hasOwnProperty(key)) {
          const val = this[key];
        }
        resultValues.push(this[key])
      });

      result.push(resultKeys)
      result.push(resultValues)

      return result
    }
}