import React from 'react'
import Clang from '../Icons/lang/Clang'
import Javascript from '../Icons/lang/Javascript'

function tooling(tools) {
    let buffer = []
    for (const entry of tools) {
        switch (entry) {
            case "c": buffer.push(<div><Clang /></div>);
                break;
            default:
                break;
        }
    }
    return (<div className="tools">{buffer}</div>)
}

export default function PUnit(props) {
    const { desc, tools, url } = props
    return (
        <div className="PUnit">
            {tooling(tools)}
            <p className="PUnit__text">{desc}</p>
            <a className="PUnit__link" href={url}>See it in action ></a>
        </div>
    )
}
