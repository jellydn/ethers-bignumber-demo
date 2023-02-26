<h1 align="center">Welcome to ethers-bignumber-demo 👋</h1>
<p>
 How to convert to BigNumber's ethers.js without error.
</p>

[![IT Man - Tech #34 - How to use BigNumber's ethers.js like PRO [Vietnamese]](https://i.ytimg.com/vi/uzE813GIeY4/hqdefault.jpg)](https://www.youtube.com/watch?v=uzE813GIeY4)

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
import { formatUnits, parseUnits } from "npm:@ethersproject/units";
import { BigNumber, BigNumberish } from "npm:@ethersproject/bignumber";

export function convertToCurrencyBigNumber(val: string | number): BigNumber {
  return parseUnits(Number(val).toFixed(2), 2);
}

export function convertFromCurrencyBigNumber(val: BigNumberish): string {
  return formatUnits(val, 2);
}
```

## Usage

```typescript
convertToCurrencyBigNumber(300.59999999999997); //  BigNumber { _hex: "0x756c", _isBigNumber: true }

convertFromCurrencyBigNumber(convertToCurrencyBigNumber(300.59999999999997)); //  300.6
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
