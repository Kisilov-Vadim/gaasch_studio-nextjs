import React, { ReactElement } from 'react';
import styles from '../../../styles/mainPage/ContactUs.module.scss'; 

//context
import { useSectionMarginContext } from '../../contexts/SectionMarginContext';
import { useMainPageContext } from '../../contexts/MainPageContext';

//compents
import SectionTitle from '../SectionTitle/SectionTitle';
import Social from '../Social/Social';
import LoadImage from '../LoadImage/LoadImage';


export default function ContactUs(): ReactElement {
  const [sectionMargin] = useSectionMarginContext(); 
  const [mainPageData] = useMainPageContext()

  const {contacts} = mainPageData

  return (
    <section className={styles.contactUs} id="contacts">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionTitle}>
          <SectionTitle title={mainPageData.short_text.contact_us} />
        </div>
      </div>
      <div className={styles.contactUs__info} style={{ width: `calc(100% - ${sectionMargin}px)` }}>
        <div className={`container ${styles.container}`}>
          <div className={styles.sectionTitle}>
            <SectionTitle title="Contact us" />
          </div>
           {
             contacts.logo && 
             <LoadImage 
              src={contacts.logo.original}
              alt="Contacts"
            />
           }
          <div className={styles.information}>
            <a href="mailto: info@gaasch-studio.lu" className={styles.information__email}>
              {contacts.email}
            </a>
            <div className={styles.information__phones}>
              <div className={styles['information__phones-phone']}>
                <span>{contacts['first-city'].city}</span>
                <a href={`tel:${contacts['first-city'].phone.split(' ').join('')}`}>{contacts['first-city'].phone}</a>
              </div>
              <div className={styles['information__phones-phone']}>
                <span>{contacts['second-city'].city}</span>
                <a href={`tel:${contacts['second-city'].phone.split(' ').join('')}`}>{contacts['second-city'].phone}</a>
              </div>
            </div>
            <Social social={contacts['social-network']} />
          </div>
        </div>
      </div>
    </section>
  )
}
