function loadGrain(levels) {
    let maxLeft = 0,
        maxRight = 0,
        leftSide = 0,
        rightSide = levels.length - 1,
        grainAmount = 0;

    while (leftSide < rightSide) {
        maxLeft = levels[leftSide] > maxLeft ? levels[leftSide] : maxLeft;
        maxRight = levels[rightSide] > maxRight ? levels[rightSide] : maxRight;
        maxLeft >= maxRight ?
            (grainAmount += maxRight - levels[rightSide], rightSide--)
            : (grainAmount += maxLeft - levels[leftSide], leftSide++);
    }
    return grainAmount;
}

console.log(loadGrain([15, 0, 6, 10, 11, 2, 5]))
console.log(loadGrain([4, 1, 3]))
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]))
console.log(loadGrain([2, 0, 1, 5, 2, 7]))
console.log(loadGrain([7, 4]))
console.log(loadGrain([]))