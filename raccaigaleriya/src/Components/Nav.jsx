import React from 'react';
import { Link } from 'react-router-dom';
import NotaLinguaLogo from "/svg/notalingua/NotaLinguaLogo.svg";
import TagawikaLogo from "/svg/tagawika/TagawikaLogo.svg";
import RaccaiLogo from "/svg/RaccaiLogo.svg";
import MainLogo from "/svg/MainLogo.svg";
import "./Nav.css";
import { useAnimatedNavigate } from '../hooks/useAnimatedNavigate';
import { useRefs } from '../Contexts/RefsContexts';

export const Nav = () => {
  const { headerRef, titleButtonsRef, bodyRef, getStartedRef, imagesRef, vinylRef, buttonRef, pRef, h1Ref } = useRefs();
  const animatedNavigate = useAnimatedNavigate();

  const handleNavClick = (target) => {
    const exitRefs = [headerRef, titleButtonsRef, bodyRef, getStartedRef, imagesRef, vinylRef, buttonRef, pRef, h1Ref];
    animatedNavigate(target, exitRefs, []);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="title">
          <Link to="/" >
            <img src={MainLogo} alt="Tagawika logo" />
            <span>MyApps</span>
          </Link>
        </li>
        <li className="item">
          <Link to="/tagawika" >
            <img src={TagawikaLogo} alt="Tagawika logo" />
            <span>Tagawika</span>
          </Link>
        </li>
        <li className="item">
          <Link to="/notalingua" >
            <img src={NotaLinguaLogo} alt="NotaLingua logo" />
            <span>NotaLingua</span>
          </Link>
        </li>
        <li className="item">
          <a href="https://www.linkedin.com/in/jose-emmanuel-laurel-98b132207/" target="_blank" className="raccai-link">
            <img src={RaccaiLogo} alt="NotaLingua logo" />
            <span>@Raccai</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
