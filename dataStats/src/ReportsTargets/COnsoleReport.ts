import { OutPutTarget } from '../Summary';
export class ConsoleReport implements OutPutTarget {
  print(x: string): void {
    console.log(x);
  }
}
