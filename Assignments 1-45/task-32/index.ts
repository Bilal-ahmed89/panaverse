const current_users: string[] = ['admin', 'asjad', 'abdullah', 'sami', 'hassan']


const new_users: string[] = ['admin', 'asjad', 'umer', 'laiba', 'hafsa']

for (const new_user of new_users) {
    if (current_users.includes(new_user)) {

        console.log(`This username is not available, please enter a different username`);
    } else {
        console.log(`This username is available!`);

    }
}

