const chunk = require('./chunk');

test('Chunkarray function exists', () => {
  expect(chunk).toBeDefined();
})

test('Chunk in array of 10 values with the length of 2', () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const len = 2;
  const chunkedArr = chunk(numbers, len)

  expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
})