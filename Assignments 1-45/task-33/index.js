var ordinal_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (var _i = 0, ordinal_numbers_1 = ordinal_numbers; _i < ordinal_numbers_1.length; _i++) {
    var ordinal_number = ordinal_numbers_1[_i];
    if (ordinal_number === '1') {
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'st';
    }
    else if (ordinal_number === '2') {
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'nd';
    }
    else if (ordinal_number === '3') {
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'rd';
    }
    else {
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'th';
    }
}
console.log(ordinal_numbers);
