var world = ['Saudia', 'Australia', 'Gilgit', 'Norway', 'South Pole'];
console.log(world); // Original Array
var alphabetical_world = world.slice().sort();
console.log(alphabetical_world); //Asscending order
console.log(world); // Original Array
var reverse_alphabetical_world = world.slice().sort(function (a, b) { return b.localeCompare(a); });
console.log(reverse_alphabetical_world); // Descending order
console.log(world); // Original Array
console.log(world.reverse()); //reversed array 
console.log(world); //Original array 
console.log(alphabetical_world); //Asscending order
console.log(reverse_alphabetical_world); // Descending order
