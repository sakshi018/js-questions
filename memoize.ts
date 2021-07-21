const memoize = (func) => {
    const cache = [];

    return (...args) => {
        const key = JSON.stringify(args);
        let result = cache.find(val => val.args === key);
        if(result) {
            return result.result;
        }
        result = func.apply(this,args);
        cache.push({args: JSON.stringify(args), result: result});
        return result;
    };
};

const multiply = memoize((a,b) => {return a*b;});
const add = memoize((a,b) =>  a+b);