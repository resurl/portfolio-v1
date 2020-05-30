import React from 'react'
import BigHero from '../Icons/BigHero'
import MobileHero from '../Icons/MobileHero'
import Navigation from './Navigation'

export default function Header() {
    return (
        <div className="Header">
            <BigHero />
            <MobileHero />
            <div className="Header__text">
                <p className="Header__text-head">Leanna Resurreccion</p>
                <p className="Header__text-body">computer science student</p>
            </div> 
            <Navigation />
        </div>
    )
}
