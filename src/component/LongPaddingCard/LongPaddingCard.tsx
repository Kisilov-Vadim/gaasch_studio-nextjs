import React, { ReactElement } from 'react';
import styles from '../../../styles/mainPage/LongPaddingCard.module.scss'; 
import CardLabel from '../CardLabel/CardLabel';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

//contexts
import { useWindowWidthContext } from '../../contexts/WindowWidthContext';
import Link from 'next/link';

//types
import { TMainProject } from '../../Utilits/Types'; 
import LoadImage from '../LoadImage/LoadImage';

type TProps = {
  cardData: TMainProject
  star: React.ReactNode
}

export default function LongPaddingCard({
  cardData: {
    preview_project_title, 
    preview_project_preview, 
    preview_project_short_text,
    projects_alias, 
    preview_project_category
  },
  star
}: TProps): ReactElement {

  const [windowWidth] = useWindowWidthContext()

  if (windowWidth < 768) {
    return (
      <Link href={`/${projects_alias}`}>
        <a>
          <div className={styles['long-padding-card']}>
            <Slide direction="right" duration={600} triggerOnce style={{ animationTimingFunction: 'ease-out' }}>
              {
                preview_project_preview && 
                <LoadImage
                  src={preview_project_preview.original}
                  alt={preview_project_title}
                  className={styles['long-padding-card__mainImage']}
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
            <div className={styles['long-padding-card__star']}>
              {star}
            </div>
          </div>
        </a>
      </Link>
    )
  } else {
    return (
      <div className={styles['long-padding-card']}>
        <Fade direction="up" triggerOnce duration={800} style={{ animationTimingFunction: 'ease-out' }}>
          <Link href={`/${projects_alias}`}>
            <a>
              <div>
                <div className={styles['image-mask']}>
                {
                  preview_project_preview && 
                  <LoadImage
                    src={preview_project_preview.original}
                    alt={preview_project_title}
                    className={styles['long-padding-card__mainImage']}
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
        <Zoom className={styles['long-padding-card__star']} delay={500} duration={800} triggerOnce>
          {star}
        </Zoom>
      </div>
      
    )
  }
}