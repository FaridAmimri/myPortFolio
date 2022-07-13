/** @format */

import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Farid</h2>
        <div className='prompt'>
          <p>
            A frontend react developer with a passion for learning and creating
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML, CSS, Saas, ReactJs, Redux, MaterialUI, StyledComponents,
              GitHub, Npm, Jest, Figma
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
