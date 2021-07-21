function flattenArray(currentArray: any[], newArray = []) {
    currentArray.forEach(value => Array.isArray(value) ? flattenArray(value, newArray) : newArray.push(value));
    return newArray;
}