import React, { ReactElement } from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'; 
import styles from '../../../styles/mainPage/CardsGroup.module.scss';

//components
import LongPaddingCard from '../../component/LongPaddingCard/LongPaddingCard';
import LongCard from '../../component/LongCard/LongCard';
import ShortCard from '../../component/ShortCard/ShortCard';

//types
import { TMainProject } from '../../Utilits/Types';

//contexts
import { useMainPageContext } from '../../contexts/MainPageContext';

interface IProps {
  logoInCards: boolean
  projects: TMainProject[]
}

export default function CardsGroup({logoInCards, projects}: IProps): ReactElement {
  const [mainPageData] = useMainPageContext(); 

  let short = true;
  let leftPadding = false; 

  let star = (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <title>asterisk</title>
      <g id="CG-concept" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="CG-Desktop-HD-2" transform="translate(-1370.000000, -6974.000000)" 
          fill={mainPageData.studio.studio_asterisk_color}
        >
          <g id="projects" transform="translate(-135.000000, 2035.000000)">
            <g id="asterisk" transform="translate(1505.000000, 4939.000000)">
                <polygon points="14.1719479 -3.37507799e-14 9.83498744 5.43465264 5.13212962 0.352744231 2.49312448 2.44768624 6.3063494 8.16692574 0 11.1228028 1.22085376 14.2580414 7.84407509 12.4405118 8.69903145 19.3459285 12.0279804 19.1067799 12.3460481 12.2910439 19.2120053 13.5716848 20 10.3156762 13.5130934 7.89907928 16.9436805 1.85698912"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )

  return (
    <ParallaxProvider>
      <div className={styles.cardsGroup}>
        {projects.map((project, index) => {
          let logo = false; 

          if (logoInCards) {
            logo = index === 0 ? true : false; 
          }

          if (index % 2 === 0) {
            if (leftPadding) {
              leftPadding = false; 
              return <LongPaddingCard cardData={project} star={star} key={index} />
            } else {
              leftPadding = true
              return <LongCard cardData={project} star={star} key={index} logo={logo} />
            }
          } else {
            if (short) {
              short = false; 
              return <ShortCard cardData={project} star={star} key={index} />
            } else {
              short = true; 
              return <LongCard cardData={project} star={star} key={index} logo={false} />
            }
          }
        })}
      </div>
    </ParallaxProvider>
  )
}
