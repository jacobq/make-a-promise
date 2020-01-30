# make-a-promise

This is an extremely short bit of code that simply provides an alternative way to create a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object.

```js
// example.js

import { createReadStream } from 'fs';
import { makePromise } from 'make-a-promise';

async function readFromStream(fileName) {
  const { promise, resolve, reject } = makePromise();
  createReadStream(fileName)
    // ... (pipe, handle events, etc.) ...
    .on('end', resolve)
    .on('error', reject);
  return promise;
}
```
