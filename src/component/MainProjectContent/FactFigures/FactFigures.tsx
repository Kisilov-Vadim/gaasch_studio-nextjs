import React, { ReactElement } from 'react'; 

//components
import FactsCard from '../../FactsCard/FactsCard';
import SectionTitle from '../../SectionTitle/SectionTitle';
import styles from '../../../../styles/projectPage/FactFigures.module.scss'; 

//types
import { TProjectFact } from '../../../Utilits/Types';

type TProps = {
  facts: TProjectFact[]
}

export default function FactFigures({ facts }: TProps): ReactElement {


  return (
    <section className={`${styles['project-facts']} container`}>
      <SectionTitle title="Facts & Figures" />
      <div className={styles['project-facts__info']}>
        {facts.map((fact: TProjectFact) => <FactsCard {...fact} key={fact.facts_title} />)}
      </div>
    </section>
  )
}