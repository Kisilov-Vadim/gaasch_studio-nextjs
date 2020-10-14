import React, { ReactElement } from 'react'; 
import styles from '../../../styles/mainPage/ClientCard.module.scss';

interface Props {
  image: string
  title: string
  cardHeight: number
}

export default function ClientCard({image, title, cardHeight}: Props): ReactElement {
  
  return (
    <div className={styles.clientCard} style={{ height: `${cardHeight}px` }}>
      <img src={'http://gaasch-studio.lu/' + image} alt={title} />
    </div>
  )
}
