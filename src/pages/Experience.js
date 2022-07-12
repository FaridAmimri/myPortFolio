/** @format */

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2007 - 2011'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Université d'Evry, Bac+3
          </h3>
          <p>Licence Gestion Logistique (option informatique)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2022'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Openclassrooms Paris, Bac+4
          </h3>
          <p>Titre Développeur JavaScript React</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2012 - 2016'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Technicien IT, Capita IT & Networks
          </h3>
          <h4 className='vertical-timeline-element-title'>Lausanne, Suisse</h4>
          <ul>
            <li>Dépannage informatique à distance via Teamviewer</li>
            <li>
              Traitement et analyse des dérangements réseaux mobiles 3G/4G
              Swisscom
            </li>
            <li>Gestion des incidents et suivi des tickets de dérangements</li>
            <li>
              Configuration à distance des antivirus, de compte mail IMAP et POP
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2017 - 2020'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Dessinateur-Projeteur FTTH, Eiffage
          </h3>
          <h4 className='vertical-timeline-element-title'>Lyon, Full Remote</h4>
          <ul>
            <li>
              Réalisation des études en zone PA (remplissage complet de la fiche
              PA sous excel) avec relevé terrain et la mise à jour de Geofibre
              et Ipon
            </li>
            <li>Synoptique</li>
            <li>Parcours (itinéraire PA-PB)</li>
            <li>Adductabilité des sites</li>
            <li>Réalisation de l’étude sur SI Geofibre & Ipon</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - 2022'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Développeur Frontend React, Openclassrooms
          </h3>
          <h4 className='vertical-timeline-element-title'>
            Paris, Full Remote
          </h4>
          <ul>
            <li>Développement de projets from scratch</li>
            <li>Ajouts de fonctionnalités</li>
            <li>Refonte d’applications</li>
            <li>Réalisation des tests unitaires & d’intégration</li>
            <li>REST APIs</li>
            <li>Etudes des conceptions UI/UX</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
