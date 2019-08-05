import DataLoader from './dataLoader.interface';
import FileColumnsInfo from './fileColumnsInfo'
import * as fs from 'fs';
import csvParser from 'csv-parser';


export default class CsvDataLoader implements DataLoader {

    result: Array<any>; 

    constructor (){
      this.result = [];
    }

    loadFile(path: string): Promise<Array<any>> {
        const results: Array<any> = [];
        console.log('loading...', path)
        
    const resultPromise = new Promise<Array<any>>((resolve, reject) => {
        fs.createReadStream(path) //return promise as func
          .pipe(csvParser())
          .on('data', data => {
    
              results.push(data)
            })
          .on('end', () => { // resolve promise
            resolve(results);
            this.result = results;
            console.log(results);
          });
    })

      return resultPromise;
    }

    getFileColumnsInfo(){

      let firstObj = this.result[0];
      let columns = Object.keys(firstObj);

      return new FileColumnsInfo(columns.length, columns);
    }

}