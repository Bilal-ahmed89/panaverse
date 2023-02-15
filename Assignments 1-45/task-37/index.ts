

function make_shirt(message: string = "I love TypeScript", size: string = "large"){

  console.log(`A ${size} shirt will be printed with the message: '${message}'`)

}


make_shirt();
make_shirt(undefined, "medium"); 
make_shirt("Sorry, we dont have t-shirts in this size", "small");