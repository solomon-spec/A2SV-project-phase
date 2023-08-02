const lodash = require('lodash');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = lodash.chunk(array, 2);
console.log(chunkedArray);

array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const concatedArray = lodash.concat(array1, array2);