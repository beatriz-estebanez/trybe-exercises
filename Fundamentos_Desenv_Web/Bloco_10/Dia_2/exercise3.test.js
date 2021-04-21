const { expect } = require("@jest/globals");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};


describe('testing getUserName function', () => {
  it('user found', async () => {
    expect.assertions(1);
    await getUserName(4).then(result =>
      expect(result).toEqual('Mark'));
  });

  it('user not found', async () => {
    expect.assertions(1);
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  });
});