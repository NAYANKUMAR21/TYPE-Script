import fs from 'fs';

import { OutPutTarget } from './Summary';
export class HtmlReport implements OutPutTarget {
  print(x: string): void {
    const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML REPORT</title>
  </head>
  <body>
    <div>
      <h1>AnaLysis Report on OutPut Target</h1>
      <h1>${x}</h1>
    </div>
  </body>
</html>
    `;

    fs.writeFileSync('report.html', html);
  }
}
