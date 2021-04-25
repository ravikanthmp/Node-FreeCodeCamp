const _ = require('lodash');

const arr = [1, [2, [3, [43]], 5, [[[6, 7, 8]]]]]

const resWithLodash = _.flattenDeep(arr)

console.log(resWithLodash)