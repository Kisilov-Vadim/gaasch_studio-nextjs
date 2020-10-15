import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

//import components
import MainProject from '../src/component/MainProject/MainProject';
import Menu from '../src/component/Menu/Menu';
import Projects from '../src/component/Projects/Projects';
import About from '../src/component/About/About';
import Clients from '../src/component/Clients/Clients';
import ContactUs from '../src/component/ContactUs/ContactUs';
import Footer from '../src/component/Footer/Footer';
import Header from '../src/component/Header/Header';
import Loader from '../src/component/Loader/Loader';

//contexts
import { useMainPageContext } from '../src/contexts/MainPageContext';


export default function ({ dataLoad }): ReactElement {
  const [mainPageData, setMainPageData] = useMainPageContext();
  
  useEffect(() => {
    setMainPageData(dataLoad)
  }, [])

  if (!mainPageData) {
    return (
      <Loader />
    )
  } else {
    return (
      <BrowserRouter>
        <Head>
          <title>{mainPageData.studio.meta_title}</title>
          <meta name="description" content={mainPageData.studio.meta_description} />
          <meta property="og:image" content={
              mainPageData.studio.meta_og_image && mainPageData.studio.meta_og_image.original
            }
          />
        </Head>
  
        <Menu />
        <Header />
        <MainProject />
        <Projects />
        <Clients />
        <About />
        <ContactUs />
        <Footer topLine={false} />
      </BrowserRouter>
    )
  }
}

export async function getServerSideProps() {
  const res = await fetch('http://gaasch-studio.lu/sunflower/api/studio', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }
  })

  const dataLoad = await res.json(); 

  return {
    props: {
      dataLoad,
    },
  }
}