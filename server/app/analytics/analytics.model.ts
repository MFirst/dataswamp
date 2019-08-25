export default class AnalyticsColumn {

  constructor(name: string, nullCount: number = 0, numberCount: number = 0, floatCount: number = 0, stringCount: number = 0, dateCount: number = 0, boolCount: number = 0) {
    this.name = name
    this.nullCount = nullCount
    this.numberCount = numberCount
    this.floatCount = floatCount
    this.stringCount = stringCount
    this.dateCount = dateCount
    this.boolCount = dateCount
  }

  public name: string;

  public nullCount: number;

  public numberCount: number;
  
  public floatCount: number;

  public stringCount: number;

  public dateCount: number;

  public boolCount: number;
}