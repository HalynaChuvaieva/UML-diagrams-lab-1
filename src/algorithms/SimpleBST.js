type Comparator<T> = (a: T, b: T) => number;

class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class SimpleBST<T> {

  private root: TreeNode<T> | null = null;
  private compare: Comparator<T>;

  constructor(compareFn: Comparator<T>) {
    this.compare = compareFn;
  }


  public insert(value: T): void {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (this.compare(value, current.value) < 0) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }


  public inorder(): T[] {
    const result: T[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: TreeNode<T> | null, out: T[]): void {
    if (!node) return;
    this.inorderTraversal(node.left, out);
    out.push(node.value);
    this.inorderTraversal(node.right, out);
  }


  public delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(
    node: TreeNode<T> | null,
    value: T
  ): TreeNode<T> | null {
    if (!node) return null;

    const cmp = this.compare(value, node.value);

    if (cmp < 0) {
      node.left = this.deleteNode(node.left, value);
    } else if (cmp > 0) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const successor = this.minNode(node.right)!;
      node.value = successor.value;
      node.right = this.deleteNode(node.right, successor.value);
    }

    return node;
  }

  private minNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }

  public clear(): void {
    this.root = null;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }
}