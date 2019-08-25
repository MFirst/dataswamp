export default class FileColumnsInfo {
    columnsCount: number;
    columnsName: Array<string>;

    constructor(columnsCount: number, columnsName: Array<string>) {
        this.columnsCount = columnsCount;
        this.columnsName = columnsName;
    }

    getColumnsName() {
        return this.columnsName;
    }

    getCount(){
        return this.columnsCount;
    }
}