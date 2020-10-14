import React, { ReactElement } from 'react'
import MenuStyles from '../../../styles/mainPage/Menu.module.scss'; 

import $ from 'jquery';
import { Route, Switch } from 'react-router-dom';
import Link from 'next/link';

//contexts
import { useMainPageContext } from '../../contexts/MainPageContext';

export default function Menu(): ReactElement {
  const [mainPageData] = useMainPageContext();

  const handleMenuShow = ():void => {
    $('body').removeClass('menu-open'); 
    $(`.menu-open .menu`).css('top', `-130%`);
  }

  const handleAnchor = (id:string):void => {
    $('body').removeClass('menu-open'); 
    setTimeout(() => {
      const elementToView:any = document.getElementById(id);
      elementToView.scrollIntoView({behavior: 'smooth'});
    }, 400)
  }

  return (
    <Switch>
      <Route exact={true} path='/'>
        <section 
          className='menu'
          style={{ backgroundColor: mainPageData.studio.studio_background_color || '#00a550' }}
        >
          <div className='container'>
            <img src={'http://gaasch-studio.lu/' + '/images/close.svg'} alt="close" onClick={handleMenuShow}/>
          </div>
          <span onClick={() => handleAnchor("projects")}>
            Projects
          </span>
          <span onClick={() => handleAnchor("about")}>
            About
          </span>
          <span onClick={() => handleAnchor("contacts")}>
            Contacts
          </span>
        </section>
      </Route>
      <section 
        className={MenuStyles.menu}
        style={{ backgroundColor: mainPageData.studio.studio_background_color || '#00a550' }}
      >
          <div className="container">
            <img src={'http://gaasch-studio.lu/' + '/images/close.svg'} alt="close" onClick={handleMenuShow}/>
          </div>
          <span onClick={() => handleAnchor("projects")}>
            <Link href="/"><a>Projects</a></Link>
          </span>
          <span onClick={() => handleAnchor("about")}>
            <Link href="/"><a>About</a></Link>
          </span>
          <span onClick={() => handleAnchor("contacts")}>
            <Link href="/"><a>Contacts</a></Link>
          </span>
        </section>
    </Switch>
    
  )
}