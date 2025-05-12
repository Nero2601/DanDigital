import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Function to handle page navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <>
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
      <Footer navigateTo={navigateTo} />
    </>
  )
}

export default App