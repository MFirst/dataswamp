export default class Calculator {
  static sum(...values: Array<number>): number {
    if (values) {
      return values.reduce((memo, item) => memo + item, 0);
    } else {
      return 0;
    }
  }
}
