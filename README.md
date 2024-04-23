# Export type

Using  `npm i export-type.tgz` 
(packed from commit b96959423ae70fdb2d2abad4b4fd797c8ffe549f):

- npm test

```
 ❯ src/enum.test.ts (1)
   × Initially, transactionStatus is Idle

 FAIL  src/enum.test.ts > Initially, transactionStatus is Idle
TypeError: Cannot read properties of undefined (reading 'Idle')
 ❯ src/enum.test.ts:9:61
      7|     })
      8| 
      9|     expect(client.transactionStatus).toBe(TransactionStatus.Idle)
       |                                                             ^
     10| })
     11| 
```

- npm run build:tsc

```js
import { connect } from 'ts-postgres';
void main();
async function main() {
    const client = await connect({
        database: 'postgres'
    });
    console.log(client.transactionStatus === 73 /* TransactionStatus.Idle */);
}
```

- npm run build:esbuild

```js
import { TransactionStatus, connect } from "ts-postgres";
void main();
async function main() {
  const client = await connect({
    database: "postgres"
  });
  console.log(client.transactionStatus === TransactionStatus.Idle);
}
```

node out-esbuild/main.js

```
import { TransactionStatus, connect } from "ts-postgres";
         ^^^^^^^^^^^^^^^^^
SyntaxError: The requested module 'ts-postgres' does not provide an export named 'TransactionStatus'
```

# Export value

Using npm i `export-value.tgz` (packed from commit beaf7da72ff2b3dc30e3a2bea177cbe2d54dcb10)

- npm test

```
 ✓ src/enum.test.ts (1)
   ✓ Initially, transactionStatus is Idle

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  19:43:06
   Duration  513ms (transform 122ms, setup 0ms, collect 102ms, tests 79ms, environment 0ms, prepare 115ms)
```

- npm run build:tsc

```js
import { connect } from 'ts-postgres';
void main();
async function main() {
    const client = await connect({
        database: 'postgres'
    });
    console.log(client.transactionStatus === 73 /* TransactionStatus.Idle */);
}
```

- npm run build:esbuild

```js
import { TransactionStatus, connect } from "ts-postgres";
void main();
async function main() {
  const client = await connect({
    database: "postgres"
  });
  console.log(client.transactionStatus === TransactionStatus.Idle);
}
```

node out-esbuild/main.js

```
true
```
