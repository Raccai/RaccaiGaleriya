import React, { createContext, useContext, useRef } from "react";

export const RefsContext = createContext();

export const RefsContextProvider = ({ children }) => {
  const vinylRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const headerRef = useRef(null);
  const titleButtonsRef = useRef(null);
  const imagesRef = useRef(null);
  const bodyRef = useRef(null);
  const getStartedRef = useRef(null);

  return (
    <RefsContext.Provider value={{ 
      headerRef, 
      titleButtonsRef,
      imagesRef,
      bodyRef,
      getStartedRef,
      vinylRef,
      h1Ref,
      pRef,
      button1Ref,
      button2Ref
      }}
    >
      { children }
    </RefsContext.Provider>
  )
}

export const useRefs = () => useContext(RefsContext);