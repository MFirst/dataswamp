import DataLoader from './dataLoader.interface';
import * as fs from 'fs';
import csvParser from 'csv-parser';


export default class CsvDataLoader implements DataLoader {
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
            console.log(results);
          });
    })


      return resultPromise;
    }


}