import React from 'react'

import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Programs  from './components/programs/programs.jsx'
import Title from './components/title/title.jsx'
import Campus from './components/campus/campus.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contactus from './components/contactus/contactus.jsx'
import Footer from './components/footer/footer.jsx'

const App = () =>  {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'OUR PROGRAMS' title = 'What we offers'/>
      <Programs/>
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title = 'What Students Says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title = 'Get in touch'/>
      <Contactus/>
      <Footer/> 
      </div>
    </div>
  )
}

export default App;