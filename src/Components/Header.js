import React from 'react'
import BigHero from '../Icons/BigHero'
import MobileHero from '../Icons/MobileHero'
import Navigation from './Navigation'
import Leftblob from '../Icons/Leftblob'
import Rightblob from '../Icons/Rightblob'
import Middleblob from '../Icons/Middleblob'

export default function Header() {
    return (
        <div className="Header">
            <div className="Header__blobs">
                <Leftblob />
                <Middleblob />
                <Rightblob />
            </div>
            <a className="Header__blobs-home" href="/">LR</a>
            <div className="wrapper">
                <BigHero />
                <MobileHero />
                <div className="Header__text">
                    <p className="Header__text-head">Leanna Resurreccion</p>
                    <p className="Header__text-body">computer science student</p>
                </div>
            </div>
            <Navigation />
        </div>
    )
}
