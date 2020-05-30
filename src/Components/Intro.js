import React from 'react'
import image from '../Icons/spacethink.png'

export default function Intro(props) {
    const { heading, body } = props;
    return (
        <div className="Intro">
            <img className="Intro__img" src={image} 
                alt="girl with glasses sitting and facing to the right, a space background behind her head" />
            <div className="Intro__text">
                <div className="Intro__text-head">{heading}</div>
                <div className="Intro__text-body">{body}</div>
            </div>
        </div>
    )
}
