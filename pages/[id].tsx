import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

//components
import Footer from '../src/component/Footer/Footer';
import ProjectGallery from '../src/component/Gallery/ProjectGallery';
import Header from '../src/component/Header/Header';
import Loader from '../src/component/Loader/Loader';
import FactFigures from '../src/component/MainProjectContent/FactFigures/FactFigures';
import MainProjectContent from '../src/component/MainProjectContent/MainProjectContent';
import Menu from '../src/component/Menu/Menu';
import OtherProjects from '../src/component/OtherProjects/OtherProjects';
import ProjectVideo from '../src/component/ProjectVideo/ProjectVideo';

//contexts
import { useProjectPageContext } from '../src/contexts/ProjectPageContext';
import { useMainPageContext } from '../src/contexts/MainPageContext';

interface Props {
  
}

export default function ({ dataPage, dataMain }): ReactElement {
  const [projectPageData, setProjectPageData] = useProjectPageContext();
  const [mainPageData, setMainPageData] = useMainPageContext();
  
  useEffect(() => {
    setProjectPageData(dataPage);
    setMainPageData(dataMain);
  }, [dataPage, dataMain])

  const projectVideoType = () => {
    if (projectPageData.project.project_youtube) {
      return (
        <ProjectVideo id={projectPageData.project.project_youtube} channel='youtube' />
      )
    } else if (projectPageData.project.project_vimeo) {
      return (
        <ProjectVideo id={projectPageData.project.project_vimeo} channel='vimeo' />
      )
    } else {
      return null;
    }
  }

  if (!mainPageData || !projectPageData) {
    return <Loader />
  } else {
    return (
      <BrowserRouter>
        <>
          <Head>
            <title>{projectPageData.project.meta_title}</title>
            <meta name="description" content={projectPageData.project.meta_description} />
            <meta property="og:image" content={
                projectPageData.project.meta_og_image && projectPageData.project.meta_og_image.original
              }
            />
          </Head>
          
          <Menu /> 
          <Header /> 
          <MainProjectContent />
          {
            projectPageData.images.length > 0 && <ProjectGallery images={projectPageData.images} />
          }
          {
            projectPageData.facts.length > 0 && <FactFigures facts={projectPageData.facts} />
          }
          {
            projectVideoType()
          }
          {
            projectPageData.preview_projects.length > 0 && <OtherProjects />
          }
          <Footer topLine />
        </>
      </BrowserRouter>
    )
  }
}

export async function getServerSideProps({ query: {id}, req }) {
  const res = await fetch(`http://gaasch-studio.lu/sunflower/api/project/${id}`, {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }
  })
  const dataPage = await res.json();
  const res2 = await fetch('http://gaasch-studio.lu/sunflower/api/studio', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }
  })
  const dataMain = await res2.json();

  return {
    props: {
      dataPage,
      dataMain
    }
  }
}
