class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> {

  private head: ListNode<T> | null = null;
  private length: number = 0;

  constructor(values: T[] = []) {
    for (const value of values) {
      this.append(value);
    }
  }

  /* ==================== Insert ==================== */

  public append(value: T): void {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  public prepend(value: T): void {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  public insertAt(index: number, value: T): void {
    if (index <= 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const node = new ListNode(value);
    let prev = this.getNode(index - 1)!;

    node.next = prev.next;
    prev.next = node;
    this.length++;
  }

  /* ==================== Remove ==================== */

  public removeAt(index: number): void {
    if (index < 0 || index >= this.length || !this.head) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.getNode(index - 1)!;
      prev.next = prev.next?.next ?? null;
    }

    this.length--;
  }

  public clear(): void {
    this.head = null;
    this.length = 0;
  }

  /* ==================== Access ==================== */

  public get(index: number): T | null {
    return this.getNode(index)?.value ?? null;
  }

  public indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public size(): number {
    return this.length;
  }

  /* ==================== Utils ==================== */

  public toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  private getNode(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    return current;
  }
}