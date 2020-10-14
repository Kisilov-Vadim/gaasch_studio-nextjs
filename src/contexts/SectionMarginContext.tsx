import React, { createContext, useState, useMemo, useContext } from 'react';

type Props = {
  children: React.ReactNode
}

const sectionMarginContext = createContext<any>(0);

export const useSectionMarginContext = () => {
  return useContext(sectionMarginContext); 
}

export default function SectionMarginContext(props: Props) {
  const [sectionMargin, setSectionMargin] = useState<any>(0); 

  const value = useMemo(() => [sectionMargin, setSectionMargin], [sectionMargin]); 

  return (
    <sectionMarginContext.Provider value={value}>
      {props.children}
    </sectionMarginContext.Provider>
  )
};
