import Analytics from './analytics.interface';
import AnalyticsColumn from './analytics.model';

export default class BasicAnalytics implements Analytics {

  constructor(columns: Array<AnalyticsColumn>) {
    this.columns = columns
  }
  public columns: Array<AnalyticsColumn>

  initialize(columns: string[]): void {
    columns.forEach(col => {
      this.columns.push(new AnalyticsColumn(col));
    })
  }

  feed(row: string[]): void {
    row.forEach((cell, index) => {
      if (cell === undefined) {
        this.columns[index].nullCount++;
      } else if(cell.match(/^-{0,1}\d+$/)){
        this.columns[index].numberCount++;
      }else if(cell.match(/^\d+\.\d+$/)){
        this.columns[index].floatCount++;
      } else {
        const lowerCaseValue = cell.toLowerCase();

        if (lowerCaseValue === 'true' || lowerCaseValue === 'false') {
          this.columns[index].boolCount++;
        } else {
          const isDate = Date.parse(cell) ? true : false;

          if (isDate) {
            this.columns[index].dateCount++;
          } else {
            this.columns[index].stringCount++;
          }
        }
      }
    })
  }
}