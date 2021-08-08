
const button = document.querySelector('button');

button.addEventListener('click', fillBar.bind(null, 2));

//css way
// button.addEventListener('click', fillBarViaCss.bind(null, 2));


// JS way (alternative way via css)
function fillBar(seconds, event) {
    const bar = document.querySelector('.bar');

    let width = 0;

    const interval = setInterval(() => {
        bar.style.width = `${width}%`;
        width++;
        if (width > 100) {
            clearInterval(interval);
        }
    }, (seconds * 1000) / 100);
}

// CSS way
function fillBarViaCss(seconds, event) {
    console.log('seconds', seconds);
    const bar = document.querySelector('.bar');
    bar.style.transition = `${seconds}s linear width`;
    bar.style.width = '100%';
}