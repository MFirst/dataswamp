import FileDataView from "./fileDataView";

export default interface IDataLoader {
    parseFile(path: string): Promise<FileDataView>
    getFileColumnsInfo(results: Array<Array<string>>): FileDataView
}