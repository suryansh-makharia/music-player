import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';

export default function App() {
    const audioRef = useRef();
    const [ songs, setSongs ] = useState(data());
    const [ currentSong, setCurrentSong ] = useState(songs[0]);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ libraryStatus, setLibraryStatus ] = useState(false);
    const [ volumeActive, setVolumeActive ] = useState(false);
    const [ mute, setMute ] = useState(false);
    const [ dark, setDark ] = useState(false);
    const [songInfo, setSongInfo] = useState({
      current: 0,
      duration: 0,
      animationPerc: 0
    });
    const onTimeUpdate = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      const currentPerc = Math.round(currentTime);
      const durationPerc = Math.round(duration);
      const animationPerc = Math.round((currentPerc / durationPerc) * 100);
      setSongInfo({ ...songInfo, current: currentTime, duration, animationPerc });
    };
    const onAudioEnd = async () => {
      const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[currentIndex + 1]);
      if(isPlaying) await audioRef.current.play();
    }
  return (
    <body className={`body ${dark ? 'dark-mode' : ''}`}>
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav dark={dark} setDark={setDark} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player mute={mute} setMute={setMute} volumeActive={volumeActive} setVolumeActive={setVolumeActive} setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} audioRef={audioRef}/>
      <Library libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} />
      <audio
        onLoadedMetadata={onTimeUpdate}
        onTimeUpdate={onTimeUpdate}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={onAudioEnd}
         ></audio>
    </div>
    </body>
  );
}
        