import React, { ReactElement } from 'react'
import styles from '../../../styles/mainPage/MainProject.module.scss'; 
import ReactHtmlParser from 'react-html-parser'; 
import Link from 'next/link';

//components
import CardLabel from '../CardLabel/CardLabel';

//contexts
import { useSectionMarginContext } from '../../contexts/SectionMarginContext';
import { useMainPageContext } from '../../contexts/MainPageContext';
import LoadImage from '../LoadImage/LoadImage';


export default function MainProject(): ReactElement {
  const [sectionMargin] = useSectionMarginContext(); 
  const [mainPageData] = useMainPageContext();

  return (
    <section className={styles['main-project']}>
      <Link href={`/${mainPageData.studio.project_alias}`}>
        <a 
          className={styles.hitch}
          style={{ width: `calc(100% - ${sectionMargin}px)` }}
        >
          <div className={styles.hitch__info}>
            <CardLabel 
              title={mainPageData.studio.project_title}
              description={mainPageData.studio.project_short_text}
              label={mainPageData.studio.project_category}
              line={false} 
            />
          </div>
          <div className={styles.hitch__image}>
            {
              mainPageData.studio.project_preview && 
              <LoadImage 
                src={mainPageData.studio.project_preview.original}
                alt="Hitch"
              />
            }
          </div>
        </a>
      </Link>
      <div className={styles.content} style={{ width: `calc(100% - ${sectionMargin}px)` }}>
        <div className={`container ${styles.container}`} style={{ marginLeft: `calc(100% - ${sectionMargin}px - 100%)` }}>
          {
            ReactHtmlParser(mainPageData.studio.studio_intro_text || '')
          }
        </div>
      </div>
    </section>
  )
}
