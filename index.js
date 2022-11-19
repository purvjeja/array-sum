function getAverage(array, from, to) {
    let sum = 0;
    for(let i = from; i <= to; i++) sum += array[i];
    return sum/(to-from+1);
}

module.exports = getAverage;