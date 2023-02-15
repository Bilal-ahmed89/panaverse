var current_users = ['admin', 'asjad', 'abdullah', 'sami', 'hassan'];
var new_users = ['admin', 'asjad', 'umer', 'laiba', 'hafsa'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.includes(new_user)) {
        console.log("This username is not available, please enter a different username");
    }
    else {
        console.log("This username is available!");
    }
}
