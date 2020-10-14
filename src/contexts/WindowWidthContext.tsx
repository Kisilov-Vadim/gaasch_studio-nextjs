import React, { createContext, useState, useMemo, useContext } from 'react';
import $ from 'jquery'; 

type Props = {
  children: React.ReactNode
}

const windowWidthContext = createContext<any>(1600);

export const useWindowWidthContext = () => {
  return useContext(windowWidthContext); 
}

export default function WindowWidthContext(props: Props) {
  const [windowWidth, setWindowWidth] = useState<any>(0); 

  const value = useMemo(() => [windowWidth, setWindowWidth], [windowWidth]); 

  return (
    <windowWidthContext.Provider value={value}>
      {props.children}
    </windowWidthContext.Provider>
  )
};
