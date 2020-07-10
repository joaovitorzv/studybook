const functions = require('./functions');

test('It should sum 2 + 2 and return 4', () => {
  expect(functions.add(2,2)).toBe(4)
});

test('It should sum 2 + 2 and return NOT equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5)
});

test('It should be NULL', () => {
  expect(functions.isNull()).toBeNull();
})

test('Should be false', () => {
  expect(functions.checkValue(false)).toBeFalsy();
})

test('It should sum 2 + 2 and return 4', () => {
  expect(functions.add(2,2)).toBe(4)
});

test('User should be brad traversy object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' })
});

// less than & greater than

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 +  load2).toBeLessThanOrEqual(1600)
})


// Regex
test('There is no I in TEAM', () => {
  expect('team').not.toMatch(/I/i)
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['jhon', 'karen', 'admin'];
  expect(usernames).toContain('admin')
})


// Promisse
/*test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
})*/

// Asynchronous
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})