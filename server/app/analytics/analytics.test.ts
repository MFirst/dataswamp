import { expect } from 'chai';
import BasicAnalytics from './analytics';

let analytics = new BasicAnalytics([])
const data = [['1', '2', '3'], ['true', '2', '3.2'], ['3', undefined, '4'], ['false', 'ale', 'nn'], ['1566283515856', 'tt', 'true']];
analytics.initialize(['a', 'b', 'c'])
  data.forEach((row: Array<any | undefined>) => {
    analytics.feed(row);
  })

describe('Test Initialize Analytics', function() {
  it('instanciateColumns', function () {
    expect(analytics.columns[0].name).to.equal('a')
  })
  it('instanciateColumns2', function () {
    expect(analytics.columns[1].name).to.equal('b')
  })
  it('instanciateColumns3', function () {
    expect(analytics.columns[2].name).to.equal('c')
  })
})

describe('Test Feed Analytics', function () {
  //feed col 0
  it('feedColumnsNumberCol0', function () {
    expect(analytics.columns[0].numberCount).to.equal(2)
  })
  it('feedColumnsFloatCol0', function () {
    expect(analytics.columns[0].floatCount).to.equal(0)
  })
  it('feedColumnsNullCol0', function () {
    expect(analytics.columns[0].nullCount).to.equal(0)
  })
  it('feedColumnsDateCol0', function () {
    expect(analytics.columns[0].dateCount).to.equal(1)
  })
  it('feedColumnsBoolCol0', function () {
    expect(analytics.columns[0].boolCount).to.equal(2)
  })
  it('feedColumnsStringCol0', function () {
    expect(analytics.columns[0].stringCount).to.equal(0)
  })

  //feed col 1
  it('feedColumnsNumberCol1', function () {
    expect(analytics.columns[1].numberCount).to.equal(2)
  })
  it('feedColumnsFloatCol1', function () {
    expect(analytics.columns[1].floatCount).to.equal(0)
  })
  it('feedColumnsNullCol1', function () {
    expect(analytics.columns[1].nullCount).to.equal(1)
  })
  it('feedColumnsDateCol1', function () {
    expect(analytics.columns[1].dateCount).to.equal(0)
  })
  it('feedColumnsBoolCol1', function () {
    expect(analytics.columns[1].boolCount).to.equal(0)
  })
  it('feedColumnsStringCol1', function () {
    expect(analytics.columns[1].stringCount).to.equal(2)
  })

  //feed col 2
  it('feedColumnsNumberCol2', function () {
    expect(analytics.columns[2].numberCount).to.equal(2)
  })
  it('feedColumnsFloatCol2', function () {
    expect(analytics.columns[2].floatCount).to.equal(1)
  })
  it('feedColumnsNullCol2', function () {
    expect(analytics.columns[2].nullCount).to.equal(0)
  })
  it('feedColumnsDateCol2', function () {
    expect(analytics.columns[2].dateCount).to.equal(0)
  })
  it('feedColumnsBoolCol2', function () {
    expect(analytics.columns[2].boolCount).to.equal(1)
  })
  it('feedColumnsStringCol2', function () {
    expect(analytics.columns[2].stringCount).to.equal(1)
  })
});