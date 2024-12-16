import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import './index.css'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import ContactForm from '../components/ContactUs'


function App() {
const about ="about"
const skills="skills"
  return (
    <>
    <Home id={skills} skills={skills} />
    <About id={about} />
    <Skills id={skills}  />
    <Projects />
    <ContactForm />

    </>
  )
}

export default App