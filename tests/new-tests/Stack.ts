import SimpleStack from ".../src/algorithms/SimpleStack";

describe('SimpleStack', () => {

  test('push and pop', () => {
    const s = new SimpleStack<number>();
    s.push(1);
    s.push(2);

    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
    expect(s.pop()).toBeNull();
  });

  test('peek', () => {
    const s = new SimpleStack<number>();
    s.push(5);

    expect(s.peek()).toBe(5);
  });

  test('toArray order', () => {
    const s = new SimpleStack<number>();
    s.push(1);
    s.push(2);
    s.push(3);

    expect(s.toArray()).toEqual([1, 2, 3]);
  });

});