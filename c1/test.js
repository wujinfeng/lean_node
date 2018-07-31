let assert = require('assert');
let CountStream = require('./countstream');
let countStream = new CountStream('example');
let fs = require('fs');
let passed = 0;

countStream.on('total', function (count) {
    assert.equal(count, 1);
    passed++;
});

console.log('__filename:', __filename)
fs.createReadStream(__filename).pipe(countStream);

process.on('exit', function () {
    console.log('Assertions passed:', passed);
});