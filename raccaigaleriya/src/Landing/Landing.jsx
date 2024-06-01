import React, { useEffect, useRef } from 'react';
import "./Landing.css";
import gsap from 'gsap';
import TagawikaMain from "/svg/tagawika/TagawikaMain.svg";
import TagawikaLogo from "/svg/tagawika/TagawikaLogo.svg";
import NotaLinguaMain from "/svg/notalingua/NotaLinguaMain.svg";
import NotaLinguaLogo from "/svg/notalingua/NotaLinguaLogo.svg";
import AdhikaMain from "/svg/AdhikaMain.svg";
import { useAnimatedNavigate } from '../hooks/useAnimatedNavigate';
import { useRefs } from '../Contexts/RefsContexts';

export const Landing = () => {
  const animatedNavigate = useAnimatedNavigate();
  const { headerRef, titleButtonsRef, bodyRef, getStartedRef, imagesRef } = useRefs();

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    gsap.fromTo(titleButtonsRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(bodyRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.4 }
    );
    gsap.fromTo(getStartedRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.8 }
    );
    gsap.fromTo(imagesRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  const handleClick = (target) => {
    const exitRefs = [headerRef, titleButtonsRef, bodyRef, getStartedRef, imagesRef];
    animatedNavigate(target, exitRefs, []);
  };

  const handleContactClick = () => {
    window.open("https://www.linkedin.com/in/jose-emmanuel-laurel-98b132207/", "_blank");
  };

  return (
    <main className="landing-main">
      <section className="left-section">
        <header ref={headerRef}>
          <h5>Raccai</h5>
          <button className="contact-button" onClick={handleContactClick}>Get in Touch</button>
        </header>

        <section className="texts">
          <div className="main-title-buttons" ref={titleButtonsRef}>
            <h1 className="main-title">
              <span>Aba!</span> Welcome to My Mobile Application Galeríya!
            </h1>
            <div className="app-buttons">
              <button 
                className="app-button notalingua" 
                onClick={() => handleClick("/notalingua")}
              >
                <span><img src={NotaLinguaLogo} alt="Notalingua logo" /></span> 
                Check out NotaLingua
              </button>
              <button 
                className="app-button tagawika" 
                onClick={() => handleClick("/tagawika")}
              >
                <span><img src={TagawikaLogo} alt="Tagawika logo" /></span> 
                Check out Tagawika
              </button>
            </div>
          </div>
          <p className="body" ref={bodyRef}>
            Hey there! As one of Raccai's patrons, let me show you some of the language-focused mobile apps he's created for fun.
            Ready to dive in? Explore his projects and get a feel for what he enjoys, and hopefully you'll enjoy them, too. Enjoy!
          </p>
          <span className="get-started" ref={getStartedRef}>Check the navigation bar to get started!</span>
        </section>
      </section>

      <section className="right-section">
        <section className="images" ref={imagesRef}>
          <div className="main-image">
            <img src={AdhikaMain} alt="Adhika Character Vector Art" />
          </div>
          <div className="sub-images">
            <div className="sub-image">
              <img src={NotaLinguaMain} alt="NotaLingua" />
            </div>
            <div className="sub-image">
              <img src={TagawikaMain} alt="Tagawika" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
