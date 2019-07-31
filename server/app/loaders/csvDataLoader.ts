import DataLoader from './dataLoader.interface';
import * as fs from 'fs';
import csvParser from 'csv-parser';


export default class CsvDataLoader implements DataLoader {
    loadFile(path: string): void {
        const results: Array<any> = [];
        console.log('loading...', path)
        
        fs.createReadStream(path)
      .pipe(csvParser())
      .on('data', data => {
          
          results.push(data)
        })
      .on('end', () => {
        console.log(results);
      });
    }

}