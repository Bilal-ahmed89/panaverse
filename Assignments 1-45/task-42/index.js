var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_names = ['David Copperfield', 'Penn Jillette', 'David Blaine'];
function make_great(magician_names) {
    return magician_names.map(function (magician_name) { return "".concat(magician_name, " the Great"); });
}
function show_magicians(magician_names) {
    magician_names.forEach(function (magician_name) { return console.log(magician_name); });
}
var great_magicians = make_great(__spreadArray([], magician_names, true));
show_magicians(magician_names);
show_magicians(great_magicians);
