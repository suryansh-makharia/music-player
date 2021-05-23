import React, { useEffect, useRef } from "react";
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Nav({ libraryStatus, setLibraryStatus, dark, setDark }) {
  const navRef = useRef();
  useEffect(() => {
    const onBodyClick =(e) => {
    if( navRef && e.target.contains(navRef.current)){
        return;
      }
      setLibraryStatus(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => document.body.removeEventListener('click', onBodyClick, { capture: true });
  }, []);
  const onAdjustClick = () => {
    setDark(!dark)
  }
  return (
    <nav>
      <div className="adjust">
      <button className="adjust-btn" onClick={onAdjustClick}><FontAwesomeIcon icon={faAdjust} size="2x"/></button>
      </div>
      <div className="github"><button className="github-btn"><a href="https://github.com/suryansh-makharia" className="github-link"><FontAwesomeIcon icon={faGithubAlt} size="2x"/></a></button></div>
      <div>
        <button  className="library-btn" ref={navRef} onClick={() => setLibraryStatus(!libraryStatus)}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/music-library-1779841-1514005.png"
            alt="Music Library"
          />
        </button>
      </div>
    </nav>
  );
}
