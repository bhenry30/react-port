import React from 'react';

function NavButtons({ currentPage, handlePageChange }) {
return (
    <div className = 'nav-buttons'>
        <button type="button" onclick={handlePageChange('About')}>About</button>
        <button type="button" onclick={handlePageChange('Work')}>About</button>
        <button type="button" onclick={handlePageChange('Contact')}>About</button>
    </div>
)
}

export default NavButtons