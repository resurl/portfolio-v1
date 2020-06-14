import React from 'react'
import Github from '../Icons/Github'
import Linkedin from '../Icons/Linkedin'

export default function Contact() {
    return (
        <div className="Contact" id="Contact">
            <p className="Contact__header">Interested in working together? Let's talk!</p>
            <a href="mailto:leanna.resurreccion@gmail.com" className="Contact__button">Email</a>
            <div className="Contact__social">
                <a href="github.com/resurreccionl"><Github fill="#65507E" /></a>
                <a href="https://www.linkedin.com/in/leanna-resurreccion-b3b54a130/"><Linkedin fill="#65507E"/></a>
            </div>
        </div>
    )
}
