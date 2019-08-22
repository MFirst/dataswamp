import CsvDataLoader from './csvDataLoader';
import { expect } from 'chai';

describe('loader', function() {
    const csvLoader: CsvDataLoader = new CsvDataLoader();

  it('load', async function() {
  
    //await assert.rejects(async () => await csvLoader.parseFile('resources/orasecata.csv'))
   
    //expect(csvLoader.parseFile('resources/orasecata.csv')).to.be.and.has.property('AAA File \'resources/orasecata.csv\' was not found.', 'found'); // ('File \'resources/orasecata.csv\' was not found.');
     const result = await csvLoader.parseFile('resources/orase.csv');
      // await assert.throws(async () => await csvLoader.parseFile('resources/orasecata.csv'), new Error('errrrrror'));

      // let firstTen =  result.getData().slice(0, 10);

      // assert.equal(firstTen.length,10);
  });
});