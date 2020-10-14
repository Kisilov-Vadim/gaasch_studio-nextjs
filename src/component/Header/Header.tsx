import React, { useEffect, useState } from 'react';
import HeaderStyles from '../../../styles/mainPage/Header.module.scss';
import $ from 'jquery'; 
import Typist from 'react-typist';
import { Route, Switch } from 'react-router-dom';
import Link from 'next/link'

//contexts  
import { useWindowWidthContext } from '../../contexts/WindowWidthContext';
import { useMainPageContext } from '../../contexts/MainPageContext';
import { useSectionMarginContext } from '../../contexts/SectionMarginContext';
import { useTitleStatusContext } from '../../contexts/TitleStatusContext';

export default function Header () {
  const [mainPageData] = useMainPageContext(); 
  const [titleShow, setTitleShow] = useTitleStatusContext();
  const [windowWidth] = useWindowWidthContext();
  const [, setSectionMargin] = useSectionMarginContext();
  const [, setWindowWidth] = useWindowWidthContext();
  const [mobFontSize, setMobFontSize] = useState<string>('16vw');

  const handleMenuShow = ():void => {
    $('body').addClass('menu-open');
    $(`.menu-open .menu`).css('top', `${window.scrollY}px`);
  }

  const handleTouch = (): void => {
    setTitleShow(false); 
    setTimeout(() => {
      $('body').css('overflow', 'auto');
    }, 300)
  }

  //set window width and set margin function 
  const handleResize = ():void => {
    let newWidth = $(window).width(); 
    setWindowWidth(newWidth);

    if ($(`.${HeaderStyles.header} .container`).length) {
      let newMarg = $(`.${HeaderStyles.header} .container`).css('marginLeft').replace(/px/, ''); 
      setSectionMargin(+newMarg);
    }
  }

  useEffect(() => {
    //unshow title top in mob
    if (windowWidth < 576) {
      document.addEventListener('touchend', handleTouch)

      return () => {
        document.removeEventListener('touchend', handleTouch)
      }
    }
  }, [windowWidth])

  useEffect(() => {
    let width = $(window).width() || 0; 
    
    //change title font-size
    if (width < 576) {
      let maxWordLength = Math.max(...mainPageData.studio.studio_slogan.split(' ').map((item:string) => item.length));
      setMobFontSize(`${27 - maxWordLength}vw`);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  let logo_image = (
    <svg width="52px" height="50px" viewBox="0 0 52 50" version="1.1" >
      <title>logo</title>
      <g id="CG-concept" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="CG-Desktop-HD-2✅" transform="translate(-210.000000, -8624.000000)">
          <g id="logo" transform="translate(210.000000, 8624.000000)">
            <g id="Group-3" transform="translate(0.000000, 0.476316)" fill="#231F20">
                <path d="M24.285235,0.181644737 C31.298085,0.181644737 37.625185,3.20730263 42.062085,8.03559211 L42.062085,8.03559211 L39.462085,10.4816447 C35.673235,6.35993421 30.273685,3.77440789 24.285235,3.77440789 C12.851085,3.77440789 3.549585,13.1895395 3.549585,24.7619079 C3.549585,36.3342763 12.851085,45.7494079 24.285235,45.7494079 C35.718735,45.7494079 45.020885,36.3342763 45.020885,24.7619079 L45.020885,24.7619079 L48.569885,24.7619079 C48.569885,38.3151974 37.675885,49.3421711 24.285235,49.3421711 C10.894585,49.3421711 -6.5e-05,38.3151974 -6.5e-05,24.7619079 C-6.5e-05,11.2086184 10.894585,0.181644737 24.285235,0.181644737 Z M24.284975,10.0954605 C28.466425,10.0954605 32.236425,11.8994079 34.884525,14.7757237 L34.884525,14.7757237 L32.287775,17.2217763 C30.289025,15.0500658 27.441375,13.6875658 24.284975,13.6875658 C18.252325,13.6875658 13.344175,18.6553289 13.344175,24.7619079 C13.344175,30.8684868 18.252325,35.83625 24.284975,35.83625 C29.076125,35.83625 33.154225,32.7020395 34.632325,28.3540132 L34.632325,28.3540132 L26.468975,28.3540132 L26.468975,24.7619079 L38.775425,24.7619079 C38.775425,26.0007237 38.621375,27.2040132 38.334075,28.3540132 C36.747425,34.7099342 31.050825,39.4283553 24.284975,39.4283553 C16.295175,39.4283553 9.795175,32.84875 9.795175,24.7619079 C9.795175,16.6750658 16.295175,10.0954605 24.284975,10.0954605 Z" id="Combined-Shape"></path>
            </g>
            <g id="Group-8" transform="translate(40.300000, 11.002632)" fill={mainPageData.studio.studio_asterisk_color}>
                <polygon id="Fill-6" points="5.950425 3.36907895 3.393975 0.573026316 1.959425 1.725 4.032275 4.87236842 0.604175 6.49868421 1.267825 8.22368421 4.868175 7.22368421 5.332925 11.0230263 7.142525 10.8907895 7.315425 7.14144737 11.047725 7.84539474 11.476725 6.05394737 7.949825 4.725 9.814025 1.4 8.307975 0.378947368"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )

  return (
    <section className={HeaderStyles.header}>
      <div className="container">
        <div className={HeaderStyles.head}>
          <div className={HeaderStyles.head__logo}>
            <Switch>
              <Route exact={true} path="/">
                {
                  logo_image
                }
                <span>Gaasch.Studio</span>
              </Route>
              <Link href="/">
                <a>
                  {
                    logo_image
                  }
                  <span>Gaasch.Studio</span>
                </a>
              </Link>
            </Switch>
          </div>
          <div className={HeaderStyles.head__menu} onClick={handleMenuShow}>
            <div className={HeaderStyles['head__menu-button']}>
              <p></p>
              <p></p>
            </div>
            <div className={HeaderStyles['head__menu-menu']}>Menu</div>
          </div>
        </div>
        <Route exact={true} path='/'>
          <div 
            className={`
              ${HeaderStyles.header__title} 
              ${titleShow ? '' : HeaderStyles['header__title-remove']}
            `}
            style={{
              backgroundColor: windowWidth < 576 ? mainPageData.studio.studio_background_color : ''
            }}  
          >
              <Typist
                startDelay={500}
                avgTypingDelay={75}
                cursor={{show: false}}
              >
                <h1 
                  className={HeaderStyles.title}
                  style={{ 
                    fontSize: windowWidth < 576 ? mobFontSize : '',
                  }}
                >
                  {mainPageData.studio.studio_slogan}
                </h1>
              </Typist>
          </div>
        </Route>
      </div>
    </section>
  )
}

