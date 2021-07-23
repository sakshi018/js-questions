function task(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}

const taskList = [task(1000), task(5000), task(3000)];
// returns promise with results in an array

function myPromiseAll(taskList) {
    const results = [];
    let promisesCompleted = 0;
    return new Promise((resolve, reject) => {
        taskList.forEach((element, index) => {
            element.then(value => {
                results[index] = value;
                promisesCompleted++;
                if (promisesCompleted === taskList.length) {
                    resolve(results);
                }
            })
                .catch(error => reject(error));
        });
    });
}

myPromiseAll(taskList)
    .then(results => {
        console.log("got results", results)
    })
    .catch(console.error)
