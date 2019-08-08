import Analytics from './analytics.interface';
import AnalyticsColumn from './analytics.model';

export default class BasicAnalytics implements Analytics {

    constructor(columns: Array<AnalyticsColumn>) {
        this.columns = columns
    }
    public columns : Array<AnalyticsColumn>

    initialize(columns: string[]): void {
        columns.forEach(col => {
            this.columns.push(new AnalyticsColumn(col));
        })
    }    
    
    feed(row: string[]): void {
        throw new Error("Method not implemented.")
    }
}