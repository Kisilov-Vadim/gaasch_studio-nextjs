import React, { createContext, useState, useMemo, useContext } from 'react';

type Props = {
  children: React.ReactNode
}

const mainPageContext = createContext<any>(null);

export const useMainPageContext = () => {
  return useContext(mainPageContext); 
}

export default function MainPageContext(props: Props) {
  const [mainPageData, setMainPageData] = useState<any>(null); 

  const value = useMemo(() => [mainPageData, setMainPageData], [mainPageData]); 

  return (
    <mainPageContext.Provider value={value}>
      {props.children}
    </mainPageContext.Provider>
  )
};
