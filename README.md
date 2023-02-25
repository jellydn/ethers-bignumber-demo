<h1 align="center">Welcome to ethers-bignumber-demo 👋</h1>
<p>
 How to convert to BigNumber's ethers.js without error.
</p>

## Motivation

You might have these kind of errors when use `BigNumber.from()` function.

```typescript
BigNumber.from(1.23);
```

```bash
Error: underflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-underflow ] (fault="underflow", operation="BigNumber.from", value=1.23, code=NUMERIC_FAULT, version=bignumber/5.7.0)
```

or

```typescript
BigNumber.from(Number.MAX_SAFE_INTEGER);
```

```bash
Error: overflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-overflow ] (fault="overflow", operation="BigNumber.from", value=9007199254740991, code=NUMERIC_FAULT, version=bignumber/5.7.0)
```

## Solution

```typescript
import { formatUnits, parseUnits } from "@ethersproject/units";

/**
 * Get decimal places of a number
 * @param val - number or string
 * @returns number of decimal places
 * @example getDecimalPlaces(300.59, 3) // 2
 */
function getDecimalPlaces(val: string | number, maxDigits = 8) {
  const decimalPlaces = val.toString().split(".")[1]?.length || 0;
  const roundTo = decimalPlaces > maxDigits ? maxDigits : decimalPlaces;
  return roundTo;
}

export function convertToBigNumber(val: string | number) {
  // get decimal places of val and convert to string
  const roundTo = getDecimalPlaces(val);
  return parseUnits(Number(val).toFixed(roundTo), roundTo);
}
```

## Usage

```typescript
convertToBigNumber(300.59999999999997); // BigNumber { _hex: "0x06ffb73300", _isBigNumber: true }

formatUnits(
  convertToBigNumber(300.59999999999997),
  getDecimalPlaces(300.59999999999997)
); // 300.6
```

## Develop

You need to install [deno](https://deno.land/manual@v1.31.0/getting_started/installation) before run below command.

```sh
deno task dev
```

## Test

```sh
deno test
```

## Reference

- [How to pass unsafe numbers into BigNumber? · Issue #452 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/452)

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q61Q7YM)
