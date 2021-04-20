function techList(techNames, name) {
  if (techNames.length === 0) return 'Vazio!';
  return techNames.sort().map((tech) => ({ tech: tech, name: name }));
}

module.exports = techList;