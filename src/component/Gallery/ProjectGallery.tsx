import React, { ReactElement, useState, useCallback } from 'react';
import styles from '../../../styles/mainPage/ProjectGallery.module.scss'; 

//components
import Gallery from 'react-photo-gallery'; 
import Carousel, { Modal, ModalGateway } from "react-images";

//contexts
import { useWindowWidthContext } from '../../contexts/WindowWidthContext';

//utilits
import { createPhotos } from '../../Utilits/Utilits';
import LoadImage from '../LoadImage/LoadImage';


interface TProps {
  images: ImagesForGallery[]
}

type ImagesForGallery = {
  alt: string
  height: null
  image: {
    original: string 
  }
  width: null
}

export default function ProjectGallery({images}: TProps): ReactElement {
  const [windowWidth] = useWindowWidthContext()
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageRenderer = (image:any) => {
    const {photo, onClick} = image; 
    
    return (
      <div style={{ height: photo.height, width: photo.width }} className={styles.projectGallery__imagecontainer}>
        <LoadImage 
          alt="test"
          src={photo.src}
          handleClick={(e) => onClick(e, image)}
          styles={{ 
            display: 'block',
            position: 'absolute',
            cursor: 'pointer',
            height: photo.height,
            width: photo.width
          }}
        />
      </div>
    )
  }

  const createGallery = (images:ImagesForGallery[]) => {
    if (images.length === 2 || images.length === 4 || images.length === 6) {
      return (
        <Gallery 
          photos={createPhotos(images, windowWidth)}
          renderImage={imageRenderer}
          direction="column"
          columns={2}
          margin={windowWidth < 576 ? 5 : 10}
          onClick={openLightbox}
        /> 
      )
    } else if (images.length === 3 || images.length === 5 || images.length === 7) {
      return (
        <Gallery 
          photos={createPhotos(images, windowWidth)} 
          renderImage={imageRenderer} 
          direction="row"
          targetRowHeight={400}
          margin={windowWidth < 576 ? 5 : 10}
          onClick={openLightbox} 
        /> 
      )
    } else if (images.length === 8) {
      return (
        <Gallery 
          photos={createPhotos(images, windowWidth)} 
          renderImage={imageRenderer} 
          direction="column"
          columns={3}
          margin={windowWidth < 576 ? 5 : 10}
          onClick={openLightbox} 
        /> 
      )
    } else {
      return (
        <Gallery 
          photos={createPhotos(images, windowWidth)} 
          renderImage={imageRenderer} 
          direction="column"
          columns={2}
          margin={windowWidth < 576 ? 5 : 10}
          onClick={openLightbox} 
        /> 
      )
    }
  }

  return (
    <section className={`${styles.projectGallery} container`}>
      {
        createGallery(images)
      }
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={createPhotos(images, windowWidth).map(photo => {
                return {
                  source: photo.src, 
                }
              })}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div>
      </div>
    </section>
  )
}


