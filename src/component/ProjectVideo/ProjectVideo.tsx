import React, { ReactElement, useState } from 'react';
import styles from '../../../styles/projectPage/ProjectVideo.module.scss'; 
import ModalVideo from 'react-modal-video';

//contexts
import { useProjectPageContext } from '../../contexts/ProjectPageContext';

type TProps = {
  id: string
  channel: string
}

export default function ProjectVideo({ id, channel }: TProps): ReactElement {
  const [toggler, setToggler] = useState(false);
  const [projectPageData] = useProjectPageContext();

  return (
    <section className={styles['project-video']}>
      <div className="container">
        <div 
          style={{ 
            backgroundImage: `url(${projectPageData.project.project_video_thumbnail?.original})`, 
            backgroundColor: projectPageData.studio.studio_background_color || ''
          }}
          className={styles['project-video__video']} 
          onClick={() => setToggler(!toggler)}
        >
          <div className={styles['project-video__video-play']}>
            <img src={'http://gaasch-studio.lu' + '/images/projectPage/play.svg'} alt="play" />
          </div>
        </div>
        <ModalVideo channel={channel} isOpen={toggler} videoId={id} onClose={() => setToggler(false)} />
      </div>
    </section>
  )
}
