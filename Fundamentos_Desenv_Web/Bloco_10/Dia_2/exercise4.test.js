// busca repositótios por URL
// retorna LISTA

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};


describe('testing getRepos function', () => {
  it('return that two repos are in the list', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(listNames => {
      expect(listNames).toContain('sd-01-week4-5-project-todo-list');
      expect(listNames).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});