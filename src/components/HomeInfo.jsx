import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent ={ 
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5'>
            Hi, i'm <span className='font-semibold'>Mateus 👋</span>
            <br />
            Computer Engineer from Brazil.
        </h1>
    ),
    2: (
        <InfoBox text='Worked with Automation and webDevelopment' link='/about' btnText='Learn More' />
    ),
    3: (
        <InfoBox text='Led multiple projects over the years' link='/projects' btnText='Visit my portfolio' />
    ),
    4: (
        <InfoBox text='Need a project done or looking for a dev ? i`m just a few keystrokes away' link='/contact' btnText='Let`s talk' />
    )
}



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo