import './index.css';
import { useState } from 'react';
import './App.css'
import { ContentContext } from './context/ContentContext';
import { Content } from './model/Content';
import type { ContentType } from './model/Content';
import { Navigation } from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Socials from './components/socials/Socials';
import Logo from './components/logo/Logo';

function App() {
  const [content, setContent] = useState<ContentType>(Content.Home);

  const contextValues = {
    content,
    setContent
  }

  return (
    <ContentContext.Provider value={ contextValues }> 
      <Logo />
      <Navigation />
      {
        content === Content.Home && <Home />
      }
      {
        content === Content.About && <About />
      }
      {
        content === Content.Projects && <Projects />
      }
      {
        content === Content.Contact && <Contact />
      }
      <Socials />
    </ContentContext.Provider>
  )
}

export default App
