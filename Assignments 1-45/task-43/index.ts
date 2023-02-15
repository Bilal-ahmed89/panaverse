const magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette'];

function make_great(magicians) {
  return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians) {
  magicians.forEach(magician => console.log(magician));
}


const greatMagicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(greatMagicians);

