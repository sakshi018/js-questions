function sum(a: number) {
    return function(b: number) {
        if(b)
            return sum(a+b);
        return a;
    }
}

// console.log(sum(1)(2)(3)());