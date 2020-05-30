import React from 'react'

export default function PUnit(props) {
    const { desc, tools, url } = props
    return (
        <div className="PUnit">
            <p>{desc}</p>
            <a href={url}>See it in action ></a>
        </div>
    )
}
