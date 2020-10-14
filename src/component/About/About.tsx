import React, { ReactElement } from 'react'
import styles from '../../../styles/mainPage/About.module.scss'; 
import ReactHtmlParser from 'react-html-parser';

//context
import SectionTitle from '../SectionTitle/SectionTitle';
import { useMainPageContext } from '../../contexts/MainPageContext';

interface Props {}

export default function About(props: Props): ReactElement {
  const [mainPageData] = useMainPageContext()

  return (
    <section className={`${styles.about} container`} id="about">
      <SectionTitle title={mainPageData.short_text.about_studio} />
      <div className={styles.about__info}>
        <p>
          {ReactHtmlParser(mainPageData.studio.studio_about)}
        </p>
      </div>
    </section>
  )
}
