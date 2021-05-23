import React from 'react';
export default function LibrarySong({song, setCurrentSong, songs, index, audioRef, isPlaying, setSongs }){
    const onSongClick = async () => {
        const selectedSong = songs[index];
        await setCurrentSong(selectedSong);
        const newSongs = songs.map(song => {
            if(song.id === selectedSong.id) {
                return { ...song, active: true}
            } else {
                return {...song, active: false}
            }
        });
        setSongs(newSongs);
        if(isPlaying) audioRef.current.play();
    };
    return (
        <div className={`library-song ${song.active ? 'selected': ''}`} onClick={onSongClick} >
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
}