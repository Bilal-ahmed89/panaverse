const ordinal_numbers : string[] = [ '1', '2', '3', '4', '5', '6', '7', '8', '9'] 


for(const ordinal_number of ordinal_numbers){
    if(ordinal_number === '1'){
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'st';
        
    }else if (ordinal_number === '2'){
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'nd';
    }
    else if (ordinal_number === '3'){
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'rd';
    }else{
        ordinal_numbers[parseInt(ordinal_number) - 1] += 'th';
    }
}
 console.log(ordinal_numbers);
 
