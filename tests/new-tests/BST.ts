import SimpleBST from ".../src/algorithms/SimpleBST";

describe('SimpleBST', () => {

  const compare = (a: number, b: number) => a - b;

  test('insert and inorder traversal', () => {
    const bst = new SimpleBST<number>(compare);
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);

    expect(bst.inorder()).toEqual([3, 5, 7]);
  });

  test('delete leaf node', () => {
    const bst = new SimpleBST<number>(compare);
    [5, 3, 7].forEach(v => bst.insert(v));

    bst.delete(3);
    expect(bst.inorder()).toEqual([5, 7]);
  });

  test('delete node with two children', () => {
    const bst = new SimpleBST<number>(compare);
    [5, 3, 7, 6, 8].forEach(v => bst.insert(v));

    bst.delete(7);
    expect(bst.inorder()).toEqual([3, 5, 6, 8]);
  });

  test('clear tree', () => {
    const bst = new SimpleBST<number>(compare);
    bst.insert(1);
    bst.clear();

    expect(bst.isEmpty()).toBe(true);
  });

});