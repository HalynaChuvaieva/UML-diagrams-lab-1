import LinkedList from ".../src/algorithms/LinkedList";

describe('LinkedList', () => {

  test('append and toArray', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('prepend', () => {
    const list = new LinkedList<number>();
    list.prepend(2);
    list.prepend(1);

    expect(list.toArray()).toEqual([1, 2]);
  });

  test('insertAt', () => {
    const list = new LinkedList<number>([1, 3]);
    list.insertAt(1, 2);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('removeAt', () => {
    const list = new LinkedList<number>([1, 2, 3]);
    list.removeAt(1);

    expect(list.toArray()).toEqual([1, 3]);
  });

  test('get and indexOf', () => {
    const list = new LinkedList<number>([5, 6, 7]);

    expect(list.get(1)).toBe(6);
    expect(list.indexOf(7)).toBe(2);
    expect(list.get(10)).toBeNull();
  });

});