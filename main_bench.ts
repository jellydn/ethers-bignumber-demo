import { convertToBigNumber } from "./main.ts";

Deno.bench(function addSmall() {
  convertToBigNumber(3.006);
});

Deno.bench(function addBig() {
  convertToBigNumber(300.59999999999997);
});
