interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }


function make_album(artist : string, title : string, tracks?: number ){

    const album: Album = {
        artist, 
        title
    }
    if(tracks){
        album.tracks = tracks
    }

    return console.log(album);
     
    }
 


make_album('Adele', '21')
make_album('Kendrick Lamar', 'To Pimp a Butterfly')
make_album('Taylor Swift', 'Folklore')
make_album('Daft Punk ', 'Discovery', 13)