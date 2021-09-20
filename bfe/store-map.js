/**
 * We have Map in es6, so we could use any data as key, such as DOM element.

const map = new Map()
map.set(domNode, somedata)
What if we need to support old JavaScript env like es5, how would you create your own Node Store as above?

You are asked to implement a Node Store, which supports DOM element as key.

class NodeStore {

  set(node, value) {

  }
  
  get(node) {

  }
  
  has(node) {

  }
}
 */

class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor() {
     this.nodes = {};
   }
   set(node, value) {
      node.__nodeStoreKey__ = Symbol();
     this.nodes[node.__nodeStoreKey__] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    return this.nodes[node.__nodeStoreKey__];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return !!this.nodes[node.__nodeStoreKey__];
   }
 }