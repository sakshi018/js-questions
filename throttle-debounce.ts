function throttle(callback, limit) {
    let flag = true;
    return function() {
        if(flag) {
            callback.apply(this, arguments);
            flag = false;
            setTimeout(() => flag = true, limit);
        }
    }
}

function deboucne(callback, delay = 300) {
    let timer;

    return(...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(this, args), delay);
    };
}

// throttle array 

const arr = [1,2,3,4];

const myThrottleFunc = (arr, i) => {
    const throttleTime = 1000;

    if(i<arr.length) {
        console.log(arr[i]);
        i++;
        setTimeout(myThrottleFunc, throttleTime, arr, i);
    }
};
myThrottleFunc(arr, 0);