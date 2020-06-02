import React from 'react'
import Clang from '../Icons/lang/Clang'
import Javascript from '../Icons/lang/Javascript'
import Javasvg from '../Icons/lang/Javasvg'
import Python from '../Icons/lang/Python'
import Mongodb from '../Icons/lang/Mongodb'
import Postqresql from '../Icons/lang/Postgresql'
import Reactsvg from '../Icons/lang/Reactsvg'

function tooling(tools) {
    let buffer = []
    for (const entry of tools) {
        switch (entry) {
            case "c": buffer.push(<div title="C" className="svgicon"><Clang /></div>);
                break;
            case "js": buffer.push(<div title="Javascript" className="svgicon"><Javascript/></div>);
                break;
            case "py": buffer.push(<div title="Python" className="svgicon"><Python /></div>)
                break;
            case "react": buffer.push(<div title="React" className="svgicon"><Reactsvg /></div>);
                break;
            case "mongo": buffer.push(<div title="MongoDB" className="svgicon"><Mongodb /></div>);
                break;
            case "postgre": buffer.push(<div title="PostgreSQL" className="svgicon"><Postqresql /></div>);
                break;
            case "java": buffer.push(<div title="Java" className="svgicon"><Javasvg /></div>);
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
            <p className="PUnit__hint">technologies/languages used (hover over for names)</p>
            {tooling(tools)}
            <p className="PUnit__text">{desc}</p>
            <a className="PUnit__link" href={url}>See it in action ></a>
        </div>
    )
}
