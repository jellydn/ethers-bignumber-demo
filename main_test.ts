import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { formatUnits } from "npm:@ethersproject/units";

import { convertToCurrencyBigNumber } from "./main.ts";

Deno.test(function addFirstTest() {
  const result = convertToCurrencyBigNumber(300.59999999999997);
  assertEquals(formatUnits(result, 2), "300.6");
});

Deno.test(function addSecondTest() {
  const result = convertToCurrencyBigNumber(3.006);
  assertEquals(formatUnits(result, 2), "3.01");
});
