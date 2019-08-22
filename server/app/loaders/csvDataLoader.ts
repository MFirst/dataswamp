import IDataLoader from './dataLoader.interface';
import FileColumnsInfo from './fileColumnsInfo'
import * as fs from 'fs';
import csvParser from 'csv-parser';
import FileDataView from './fileDataView';


export default class CsvDataLoader implements IDataLoader {

  parseFile(path: string): Promise<FileDataView> {
    // await fs.stat(path, function (err) {
    //   if (err) {
    //     throw new Error(`File '${path}' was not found.`);
    //   }
    // })
 

    const results: Array<Array<string>> = [];
    const resultPromise = new Promise<FileDataView>((resolve, reject) => {

      fs.createReadStream(path)
        .pipe(csvParser())
        .on('data', data => {
          results.push(data)
        })
        .on('end', () => {
          resolve(this.getFileColumnsInfo(results));
        });
    })
    return resultPromise;
  }

  getFileColumnsInfo(results: Array<Array<string>>): FileDataView { // check for unexsting value in csv  (a,,c)

    let firstObj = results[0];
    let columns = Object.keys(firstObj);
    let columnsInfo = new FileColumnsInfo(columns.length, columns);

    return new FileDataView(columnsInfo, results);
  }
}