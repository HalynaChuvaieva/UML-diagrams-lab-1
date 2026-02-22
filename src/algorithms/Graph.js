export interface GraphJSON<T> {
  vertices: T[];
  edges: [T, T][];
}

export interface SpanningTree<T> {
  vertices: T[];
  edges: [T, T][];
}

export default class Graph<T> {

  private vertices: Set<T>;
  private adjacency: Map<T, Set<T>>;

  constructor(initialVertices: T[] = []) {
    this.vertices = new Set(initialVertices);
    this.adjacency = new Map();

    for (const v of initialVertices) {
      this.adjacency.set(v, new Set());
    }
  }


  public addVertex(vertex: T): void {
    if (!this.vertices.has(vertex)) {
      this.vertices.add(vertex);
      this.adjacency.set(vertex, new Set());
    }
  }

  public addEdge(from: T, to: T): void {
    this.addVertex(from);
    this.addVertex(to);

    this.adjacency.get(from)!.add(to);
    this.adjacency.get(to)!.add(from); 
  }

  public clear(): void {
    this.vertices.clear();
    this.adjacency.clear();
  }


  public bfs(start: T): T[] {
    if (!this.vertices.has(start)) return [];

    const visited = new Set<T>();
    const queue: T[] = [start];
    const result: T[] = [];

    visited.add(start);

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current);

      for (const neighbor of this.adjacency.get(current)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  public buildSpanningTree(start: T): SpanningTree<T> {
    if (!this.vertices.has(start)) {
      return { vertices: [], edges: [] };
    }

    const visited = new Set<T>();
    const edges: [T, T][] = [];
    const queue: T[] = [start];

    visited.add(start);

    while (queue.length > 0) {
      const current = queue.shift()!;

      for (const neighbor of this.adjacency.get(current)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          edges.push([current, neighbor]);
          queue.push(neighbor);
        }
      }
    }

    return {
      vertices: Array.from(visited),
      edges
    };
  }

public toJSON(): GraphJSON<T> {
  const edges: [T, T][] = [];
  const seen = new Set<string>();

  for (const [from, neighbors] of this.adjacency) {
    for (const to of neighbors) {
      const key = `${from}->${to}`;
      const reverseKey = `${to}->${from}`;

      if (!seen.has(reverseKey)) {
        edges.push([from, to]);
        seen.add(key);
      }
    }
  }

  return {
    vertices: Array.from(this.vertices),
    edges
  };
}
  
  public fromJSON(data: GraphJSON<T>): void {
    this.clear();

    for (const v of data.vertices) {
      this.addVertex(v);
    }

    for (const [from, to] of data.edges) {
      this.addEdge(from, to);
    }
  }
}