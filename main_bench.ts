import { convertToCurrencyBigNumber } from "./main.ts";

Deno.bench(function addSmall() {
  convertToCurrencyBigNumber(3.006);
});

Deno.bench(function addBig() {
  convertToCurrencyBigNumber(300.59999999999997);
});
