function flattenObject(obj: Object) {
    const result = {};
    for(const key in obj) {
        if(typeof obj[key] === 'object') {
            const temp: any = flattenObject(obj[key]);
            for(const newKey in temp) {
                result[key + '.' + newKey] = temp[newKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

let magic = (obj, parent, finalObj) => {
    for(let key in obj){
      if(typeof obj[key] === "object"){
        magic(obj[key], parent + "_" + key, finalObj);
      }
      else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  }