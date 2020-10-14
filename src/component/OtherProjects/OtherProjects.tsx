import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../../../styles/projectPage/OtherProjects.module.scss'; 

//components
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import CardsGroup from '../../component/CardsGroup/CardsGroup';

//contexts
import { useProjectPageContext } from '../../contexts/ProjectPageContext';


export default function OtherProjects(): ReactElement {
  const [show, setShow] = useState<boolean>(false); 
  const [projectPageData] = useProjectPageContext() 

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 200)
  }, [])
  
  return (
    <section className={`${styles['other-projects']} container`}>
      <SectionTitle title="Other projects" />
      {
        show && <CardsGroup logoInCards={false} projects={projectPageData.preview_projects} />
      }
    </section>
  )
}
