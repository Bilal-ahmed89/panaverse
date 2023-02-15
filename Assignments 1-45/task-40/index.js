function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return console.log(album);
}
make_album('Adele', '21');
make_album('Kendrick Lamar', 'To Pimp a Butterfly');
make_album('Taylor Swift', 'Folklore');
make_album('Daft Punk ', 'Discovery', 13);
