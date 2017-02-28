
# Name a Color!
<img src="https://img.shields.io/travis/RobinHaveneers/name-a-color.svg?style=flat-square"/>
<img src="https://img.shields.io/npm/v/name-a-color.svg?style=flat-square"/>
<img src="https://img.shields.io/npm/l/name-a-color.svg?style=flat-square"/>
<img src="https://img.shields.io/codecov/c/github/RobinHaveneers/name-a-color.svg?style=flat-square"/>
<img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"/>

```sh
$ npm install --save name-a-color
```

```js
import { findColor } from '../src/index';

findColor('#9b59b6')); // Returns 'Purple Plum'
findColor('8db600'));  // Returns 'Apple Green'

// Supports all of these formats
findColor('#a9d91d');
findColor('a9d91d');
findColor('#eee');
findColor('rgb(124, 96, 200)');
findColor('rgb(99%, 40%, 0%)');
findColor('rgba(124, 96, 200, .4)');
findColor('hsl(120, 75%, 75%)');
findColor('hsla(120, 75%, 75%, .1)');
findColor('hsv(220, 47%, 12%)');
findColor('hsva(120, 75%, 75%, 0)');
findColor([0, 4, 255, 120]);
findColor(["RGB", .5, .1, .6, .9]);
```
