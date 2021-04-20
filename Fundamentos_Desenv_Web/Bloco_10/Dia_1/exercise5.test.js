const obj = require('./exercise5');
const obj1 = obj.obj1;
const obj2 = obj.obj2;
const obj3 = obj.obj3;

  it('comparing two objects', () => {
    expect(obj1).toEqual(obj2)
  })

  it('comparing two objects', () => {
    expect(obj1).not.toEqual(obj3)
  })

  it('comparing two objects', () => {
    expect(obj2).not.toEqual(obj3)
  })
