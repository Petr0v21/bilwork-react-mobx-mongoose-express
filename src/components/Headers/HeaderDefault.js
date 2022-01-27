import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderDefault = () => {
    return (
        <div className="HeaderDefault">
            <NavLink to="/" >
            <div className="NameCompanyHeader">
                <h2>BILWORK</h2>
                <h3>COMPANY</h3>
            </div>
            </NavLink>
        </div>
    );

};
export default HeaderDefault;