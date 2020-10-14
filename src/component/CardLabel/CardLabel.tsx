import React, { ReactElement } from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactHtmlParser from 'react-html-parser'; 
import styles from '../../../styles/mainPage/CardLabel.module.scss';

interface Props {
  title: string
  description: string
  label: string
  line: boolean
}

export default function CardLabel({title, description, label, line}: Props): ReactElement {

  return (
    <div className={styles.cardLabel}>
      {
        line && <div className={styles.cardLabel__line}><p className='card-title-line'></p></div>
      }
      <div className={styles.cardLabel__content}>
        <Fade direction="up" triggerOnce duration={800} delay={200} style={{ animationTimingFunction: 'ease-out' }}>
          <h3>{title}</h3>
          <p className={styles['cardLabel__content-info']}>{ReactHtmlParser(description)}</p>
          <span className={styles['cardLabel__content-label']}>{label}</span>
        </Fade>
      </div>
    </div>
  )
}
