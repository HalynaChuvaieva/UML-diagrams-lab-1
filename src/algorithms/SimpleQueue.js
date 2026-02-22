class QueueNode<T> {
  public value: T;
  public next: QueueNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class SimpleQueue<T> {

  private head: QueueNode<T> | null = null;
  private tail: QueueNode<T> | null = null;
  private length: number = 0;

  constructor(values: T[] = []) {
    for (const v of values) {
      this.enqueue(v);
    }
  }

  /* ==================== Core ==================== */

  public enqueue(value: T): void {
    const node = new QueueNode(value);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  public dequeue(): T | null {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) this.tail = null;

    this.length--;
    return value;
  }

  /* ==================== Access ==================== */

  public peek(): T | null {
    return this.head ? this.head.value : null;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public size(): number {
    return this.length;
  }

  /* ==================== Utils ==================== */

  public clear(): void {
    this.head = this.tail = null;
    this.length = 0;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}