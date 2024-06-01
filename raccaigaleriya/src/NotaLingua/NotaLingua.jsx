import React, { useEffect, useRef } from 'react'
import "./NotaLingua.css"
import NotaLinguaLogo from "/svg/notalingua/NotaLinguaLogo.svg";
import IconData from "/svg/notalingua/IconData.svg";
import IconDetails from "/svg/notalingua/IconInfo.svg";
import IconAddEdit from "/svg/notalingua/IconAddEdit.svg";
import IconSort from "/svg/notalingua/IconSort.svg";
import IconDownload from "/svg/IconDownload.svg";
import { VanillaTilt } from '../Vanilla-Tilt/vanilla-tilt';
import ImageAdding from "/svg/notalingua/ImageAdding.svg";
import ImageData from "/svg/notalingua/ImageData.svg";
import ImageDetails from "/svg/notalingua/ImageDetails.svg";
import ImageIntro from "/svg/notalingua/ImageIntro.svg";
import ImageSort from "/svg/notalingua/ImageSort.svg";
import gsap from 'gsap';

export const NotaLingua = () => {
  let coverRef = useRef(null);
  let imageRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(coverRef.current,
      { opacity: 1, display: "visible" },
      { opacity: 0, display: "none", duration: 2 }
    );

    imageRefs.current.forEach(img => {
      VanillaTilt.init(img,
        { 
          max: 4, 
          speed: 500,
          transition: true,
        }
      );
    });
  }, [])

  const handleGoBackUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleUpToDown = () => {
    window.open("https://notalingua.en.uptodown.com/android", "_blank");
  }

  return (
    <main className="notalingua-main">
      <div className="cover" ref={coverRef}></div>

      <header>
        <img src={NotaLinguaLogo} alt="NotaLingua Main Logo" />
        <h3>NotaLingua</h3>
        <h3 className='raccai'>Raccai</h3>
      </header>

      <section className="intro">
        <div className="text-button">
          <h1>
            New Language Discoveries, One Note at a Time
          </h1>
          <p>
            A word collation mobile app to conveniently list down words offline when you encounter them in you daily life
          </p>
          <div className="buttons">
            <button className="primary" onClick={handleUpToDown}>
              <img src={IconDownload} alt="Download Icon" className="icon" />
              Download at UpToDown
            </button>
          </div>
        </div>
        <img src={ImageIntro} alt="Notalingua Introduction Vector Art" className='main-img' ref={(el) => imageRefs.current[0] = el} />
        <div className="spans">
          <span>Made with React Native</span>
          <span>Developed and Designed by Raccai (EJ Bajarin-Laurel)</span>
        </div>
      </section>

      <section className="adding">
        <div className="text-button">
          <h1> <span><img src={IconAddEdit} alt="Add/Exit Icon Vector" className='icon title-icon' /></span> Add Words to Your List</h1>
          <p>
            Conveniently list down words you encounter in you daily life along with various linguistic details such as meaning, part of speech, etymology, pronunciation, and language origin
          </p>
          <div className="spans">
            <span>Add Words</span>
            <span>Edit Words</span>
          </div>
        </div>
        <img src={ImageAdding} alt="Adding and Editing Words Vector Art" className='main-img' ref={(el) => imageRefs.current[1] = el} />
      </section>

      <section className="sort">
        <div className="text-button">
          <h1> <span><img src={IconSort} alt="Add/Exit Icon Vector" className='icon title-icon' /></span> Sort words for ease of use</h1>
          <p>
            Sort words to find that one word you remember adding to your list that one time
          </p>
        </div>
        <img src={ImageSort} alt="Sorting Words Vector Art" className='main-img' ref={(el) => imageRefs.current[2] = el} />
      </section>

      <section className="details">
        <div className="text-button">
          <h1> <span><img src={IconDetails} alt="Add/Exit Icon Vector" className='icon title-icon' /></span> Details of your words within reach</h1>
          <p>
            Tap on a word in your collection to view its details on the fly
          </p>
          <div className="spans">
            <span>Pronunciation</span>
            <span>Language</span>
            <span>Plural Form</span>
            <span>Part of Speech</span>
            <span>Thematic Group</span>
            <span>Meaning</span>
            <span>Etymology</span>
          </div>
        </div>
        <img src={ImageDetails} alt="Details of Each Word Vector Art" className='main-img' ref={(el) => imageRefs.current[3] = el} />
      </section>

      <section className="data">
        <div className="text-button">
          <h1> <span><img src={IconData} alt="Add/Exit Icon Vector" className='icon title-icon' /></span> Data to keep track of progress</h1>
          <p>
            Keep track of progress with a "Data" screen with the words you've added in the past week, past month, and current year
          </p>
        </div>
        <img src={ImageData} alt="Your Data Vector Art" className='main-img' ref={(el) => imageRefs.current[4] = el} />
      </section>

      <footer>
        <div className="footer-title">
          <img src={NotaLinguaLogo} alt="NotaLingua Main Logo Vector" />
          <h3>NotaLingua</h3>
        </div>
        <h3 className='go-back' onClick={handleGoBackUp}>Go back up</h3>
      </footer>
    </main>
  )
}
