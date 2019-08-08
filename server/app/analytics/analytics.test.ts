import { expect } from 'chai';
import BasicAnalytics from './analytics';
import AnalyticsColumn from './analytics.model';

let analytics = new BasicAnalytics([])
const data = [['1', '2', '3'], ['a', '2', '3.2'], ['3', undefined, '4'], ['false', 'ale', 'nn'], ['12/12/2020', 'tt', 'true']];

describe('initialize', function () {
    it('instanciateColumns', function () {
        analytics.initialize(['a', 'b', 'c'])
        expect(analytics.columns[0].name).to.equal('a')
        expect(analytics.columns[1].name).to.equal('b')
        expect(analytics.columns[2].name).to.equal('c')
    })
    it('feedColumns', function () {
        data.forEach((row: Array<any | undefined>) => {
            analytics.feed(row);
        });
        expect(analytics.columns[0].name).to.equal('a')
        expect(analytics.columns[0].numberCount).to.equal(2)
        expect(analytics.columns[0].nullCount).to.equal(0)
        expect(analytics.columns[0].dateCount).to.equal(1)
        expect(analytics.columns[0].boolCount).to.equal(1)
        expect(analytics.columns[0].stringCount).to.equal(1)
        // row 2
        expect(analytics.columns[1].nullCount).to.equal(1)
    })
});