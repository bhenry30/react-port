import React from 'react';

function NavButtons({ handlePageChange }) {
return (
    <div className = 'nav-buttons'>
        <button type="button" onclick={() => handlePageChange('About')}>About</button>
        <button type="button" onclick={() => handlePageChange('Work')}>Work</button>
        <button type="button" onclick={() => handlePageChange('Contact')}>Contact</button>
    </div>
)
}

export default NavButtons