// @flow

const names = require('color-names');
const converter = require('color-convert');

const difference = (l1, l2) =>
  l1.map((e, i) => (e - l2[i]) ** 2).reduce((a, b) => a + b);

const error = (hex: string, hox: string): number => {
  const errorRGB = difference(converter.hex.rgb(hex), converter.hex.rgb(hox));
  const errorHSL = difference(converter.hex.hsl(hex), converter.hex.hsl(hox));
  return errorRGB + (errorHSL * 2);
};

const findHexName = (hex: string): ?string => {
  let min;
  Object.keys(names)
        .map(e => ({ error: error(e.substr(1), hex), name: names[e] }))
        .forEach((e) => {
          if (!min || e.error < min.error) { min = e; }
        });
  return min ? min.name : undefined;
};

module.exports = {
  findHexName,
};
