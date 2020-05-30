import React from 'react';
import Header from './Components/Header'
import Intro from './Components/Intro'
import Projects from './Components/Projects'
import './Styles/main.css';
import './App.css';
import data from './Components/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro heading={data.introHead} body={data.introBody} />
      <Projects />
    </div>
  );
}

export default App;
