import FileColumnsInfo from "./fileColumnsInfo";

export default class FileDataView {
    columnsInfo: FileColumnsInfo;
    data: Array<any>;

    constructor(columnsInfo: FileColumnsInfo, data: Array<any>) {
        this.columnsInfo = columnsInfo;
        this.data = data;
    }

    getColumnsInfo() {
        return this.columnsInfo;
    }

    getData(): Array<any>{
        return this.data;
    }
}