import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
  faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
export default function Player({
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setSongs,
  volumeActive,
  setVolumeActive,
  mute, 
  setMute
}) {
  const volumeRef = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if( volumeRef && e.target.contains(volumeRef.current)){
          return;
        }
        setVolumeActive(false);
      };
      document.body.addEventListener('click', onBodyClick, { capture: true });
      return () => document.body.removeEventListener('click', onBodyClick, { capture: true })
  }, [])
  useEffect(() => {
    const newSongs = songs.map(song => {
      if(song.id === currentSong.id) {
          return { ...song, active: true}
      } else {
          return {...song, active: false}
      }
  });
   setSongs(newSongs);
  }, [currentSong])
  const onPlayClick = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const onInputChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };
  const onSkipClick = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "back") {
      if (currentIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        if(isPlaying) audioRef.current.play();
        return;
      }
       await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      }
    if(isPlaying) audioRef.current.play();
  };
  const animateTrack = {
     transform: `translateX(${songInfo.animationPerc}%)`
  };
  const onVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
    if(audioRef.current.volume === 0){
      setMute(true)
    } else {
      setMute(false);
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.current)}</p>
        <div className="track">
        <input
          type="range"
          className="slider"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          min={0}
          max={songInfo.duration || 0}
          onChange={onInputChange}
        />
        <div className="animate-track" style={animateTrack}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
        <div className="volume" >
          <button ref={volumeRef} onClick={() => setVolumeActive(!volumeActive)} >
        <FontAwesomeIcon icon={mute ? faVolumeMute : faVolumeDown}/>
        </button>
        <input onLoadedMetadata={(e) => audioRef.current.volume = e.target.value} onChange={onVolumeChange} min={0} max={1} step={0.01} className={`volume-input ${volumeActive ? 'active' : ''}`} type="range"/>
          </div>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => onSkipClick("back")}
        />
        <FontAwesomeIcon
          className="play"
          onClick={onPlayClick}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => onSkipClick("forward")}
        />
      </div>
    </div>
  );
}
