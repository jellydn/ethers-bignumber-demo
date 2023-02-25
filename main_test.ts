import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { formatUnits } from "npm:@ethersproject/units";
import { convertToBigNumber } from "./main.ts";

Deno.test(function addFirstTest() {
  const result = convertToBigNumber(300.59999999999997);
  assertEquals(formatUnits(result, 8), "300.6");
});

Deno.test(function addSecondTest() {
  const result = convertToBigNumber(3.006);
  assertEquals(formatUnits(result, 3), "3.006");
});
