import React, { useState } from 'react';
import Hero_section from './components/Hero_section'
import About from './components/About'
import Event from './components/Event'
import Team from './components/Team'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Form from './components/Form'
import Login from './components/Login'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin && <Login onclose={()=>setShowLogin(false)} />}
      {showForm && <Form onCancelClick={() => setShowForm(false)} />}
      <Hero_section onlogin={()=>setShowLogin(true)} onRegisterClick={()=>setShowForm(true)}/>
      <About onRegisterClick={()=>setShowForm(true)}/>
      <Event onRegisterClick={() => setShowForm(true)} />
      <Faq />
      <Team />
      <Contact />
      <Footer />
      <Banner onRegisterClick={() => setShowForm(true)}/>
    </div>
  )
}

export default App
