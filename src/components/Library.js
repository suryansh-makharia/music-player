import React from 'react';
import LibrarySong from './LibrarySong';
export default function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, setLibraryStatus }){
    const renderedSongs = songs.map((song, index) => {
        return <LibrarySong setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying} index={index} key={song.id} songs={songs} setCurrentSong={setCurrentSong} song={song}/>
    });
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {renderedSongs}
            </div>
        </div>
    )
}