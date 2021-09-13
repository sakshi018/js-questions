/**
 * Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
 */

// using no bind/call/apply recursive
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    return function curryInner(...args) {
      if (args.length >= fn.length) return fn(...args);
      return (...args2) => curryInner(...args, ...args2);
    };
  }

// using bind 
/**
 * @param {Function} func
 */
 function curry(func) {
    return function curried(...args) {
      // 1. if enough args, call func 
      // 2. if not enough, bind the args and wait for new one
      
      if (args.length >= func.length) {
        return func.apply(this, args)
      } else {
        // 1,2
        return curried.bind(this, ...args)
      }
    }
  }

