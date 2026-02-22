import Graph from ".../src/algorithms/Graph";

describe('Graph', () => {

  test('adds vertices and edges', () => {
    const g = new Graph<number>();
    g.addEdge(1, 2);

    const json = g.toJSON();
    expect(json.vertices.sort()).toEqual([1, 2]);
    expect(json.edges.length).toBe(1);
  });

  test('bfs traversal order', () => {
    const g = new Graph<number>();
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);

    const order = g.bfs(1);
    expect(order).toEqual([1, 2, 3, 4]);
  });

  test('builds spanning tree correctly', () => {
    const g = new Graph<number>();
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(3, 4);

    const tree = g.buildSpanningTree(1);

    expect(tree.vertices.sort()).toEqual([1, 2, 3, 4]);
    expect(tree.edges.length).toBe(3);
  });

  test('fromJSON restores graph', () => {
    const g1 = new Graph<number>();
    g1.addEdge(1, 2);

    const g2 = new Graph<number>();
    g2.fromJSON(g1.toJSON());

    expect(g2.bfs(1)).toEqual([1, 2]);
  });

});