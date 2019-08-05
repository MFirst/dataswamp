import CsvDataLoader from './csvDataLoader';

describe('loader', function() {
    const csvLoader: CsvDataLoader = new CsvDataLoader();

  it('load', async function() {
      const results = await csvLoader.loadFile('resources/orase.csv'); // check no of columns
      console.log('len',results.length);

      console.log('fileObj',csvLoader.getFileColumnsInfo());
      
  });

});