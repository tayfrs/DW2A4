import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import React from 'react'

function App() {
  return (
    <Router>
    <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
