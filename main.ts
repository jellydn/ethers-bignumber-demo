import { formatUnits, parseUnits } from "npm:@ethersproject/units";

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

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
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
}
