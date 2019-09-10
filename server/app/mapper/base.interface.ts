export interface IBase{
  Map(): Array<string[]>;
  MapDataSet(dataSet: Array<string[]>): IBase;
}