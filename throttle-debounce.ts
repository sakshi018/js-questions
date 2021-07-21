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