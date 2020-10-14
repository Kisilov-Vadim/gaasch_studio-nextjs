import React, { ReactElement } from 'react';
import styles from '../../../styles/projectPage/MainProjectContent.module.scss'; 
import ReactHtmlParser from 'react-html-parser'; 

//components
import SectionTitle from '../SectionTitle/SectionTitle';
import LoadImage from '../LoadImage/LoadImage';

//contexts
import { useSectionMarginContext } from '../../contexts/SectionMarginContext';
import { useProjectPageContext } from '../../contexts/ProjectPageContext';


export default function MainProjectContent(): ReactElement {
  const [sectionMargin] = useSectionMarginContext(); 
  const [projectPageData] = useProjectPageContext()

  return (
    <section className={styles.mainProjectContent}>
      <div className={styles.mainProjectContent__container}>
        <div 
          className={styles.mainProjectContent__head}
          style={{ paddingLeft: `${sectionMargin}px`, marginRight: `${sectionMargin}px` }}
        >
          <h1 className={styles['mainProjectContent__head-title']}>{projectPageData.project.project_title || ''}</h1>
          <div className={styles['mainProjectContent__head-info']}>
            <p>{projectPageData.project.project_short_text}</p>
            <span>{projectPageData.project.project_category || ''}</span>
          </div>
        </div>

        {
          projectPageData.project.project_banner
            && 
            <LoadImage 
              src={projectPageData.project.project_banner?.original || ''}
              alt={projectPageData.project.project_title || ''}
              className={styles.mainProjectContent__image}
            />
        }
      </div>

      {
        projectPageData.project.project_details && (
          <div className={styles['mainProjectContent__details']} style={{ paddingLeft: `${sectionMargin}px`, marginRight: `${sectionMargin}px` }}>
            <SectionTitle title={projectPageData.short_text.project_details} /> 
            <p className={styles['mainProjectContent__details-info']}>
              {
                ReactHtmlParser(projectPageData.project.project_details) || ''
              }
            </p>
          </div>
        )
      }
    </section>
  )
}
