import './index.css';
import { useState } from 'react';
import './App.css'
import { ContentContext } from './context/ContentContext';
import { Content } from './model/Content';
import { Navigation } from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
function App() {
  const [content, setContent] = useState<Content>(Content.Home);

  const contextValues = {
    content,
    setContent
  }

  return (
    <ContentContext.Provider value={ contextValues }> 
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
    </ContentContext.Provider>
  )
}

export default App
