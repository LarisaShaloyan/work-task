
import React from 'react';
import './SmartWallSection.css'
function SmartWall({children}) {
    return (
        <div className="SmartWall">
            {children}
        </div>
    );
}

export default SmartWall;