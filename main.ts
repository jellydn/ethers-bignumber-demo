import { formatUnits, parseUnits } from "npm:@ethersproject/units";
import { BigNumber, BigNumberish } from "npm:@ethersproject/bignumber";

export function convertToCurrencyBigNumber(val: string | number): BigNumber {
  return parseUnits(Number(val).toFixed(2), 2);
}

export function convertFromCurrencyBigNumber(val: BigNumberish): string {
  return formatUnits(val, 2);
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // Remove comment to see the error from BigNumber
  // console.log(BigNumber.from("0.01"));
  // console.log(BigNumber.from(1.23));
  // console.log(BigNumber.from(Number.MAX_SAFE_INTEGER));

  console.log(
    "Convert 300.59999999999997 =",
    convertToCurrencyBigNumber(300.59999999999997),
    convertFromCurrencyBigNumber(
      convertToCurrencyBigNumber(300.59999999999997),
    ),
  );

  console.log(
    "Convert 3.00600000 =",
    convertToCurrencyBigNumber(3.006),
    convertFromCurrencyBigNumber(convertToCurrencyBigNumber(3.006)),
  );

  console.log(
    `Convert MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER} =`,
    convertToCurrencyBigNumber(Number.MAX_SAFE_INTEGER),
    convertFromCurrencyBigNumber(
      convertToCurrencyBigNumber(Number.MAX_SAFE_INTEGER),
    ),
  );
}
