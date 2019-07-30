import { expect } from 'chai';
import C from './calculator';

describe('calculate', function() {
  it('add', function() {
    let result = C.sum(5, 2);
    expect(result).equal(7);
  });
  
});