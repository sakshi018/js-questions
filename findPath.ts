const obj = {a: {b: {c: {d: 1}}}};

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
