const reverseString = require('./reversing');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses,', () => {
  expect(reverseString('Hello')).toEqual('olleh');
})