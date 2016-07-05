// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (filename, callback) => {
  let sum = 0;
  fs.readFile(filename, function (err, data) {
    if (err) {
      return false;
    } else {
      let fileString =  data.toString();
      let fileStrings = fileString.split('\n');
      for (let i = 0; i < fileStrings.length; i++) {
        if (isNaN(fileStrings[i])) {
          return callback(new Error('Error!'), null);
        } else {
          sum += Number(fileStrings[i]);
        }
      }
      return callback(null, sum);
    }
  });
};

module.exports = {
  sumLines,
};
