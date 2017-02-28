// @flow

const names = require('color-names');
const oneColor = require('onecolor');
const converter = require('color-convert');

const difference = (l1, l2) =>
  l1.map((e, i) => (e - l2[i]) ** 2).reduce((a, b) => a + b);

const error = (hex: string, hox: string) => {
  const errorRGB = difference(converter.hex.rgb(hex), converter.hex.rgb(hox));
  const errorHSL = difference(converter.hex.hsl(hex), converter.hex.hsl(hox));
  return errorRGB + (errorHSL * 2);
};

export const normalize = (color: ?string) => {
  if (!color) { return '#000000'; }
  return oneColor(color).hex().toUpperCase();
};

export const findColor = (color: string) => {
  const hex = normalize(color);
  let min;
  Object.keys(names)
        .map(e => ({ error: error(e.substr(1), hex), name: names[e] }))
        .forEach((e) => {
          if (!min || e.error < min.error) { min = e; }
        });
  return min ? min.name : undefined;
};
