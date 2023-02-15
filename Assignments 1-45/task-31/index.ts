const usernames : string[] = ['']

for (const username of usernames) {
  if (username === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
  }else if( username === ''){
    console.log(`We need to find some users!`);
  } 
  else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}