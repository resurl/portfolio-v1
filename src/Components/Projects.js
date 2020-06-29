import React from 'react'
import PUnit from './PUnit'
import data from './data'
import spaceinvaders from '../Icons/spaceinvaders.png'
import yanniebot from '../Icons/yanniebot.png'
import tigermom from '../Icons/tigermom.png'

const emu = data.projects[0]
const yannie = data.projects[1];
const tiger = data.projects[2];

export default function Projects() {

    return (
        <div className="Projects" id="Projects">
            <p className="Projects__head">projects</p>
            <div className="Projects__section">
                <p className="Projects__section-head">{emu.title}</p>
                <div className="container">
                    <img className="Projects__section-img"
                        src={spaceinvaders} 
                        alt="screenshot of space invaders" />
                    <PUnit tools={emu.tools} desc={emu.description} url={emu.url} />
                </div>
            </div>
            <div className="Projects__section">
                    <p className="Projects__section-head">{yannie.title}</p>
                <div className="container">
                    <img className="Projects__section-img" 
                        src={yanniebot}
                        alt="screenshot of a discord server"
                        />
                    <PUnit tools={yannie.tools} desc={yannie.description} url={yannie.url} />
                </div>
            </div>
            <div className="Projects__section">
                    <p className="Projects__section-head">{tiger.title}</p>
                <div className="container">
                    <img className="Projects__section-img" 
                        src={tigermom}
                        alt="various rectangular widgets displaying data such as course number, time elapsed, graphs relating to alertness, etc."
                        />
                    <PUnit tools={tiger.tools} desc={tiger.description} url={tiger.url} />
                </div>
            </div>
        </div>
    )
}
