const isAnagram = require('./anagram');

test('isAnagram function', () => {
  expect(typeof isAnagram).toEqual('function');
})

test('"cinema" is  an Anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
})

test('"Dirty room$#!" is  an Anagram of "Dormitory"', () => {
  expect(isAnagram('Dirty room$#!', 'Dormitory')).toBeTruthy();
})

test('"Car" is an Anagram of "Motocycle"', () => {
  expect(isAnagram('car', 'motocycle')).toBeFalsy();
})