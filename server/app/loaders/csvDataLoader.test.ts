import CsvDataLoader from './csvDataLoader';

describe('loader', function() {
    const csvLoader: CsvDataLoader = new CsvDataLoader();

  it('load', async function() {
      const result = await csvLoader.parseFile('resources/orase.csv'); // check no of columns
      let firstTen =  result.getData().slice(0, 10);
      console.log('len', firstTen);
      
  });

});