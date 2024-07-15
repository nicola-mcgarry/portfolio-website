import Home  from './components/home/Home'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import CodeStack from './components/CodeStack'

function App() {
  
  return (
    <>
      <div className="colorBlobPink"></div>
      <div className="colorBlobGreen"></div>
      <Header/>
      <Home />
      <CodeStack />
      <About/> 
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
