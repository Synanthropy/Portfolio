import { useState } from 'react'
import './App.css'
import Header from './comps/Header'
import Landing from './comps/Landing'
import Skills from './comps/Skills'
import Projects from './comps/projects'
import SideQuests from './comps/SideQuests'
import Contact from './comps/Contact'


function Homepage() {

  return (
    <div>
    <div className='home'>
      <Header/>
      <Landing/>
      <Skills/>
      <Projects/>
      <SideQuests/>
    </div>
      <Contact/>
    </div>
  )
}

export default Homepage
