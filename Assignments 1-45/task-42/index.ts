const magician_names : string[] = ['David Copperfield' , 'Penn Jillette' ,'David Blaine']


function make_great(magician_names){
  return magician_names.map(magician_name => `${magician_name} the Great`);
}


function show_magicians(magician_names){
  magician_names.forEach(magician_name => console.log(magician_name))
}


const great_magicians = make_great([...magician_names])



show_magicians(magician_names)

show_magicians(great_magicians)

