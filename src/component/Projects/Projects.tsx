import React, { ReactElement } from 'react'
import styles from '../../../styles/mainPage/Projects.module.scss'; 

//compenents
import SectionTitle from '../SectionTitle/SectionTitle';
import CardsGroup from '../CardsGroup/CardsGroup';

//contexts
import { useMainPageContext } from '../../contexts/MainPageContext';

export default function Projects(): ReactElement {
  const [mainPageData] = useMainPageContext()
  
  return (  
    <section className={styles.projects} id="projects">
      <div className="container">
        <SectionTitle title={mainPageData.short_text.featured_projects} />
        <CardsGroup logoInCards={true} projects={mainPageData.preview_projects} />
      </div>
    </section>
  )
}
