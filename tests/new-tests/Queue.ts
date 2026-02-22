import SimpleQueue from ".../src/algorithms/SimpleQueue";

describe('SimpleQueue', () => {

  test('enqueue and dequeue', () => {
    const q = new SimpleQueue<number>();
    q.enqueue(1);
    q.enqueue(2);

    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBeNull();
  });

  test('peek', () => {
    const q = new SimpleQueue<number>();
    q.enqueue(10);

    expect(q.peek()).toBe(10);
  });

  test('size and isEmpty', () => {
    const q = new SimpleQueue<number>();

    expect(q.isEmpty()).toBe(true);
    q.enqueue(1);
    expect(q.size()).toBe(1);
  });

  test('toArray', () => {
    const q = new SimpleQueue<number>([1, 2, 3]);
    expect(q.toArray()).toEqual([1, 2, 3]);
  });

});