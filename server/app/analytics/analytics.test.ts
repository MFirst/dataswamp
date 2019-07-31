import { expect } from 'chai';
import BasicAnalytics from './analytics';
import AnalyticsColumn from './analytics.model';

let analytics = new BasicAnalytics([])

describe('initialize', function() {
    it('instanciateColumns', function() {
        analytics.initialize(['a', 'b', 'c'])
        expect(analytics.columns[0]).to.equal('a')
    })
});