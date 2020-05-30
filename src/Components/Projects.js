import React from 'react'
import PUnit from './PUnit'
import data from './data'
import spaceinvaders from '../Icons/spaceinvaders.png'

const emu = data.projects[0]

export default function Projects() {

    return (
        <div className="Projects" id="Projects">
            <p className="Projects__head">projects</p>
            <div className="Projects__section">
                <p className="Projects__section-head">{emu.title}</p>
                <img className="Projects__section-img"
                    src={spaceinvaders} 
                    alt="screenshot of space invaders" />
                <PUnit tools={emu.tools} desc={emu.description} url={emu.url} />
            </div>
        </div>
    )
}
