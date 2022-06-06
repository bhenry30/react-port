import React, { useState } from 'react';
import NavButtons from './NavButtons';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Welcome from './Welcome';

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
        <div className="nav"><NavButtons currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </div>
                    {renderPage()}
        <div className='card-container'>
        </div>
    </div>
    )
}

export default Container
