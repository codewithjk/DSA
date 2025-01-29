//implementing graph using Metrix
/*
[[1,0,1,1],
[1,0,1,1],
[1,0,1,1],
[1,0,1,1]]
*/

class Graph {
    constructor(numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        this.adjMetrix = [];
        for (let i = 0; i < numberOfNodes; i++) {
            this.adjMetrix[i] = new Array(numberOfNodes).fill(0)
        }
    }
    addEdge(node1, node2) {
        this.adjMetrix[node1][node2] = 1;
        this.adjMetrix[node2][node2] = 1;
    }
    getNeighboors(node) {
        return this.adjMetrix[node]
    }
    hasEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numberOfNodes && node2 >= 0 && node2 < this.numberOfNodes) {
            return this.adjMetrix[node1][node2] === 1 && this.adjMetrix[node2][node1] === 1;
        }
        return false;
    }
}



let graph = new Graph(3);


console.log(graph.adjMetrix)
console.log(graph instanceof Graph)
console.log(typeof Graph)