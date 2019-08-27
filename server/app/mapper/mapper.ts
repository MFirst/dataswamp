import { IMapper } from "./mapper.interface";
import { IBase } from "./base.interface";

export class Mapper implements IMapper{

    Map(dataSet: any[][]): IBase {
        throw new Error("Method not implemented.");
    }
    
}