import { formatUnits, parseUnits } from "npm:@ethersproject/units";
// import { BigNumber } from "npm:@ethersproject/bignumber";

/**
 * Get decimal places of a number
 * @param val - number or string
 * @returns number of decimal places
 * @example getDecimalPlaces(300.59, 3) // 2
 */
export function getDecimalPlaces(val: string | number, maxDigits = 8) {
  const decimalPlaces = val.toString().split(".")[1]?.length ?? 0;
  const roundTo = decimalPlaces > maxDigits ? maxDigits : decimalPlaces;
  return roundTo;
}

export function convertToBigNumber(val: string | number) {
  // get decimal places of val and convert to string
  const roundTo = getDecimalPlaces(val);
  return parseUnits(Number(val).toFixed(roundTo), roundTo);
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // Remove comment to see the error from BigNumber
  // console.log(BigNumber.from("0.01"));
  // console.log(BigNumber.from(1.23));
  // console.log(BigNumber.from(Number.MAX_SAFE_INTEGER));

  console.log(
    "Convert 300.59999999999997 =",
    convertToBigNumber(300.59999999999997),
    formatUnits(
      convertToBigNumber(300.59999999999997),
      getDecimalPlaces(300.59999999999997)
    )
  );

  console.log(
    "Convert 3.00600000 =",
    convertToBigNumber(3.006),
    formatUnits(convertToBigNumber(3.006), getDecimalPlaces(3.006))
  );

  console.log(
    `Convert MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER} =`,
    convertToBigNumber(Number.MAX_SAFE_INTEGER),
    formatUnits(convertToBigNumber(Number.MAX_SAFE_INTEGER), 0)
  );
}
