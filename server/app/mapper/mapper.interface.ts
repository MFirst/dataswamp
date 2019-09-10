import { IBase } from "./base.interface";

export interface IMapper{
    
    Map(dataSet: Array<Array<any>>): IBase;
    Map(dataSet: IMapper): Array<Array<any>>;
}