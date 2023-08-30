/*
Mid task of JavaScript. Will include all previous day's learning:
- Create a variable with type array of object to save song lists with song details
- Create a function to group song based on artists
- Create a function to group song based on genre
- Create a function to group song to play song less than 1 hour with random artists & genres
*/

const songList = [
	{
		title: 'Miss Independent',
		artist: 'Ne-Yo',
		duration: 235,
		genre: 'Pop Country',
	},
	{
		title: 'What Was I Made For?',
		artist: 'Billie Eilish',
		duration: 1000,
		genre: 'Pop',
	},
	{
		title: 'Flowers',
		artist: 'Miley Cyrus',
		duration: 500,
		genre: 'Pop',
	},
	{
		title: 'Nobody Gets Me',
		artist: 'SZA',
		duration: 180,
		genre: 'Pop',
	},
	{
		title: 'Kill Bill',
		artist: 'SZA',
		duration: 213,
		genre: 'R&B',
	},
	{
		title: 'Changes',
		artist: 'XXXTENTACION',
		duration: 128,
		genre: 'Hip Hop',
	},
];

const songBasedGendre = (genre) => songList.filter((item) => item.genre == genre);

const songBasedArtist = (artistName) => songList.filter((item) => item.artist == artistName);

const songAnHour = (data) => {
	let playlist = [];
	let hoursFilter = 0;
	let i = 0;
	while (hoursFilter < 3600) {
		let random = Math.floor(Math.random() * data.length);

		hoursFilter += data[i].duration;
		if (hoursFilter <= 3600) {
			playlist.push({ title: data[random].title, artist: data[random].artist, duration: data[random].duration, genre: data[random].genre });
			// console.log(hoursFilter);
		}

		if (i == data.length - 1) {
			i = 0;
		} else {
			i++;
		}
	}

	return playlist;

	// for (let i = 0; i < data.length; i++) {
	// 	let random = Math.floor(Math.random() * data.length);
	// 	hoursFilter += data[i].duration;
	// 	if (hoursFilter < 3600) {
	// 		playlist.push({ title: data[random].title, artist: data[random].artist, duration: data[random].duration, genre: data[random].genre });
	// 	}
	// }
};

const durationFormat = (sec) => {
	// const hours = Math.floor(sec / 3600);
	const minutes = Math.floor((sec % 3600) / 60);
	const seconds = sec - minutes * 60;

	if (minutes > 0) {
		if (seconds >= 0 && seconds < 10) {
			return `${minutes}:0${seconds}`;
		}
		return `${minutes}:${seconds}`;
	} else return `${sec} Seconds`;
};

function ShowSongList(data) {
	let playlist = songAnHour(data);
	let totalDurationPlaylist = 0;
	console.log('=== Music 1 Hour Playlist ===');
	for (i = 0; i < playlist.length; i++) {
		console.log('Track', i + 1);
		console.log('Artist Name :', playlist[i].artist, '|| Title Song :', playlist[i].title);
		console.log('Song Gendre :', playlist[i].genre, '|| Time :', durationFormat(playlist[i].duration));
		console.log('===================');

		totalDurationPlaylist += playlist[i].duration;
	}
	console.log('Durasi Waktu Putar', durationFormat(totalDurationPlaylist));

	// console.log(songAnHour(data));
}

// ShowSongList();
// console.log('== Song Based on Genre ==');
// console.log(songBasedGendre('Pop'));
// console.log(songBasedGendre('R&B'));
// console.log(songBasedGendre('Hip Hop'));
// console.log('== Song Based on Artist ==');
// console.log(songBasedArtist('SZA'));
// console.log(songBasedArtist('Billie Eilish'));
// console.log(songBasedArtist('Ne-Yo'));
// console.log(songBasedArtist('Miley Cyrus'));

// console.log(songList);

ShowSongList(songList);
