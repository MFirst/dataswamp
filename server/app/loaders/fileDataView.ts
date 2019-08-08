import FileColumnsInfo from "./fileColumnsInfo";

export default class FileDataView {
    columnsInfo: FileColumnsInfo;
    data: Array<Array<string>>;

    constructor(columnsInfo: FileColumnsInfo, data: Array<Array<string>>) {
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