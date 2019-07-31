import { expect } from 'chai';
import CsvDataLoader from './csvDataLoader';

describe('loader', function() {
    const csvLoader: CsvDataLoader = new CsvDataLoader();

  it('load', function() {
    csvLoader.loadFile('resources/orase.csv');
  });

});