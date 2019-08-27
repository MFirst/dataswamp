import { IBase } from "./base.interface";

export class Base implements IBase {
    
    constructor(id: number) {
        this.id = id
    }
    
    public id : number;

    Map(base: Base): any[][] {
        throw new Error("Method not implemented.");
    }
}