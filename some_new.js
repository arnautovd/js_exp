const sum = (...numbers) => {

    return numbers.reduce((acc, next) => acc + next);

}

console.log(sum(1, 2, 3));

const average = (...numbers) => {
    if (numbers.length === 0) {
        return null;
    }
    return numbers.reduce((acc, next) => acc + next) / numbers.length;
}

console.log(average());

const convert = (...data) => {
    if (data.length === 0) {
        return data;
    }
    // dates = [];
    const dates = data.map(day => new Date(...day).toDateString());
    // for (d of data) {
    //     let day = new Date(...d);
    //     dates.push(day.toDateString());
        
    // }
    return dates;

}
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));