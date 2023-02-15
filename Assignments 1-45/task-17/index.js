var Guest_List = ['Ibrahim', 'Mama', 'Abdullah', 'Hashim', 'Bareera', 'Asjad'];
var index = Guest_List.indexOf('Ibrahim');
if (index > -1) {
    var removedGuest = Guest_List.splice(index, 1);
    console.log("Sorry ".concat(removedGuest, ", I'm afraid I can't invite you to dinner."));
}
var index1 = Guest_List.indexOf('Abdullah');
if (index1 > -1) {
    var removedGuest = Guest_List.splice(index1, 1);
    console.log("Sorry ".concat(removedGuest, ", I'm afraid I can't invite you to dinner."));
}
var index2 = Guest_List.indexOf('Hashim');
if (index2 > -1) {
    var removedGuest = Guest_List.splice(index2, 1);
    console.log("Sorry ".concat(removedGuest, ", I'm afraid I can't invite you to dinner."));
}
var index3 = Guest_List.indexOf('Asjad');
if (index3 > -1) {
    var removedGuest = Guest_List.splice(index3, 1);
    console.log("Sorry ".concat(removedGuest, ", I'm afraid I can't invite you to dinner."));
}
console.log("Good News ".concat(Guest_List[0], "! You guys are still invited to the Dinner"));
console.log("Good News ".concat(Guest_List[1], "! You guys are still invited to the Dinner"));
var index4 = Guest_List.indexOf('Mama');
if (index4 > -1) {
    var removedGuest = Guest_List.splice(index4, 1);
}
var index5 = Guest_List.indexOf('Bareera');
if (index5 > -1) {
    var removedGuest = Guest_List.splice(index5, 1);
}
console.log(Guest_List);
