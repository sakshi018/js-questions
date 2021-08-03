

function moveElements(duration, distance, element) {
    const startTime = performance.now();
    function move(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = elapsed/duration;
        const amountToMove = progress * distance;

        element.style.transform = `translateX(${amountToMove}px)`;

        if(amountToMove < 1) {
            requestAnimationFrame(move);
        }
    }

    move(performance.now());
}