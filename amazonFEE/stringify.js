function stringify(obj) {
    // handle strings, enclose in double quotes
    if (typeof obj === "string") {
      return `"${obj}"`;
    }
  
    // handle numbers and booleans, return the string representation
    if (typeof obj === "number" || typeof obj === "boolean") {
      return `${obj}`;
    }
    // handle arrays, loop over every single element
    if (Array.isArray(obj)) {
      let res = "[";
      for (let i = 0; i < obj.length; i++) {
        res += `${stringify(obj[i])},`;
      }
      //remove last comma
      res = `${res.substring(0, res.length - 1)}]`;
      return res;
    }
  
    // handle object, loop over keys and values.
    let res = `{`;
    for (let key in obj) {
      res += `"${key}":${stringify(obj[key])},`;
    }
    //remove last comma
    res = `${res.substring(0, res.length - 1)}}`;
    return res;
  }
