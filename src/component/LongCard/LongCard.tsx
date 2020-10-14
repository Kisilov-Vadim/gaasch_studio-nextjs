import React, { ReactElement } from 'react';
import styles from '../../../styles/mainPage/LongCard.module.scss'; 
import CardLabel from '../CardLabel/CardLabel';
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Link from 'next/link';

//contexts
import { useWindowWidthContext } from '../../contexts/WindowWidthContext';
import { useSectionMarginContext } from '../../contexts/SectionMarginContext';

//types
import { TMainProject } from '../../Utilits/Types'; 
import LoadImage from '../LoadImage/LoadImage';

type TProps = {
  cardData: TMainProject
  logo: boolean
  star: React.ReactNode
}

export default function LongCard({cardData, logo, star}: TProps): ReactElement {
  const [windowWidth] = useWindowWidthContext();
  const [sectionMargin] = useSectionMarginContext(); 

  const {
    preview_project_title,
    preview_project_preview, 
    preview_project_short_text,
    projects_alias, 
    preview_project_category
  } = cardData; 

  if (windowWidth < 768) {
    return (
      <Link href={`/${projects_alias}`}>
        <a>
          <div className={styles['long-card']}>
            <Slide direction="right" duration={600} triggerOnce style={{ animationTimingFunction: 'ease-out' }}>
              {
                preview_project_preview && 
                <LoadImage
                  src={preview_project_preview.original}
                  alt={preview_project_title}
                  className={styles['long-card__mainImage']}
                />
              }
            </Slide>
            <Slide direction="right" duration={300} triggerOnce style={{ animationTimingFunction: 'ease-out' }}>
              <CardLabel 
                title={preview_project_title} 
                description={preview_project_short_text} 
                label={preview_project_category} 
                line={true} 
              /> 
            </Slide>
            <div className={styles['long-card__star']}>
              {star}
            </div>            
          </div>
        </a>
      </Link>
    )
  } else {
    return (
      <div className={styles['long-card']}>
        <Fade direction="up" triggerOnce duration={800} style={{ animationTimingFunction: 'ease-out', zIndex: 1 }}>
          <Link href={`/${projects_alias}`}>
            <a>
              <div>
                <div className={styles['image-mask']}>
                  {
                    preview_project_preview && 
                    <LoadImage
                      src={preview_project_preview.original}
                      alt={preview_project_title}
                      className={`${styles['long-card__mainImage']} card-image`}
                    />
                  }
                </div>
                <CardLabel 
                  title={preview_project_title} 
                  description={preview_project_short_text} 
                  label={preview_project_category} 
                  line={true} 
                /> 
              </div>
            </a>
          </Link>
        </Fade>
        <Zoom className={styles['long-card__star']} delay={500} duration={800} triggerOnce>
          {star}
        </Zoom> 
        {
          logo &&
            <img 
              className={styles['long-card__logo']} 
              src={'http://gaasch-studio.lu/' + '/images/logo-background.png'}
              alt="logo" 
              style={{ left: `-${sectionMargin}px` }}
            />
        }
      </div>
    )
  }
}