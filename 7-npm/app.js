const _ = require('lodash');

const arr = [1, [2, [3, [4]], 5, [[[6]]]]]

const resWithLodash = _.flattenDeep(arr)
const resWithPlainJS = arr.flat()

console.log(resWithLodash)

console.log(arr.flat())