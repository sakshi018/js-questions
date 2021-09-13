/**
 * There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
follow up

Are you able to solve it both recursively and iteratively?
 */

// recursive

function flat(arr, depth = 1) {
    const result = [];
    for(let item of arr) {
        if(Array.isArray(item) && depth>0) {
            result.push(...flat(item, depth -1));
        } else {
            result.push(item);
        }
    }
    return result;
}

// iterative 
/**
 * @param {Array} arr
 * @param {number} depth
 */

 function flat(arr, depth = 1) {
    // [[1,1] [[2],1], [[3, [4]],1]]
    // [[[2],1], [[3, [4]],1]]
    // [[2,0], [[3, [4]],1]]
    // [[[3, [4]],1]]
    // [[3, 0], [[4], 0]]
    
    const result = []
    const stack = [...arr.map(item => ([item, depth]))]
    
    while (stack.length > 0) {
      const [top, depth] = stack.pop()
      if (Array.isArray(top) && depth > 0) {
        stack.push(...top.map(item => ([item, depth - 1])))
      } else {
        result.push(top)
      }
    }
    
    return result.reverse()
  }