import React, { ReactElement } from 'react';
import styles from '../../../styles/mainPage/ShortCard.module.scss'; 
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';

//components
import CardLabel from '../CardLabel/CardLabel';

//contexts
import { useWindowWidthContext } from '../../contexts/WindowWidthContext';

//types
import { TMainProject } from '../../Utilits/Types';
import LoadImage from '../LoadImage/LoadImage';

type TProps = {
  cardData: TMainProject
  star: React.ReactNode
}

export default function ShortCard({
  cardData: {
    preview_project_title, 
    preview_project_preview, 
    preview_project_short_text,
    projects_alias, 
    preview_project_category
  },
  star
}: TProps): ReactElement {
  const [windowWidth] = useWindowWidthContext(); 

  if (windowWidth < 768) {

    return (
      <Link href={`/${projects_alias}`}>
        <a>
          <div className={styles['short-card']}>
            <Slide direction="right" duration={600} triggerOnce style={{ animationTimingFunction: 'ease-out' }}>
              {
                preview_project_preview && 
                <LoadImage
                  src={preview_project_preview.original}
                  alt={preview_project_title}
                  className={styles['short-card__mainImage']}
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
            <div className={styles['short-card__star']}>
              {star}
            </div>
          </div>
        </a>
      </Link>
    )
  } else {

    return (
      <div className={styles['short-card']}>
        <Fade direction="up" triggerOnce delay={800} duration={800} style={{ animationTimingFunction: 'ease-out' }}>
          <Parallax y={[100, 0]}>
            <Link href={`/${projects_alias}`}>
              <a>
                  <div className={styles['image-mask']}>
                    {
                      preview_project_preview && 
                      <LoadImage
                        src={preview_project_preview.original}
                        alt={preview_project_title}
                        className={`${styles['short-card__mainImage']} short-card__mainImage card-image`}
                      />
                    }
                  </div>
                  <CardLabel 
                    title={preview_project_title} 
                    description={preview_project_short_text} 
                    label={preview_project_category} 
                    line={true} 
                  /> 
              </a>
            </Link>
          </Parallax>
        </Fade>
        <Zoom className={styles['short-card__star']} delay={500} duration={800} triggerOnce>
          {star}
        </Zoom>
      </div>
    )
  }
}