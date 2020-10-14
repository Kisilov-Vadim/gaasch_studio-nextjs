import React, { ReactElement } from 'react'; 
import styles from '../../../styles/mainPage/FactsCard.module.scss'; 

//types  
import { TProjectFact } from '../../Utilits/Types';



export default function FactsCard({facts_title, facts_number, facts_description}: TProjectFact): ReactElement {
  return (
    <div className={styles['facts-card']}>
      <div className={styles['facts-card__leftside']}>
        <p className={styles['facts-card__leftside-number']}>{facts_number}</p>
        <span className={styles['facts-card__leftside-title']}>{facts_title}</span>
      </div>
      <div className={styles['facts-card__rightside']}>
        <p className={styles['facts-card__rightside-description']}>
          {facts_description}
        </p>
      </div>
    </div>
  )
}
