const obj = {a: {b: {c: {d: 1}}}};
// Write a function that returns the value at a give path
/*
    let testObj = {
        foo: 2,
        bar: 'car',
        baz: {x: 'xx', y: 'yy', biz: {a: 56}}
    };
    getByPath(['baz', 'biz', 'a'], testObj); //56
 */


function getByPath ([first, ...rest], obj)  {
      if(!first || !obj[first]) {
        // Either no path was supplied or the top-level property doesnt' exist in obj
        return undefined;
      }
  
      if (rest.length < 1) {
        return obj[first];
      } else {
        return getByPath(rest, obj[first]);
      }
}

function findPath(path: string, obj: Object) {
  const pathKeys = path.split('.');

  for(const key in obj) {
    let value = undefined;
    if (typeof obj[key] === 'object') {
    const shiftedKey = pathKeys.shift();
    value = obj[shiftedKey];
    if(pathKeys.length && typeof value === 'object')
      return findPath(pathKeys.join('.'), obj[key]);
    else 
      return value;
    } else if(pathKeys.length && pathKeys[0] === key)
       return obj[key];
    else 
      return undefined;
  }
}

findPath('a.b.c', obj);
