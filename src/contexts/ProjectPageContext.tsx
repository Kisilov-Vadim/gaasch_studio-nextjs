import React, { createContext, useState, useMemo, useContext } from 'react';

type Props = {
  children: React.ReactNode
}

const projectPageContext = createContext<any>(1600);

export const useProjectPageContext = () => {
  return useContext(projectPageContext); 
}

export default function ProjectPageContext(props: Props) {
  const [projectPageData, setProjectPageData] = useState<any>(null);

  const value = useMemo(() => [projectPageData, setProjectPageData], [projectPageData]); 

  return (
    <projectPageContext.Provider value={value}>
      {props.children}
    </projectPageContext.Provider>
  )
};