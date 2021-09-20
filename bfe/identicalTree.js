/**
 * Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B.

By corresponding, we mean a and b have the same relative position to their DOM tree root.

follow up

This could a problem on general Tree structure with only children.

Could you solve it recursively and iteratively?

Could you solve this problem with special DOM api for better performance?

What are the time cost for each solution?
 */

// soln 1 
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
    if (rootA === target) return rootB
    // 1. get the path Array<number>
    const path = []
    let node = target
    while (node !== rootA) {
      const parent = node.parentElement
      const children = Array.from(parent.children)
      const index = children.indexOf(node)
      path.push(index)
      node = parent
    }
     
    // 2. apply the path(reversed) to rootB
    return path.reduceRight((result, index) => result.children[index],  rootB)
  }

  //soln 2 domAPI treewalker

  /**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
    const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
  
    let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];
  
    while (currentNodes[0] !== target) {
      currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
    }
  
    return currentNodes[1];
  }

  // soln 3 BFS

  const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    if (rootA === target) {
      return rootB;
    }
  
    const queueA = [rootA];
    const queueB = [rootB];
  
    while(queueA.length) {
      const currentElementA = queueA.shift();
      const currentElementB = queueB.shift();
  
      if (currentElementA === target) {
        return currentElementB;
      }
  
      queueA.push(...currentElementA.children);
      queueB.push(...currentElementB.children);    
    }
    return null;
  }

  //soln 4 recursive 
  const findCorrespondingNode = (rootA, rootB, target) => {
    if(rootA === target) {
      return rootB;
    }
    for (let i = 0; i < rootA.children.length; i++) {
      const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
      if(foundNode) return foundNode;
    }
  }