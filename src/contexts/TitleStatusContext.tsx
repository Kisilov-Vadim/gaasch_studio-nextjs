import React, { createContext, useState, useMemo, useContext } from 'react';

type Props = {
  children: React.ReactNode
}

const titleStatusContext = createContext<any>(true);

export const useTitleStatusContext = () => {
  return useContext(titleStatusContext); 
}

export default function TitleStatusContext(props: Props) {
  const [titleShow, setTitleShow] = useState<boolean>(true);

  const value = useMemo(() => [titleShow, setTitleShow], [titleShow]); 

  return (
    <titleStatusContext.Provider value={value}>
      {props.children}
    </titleStatusContext.Provider>
  )
};