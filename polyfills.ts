//polyfill forEach

function myForEach(callback){
 const arr = this;
 for(let i = 0; i<arr.length; i++){
     callback(arr[i], i, arr);
 }
}

// polyfill for map
function myMap(callback) {
    const newArray = [];
    const arr = this;
    for(let i = 0; i<arr.length; i++) {
        newArray.push(callback(arr[i], i, arr));
    }
    return newArray;
}

// polyfill for filter
function myFilter(callback) {
    const newArray = [];
    const arr = this;
    for(let i = 0; i<arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

//polyfill reduce
function myReduce(callback, initialValue) {
    let accumulator = initialValue;
    const arr = this;
    for(let i = 0; i<arr.length; i++) {
        if(accumulator !== undefined) {
            accumulator = callback(accumulator, arr[i]);
        } else {
            accumulator = arr[i];
        }
    }
    return accumulator;
}

//polyfill some
function mySome(callback) {
    const arr = this;
    for(let i = 0; i<arr.length; i++) {
        if(callback(arr[i]))
            return true;
    }
    return false;
}