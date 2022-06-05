import React, { useState } from 'react';
import NavButtons from './NavButtons';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Welcome from './pages/Welcome';

function Container() {
    const [currentPage, setCurrentPage] = useState('Welcome')

    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Work') {
            return <Work />
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
    <div className="hero">
        <div className="nav"><NavButtons currentPage={currentPage} handlePageChange={handlePageChange} /></div>
        <div className='card-container'>
                    {renderPage()}
        </div>
    </div>
    )
}

export default Container
