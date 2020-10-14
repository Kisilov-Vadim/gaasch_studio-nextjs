import React, { ReactElement } from 'react';
import styles from '../../../styles/mainPage/SectionTitle.module.scss';

interface Props {
  title: string
}

export default function SectionTitle({title}: Props): ReactElement {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2> 
      <p className={styles['section-title-line']}></p> 
    </div>
  )
}; 
