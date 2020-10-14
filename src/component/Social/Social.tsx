import React, { ReactElement } from 'react';
import '../../../styles/mainPage/Social.module.scss'; 

interface TProps {
  social: Social[]
}

type Social = {
  title: "facebook" | "instagram" | "behance" | "dribbble",
  link: null | string
}

export default function Social({social}:TProps): ReactElement {

  return (
    <div className="social">
      {
        social.map(({ title, link }) => {
          if (!link) return null; 
          
          return (
            <a href={link}><img src={'http://gaasch-studio.lu/' + `/build/images/social/${title}.svg`} alt={title} /></a>
          )
        })
      }
    </div>
  )
}
