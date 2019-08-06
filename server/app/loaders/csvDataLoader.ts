import IDataLoader from './dataLoader.interface';
import FileColumnsInfo from './fileColumnsInfo'
import * as fs from 'fs';
import csvParser from 'csv-parser';
import FileDataView from './fileDataView';


export default class CsvDataLoader implements IDataLoader {

    parseFile(path: string): Promise<FileDataView> {
        const results: Array<any> = [];
        
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

    getFileColumnsInfo(results: Array<any>): FileDataView{ // add this to interface

      let firstObj = results[0];
      let columns = Object.keys(firstObj);
      let columnsInfo = new FileColumnsInfo(columns.length, columns);

      return new FileDataView(columnsInfo, results);
    }
}