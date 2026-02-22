class StackNode<T> {
  public value: T;
  public next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class SimpleStack<T> {

  private top: StackNode<T> | null = null;
  private length: number = 0;

  constructor(values: T[] = []) {
    for (const v of values) {
      this.push(v);
    }
  }


  public push(value: T): void {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  public pop(): T | null {
    if (!this.top) return null;

    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }


  public peek(): T | null {
    return this.top ? this.top.value : null;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public size(): number {
    return this.length;
  }


  public clear(): void {
    this.top = null;
    this.length = 0;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let current = this.top;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result.reverse(); 
  }
}