import React, { ReactElement, useEffect, useState } from 'react';
import ClientCard from '../ClientCard/ClientCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from '../../../styles/mainPage/Clients.module.scss';
import ClientCardStyles from '../../../styles/mainPage/ClientCard.module.scss'; 
import $ from 'jquery'; 

//contexts
import { useMainPageContext } from '../../contexts/MainPageContext';

//types
import { TMainClient } from '../../Utilits/Types'; 

export default function Clients(): ReactElement {
  const [cardHeight, setCardHeight] = useState<number>(0); 
  const [mainPageData] = useMainPageContext(); 

  const handleChangeCardHeight = ():void => {
    const newWidth:number = +$(`.${styles.clients} .${styles.clients__cardsGroup} .${ClientCardStyles.clientCard}:nth-child(1)`).css('width').replace('px', ''); 
    setCardHeight(newWidth); 
  }

  useEffect(() => {
    const width:number = +$(`.${styles.clients} .${styles.clients__cardsGroup} .${ClientCardStyles.clientCard}:nth-child(1)`).css('width').replace('px', ''); 
    setCardHeight(width); 

    window.addEventListener('resize', handleChangeCardHeight); 

    return () => {
      window.removeEventListener('resize', handleChangeCardHeight);
    }
  }, [])

  return (
    <section className={styles.clients}>
      <div className="container">
        <SectionTitle title={mainPageData.short_text.our_clients} />
        <div className={styles.clients__cardsGroup}>
          {
            mainPageData.our_clients.map(({logo, alt}: TMainClient) => {
              if (logo) {
                return (
                  <ClientCard 
                    image={logo.original} 
                    title={alt} 
                    cardHeight={cardHeight} 
                  />
                ) 
              } else {
                return null
              }
            })
          }
        </div>
      </div>
    </section>
  )
}
