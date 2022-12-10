function avg(numbers) {
    let total = 0;
    let average = 0;
    for (i = 0; i < numbers.length; i++) {
        total+=numbers[i];
        average = total / 2;
    }
    return average;
}
console.log(avg([1,3,5,7]));
