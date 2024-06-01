import React, { useEffect, useRef, useState } from 'react'
import AdhikaVinyl from "/svg/AdhikaVinyl.svg"
import AdhikaBG from "/svg/AdhikaBG.svg"
import "./Tagawika.css"
import gsap from 'gsap'
import { useAnimatedNavigate } from '../hooks/useAnimatedNavigate'
import { useRefs } from '../Contexts/RefsContexts'

export const Tagawika = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const { vinylRef, h1Ref, pRef, button1Ref, button2Ref } = useRefs();
  const animatedNavigate = useAnimatedNavigate();

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  }
  
  useEffect(() => {
    gsap.fromTo(vinylRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5 }
    )
    gsap.fromTo(h1Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    )
    gsap.fromTo(pRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2 }
    )
    gsap.fromTo(button1Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.4 }
    )
    gsap.fromTo(button2Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.6 }
    )
  }, [vinylRef, h1Ref, pRef, button1Ref, button2Ref])

  const handleClick = (target) => {
    const exitRefs = [vinylRef, h1Ref, pRef, button1Ref, button2Ref];
    animatedNavigate(target, exitRefs, []);
  };

  return (
    <main className="tagawika-main">
      <section>
        <div className="vinyl" ref={vinylRef}>
          <img src={AdhikaVinyl} alt="Adhika music vinyl vector art" className="vinyl-img" />
          {isMusicPlaying && (
            <audio autoPlay loop>
              <source src="/music/ArawAmatista.mp3" type="audio/mp3"/>
              Your browser does not support the audio element.
            </audio>
          )}
          {isMusicPlaying && (
            <div className="vinyl-bg">
              <img src={AdhikaBG} alt="Adhika music vinyl vector art"/>
            </div>
          )}
        </div>
        <div className="text">
          <h1 ref={h1Ref}>
            <span>Ay, sorry! </span> 
            Coming soon pa...
          </h1>
          <p ref={pRef}>Tagawika is coming real soon, so keep an eye out for it. In the meantime, check out another app or get ready for Tagawika with some drills on Tagalog grammar! Or you could play some tunes... like my theme... maybe?</p>
          <div className="buttons">
            <button onClick={toggleMusic} ref={button1Ref}>
              {isMusicPlaying ? 'Stop Music' : 'Play Music'}
            </button>
            <button onClick={() => handleClick("/")} ref={button2Ref}>
              Go Home
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
