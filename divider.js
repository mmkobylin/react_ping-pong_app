
const divider = values => {

    let results = [];

    for ( i = 0; i < values.length; i += 1) {

            results.push(Math.floor((values[i] / 5 % 2 )));
        };
    return results;
};

console.log(
    divider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
)