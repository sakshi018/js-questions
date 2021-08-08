//Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B

const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getPath(root, node) {
    const path = [];
    while(node!== root) {
        const parent = node.parentElement;
        const children = Array.from(parent.children);
        const nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = parent;
    }
    return path;
}

function getNodeFromPath(node, path) {
    while(path.length) {
        node = node.children[path.pop()];
    }
    return node;
}

function getIdenticalNode(rootA, rootB, nodeA) {
    const path = getPath(rootA, nodeA);
    const target = getNodeFromPath(rootB, path);
    console.log('targetNode', target);
    return target;
}

const targetNodde = getIdenticalNode(rootA, rootB, nodeA);

console.log(nodeB === targetNodde);