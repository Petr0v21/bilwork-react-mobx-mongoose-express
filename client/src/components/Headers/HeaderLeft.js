import React from 'react';
import Choose from '../LinksToOffice/Choose';

const HeaderLeft = () => {
    return(
        <div className="HeaderText">
            <div className="Title">
                <h1>BILWORK</h1><h2>COMPANY</h2>
            </div>
            <div className="Slogan">
                <h2>№1 Трудовая биржа в Украине</h2>
            </div>
            <div className="WhyWe">
                <label>
                ИЩЕТЕ ТОГО КТО СДЕЛАЕТ РЕМОНТ?
                <br />ТОГДА ПЕРЕХОДИТЕ НИЖЕ И ВЫБИРАЙТЕ ТОГО КТО ВОПЛОТИТ ВАШИ ЖЕЛАНИЯ В ЖИЗНЬ
                </label>
            </div>
            <div>
                <Choose />
            </div>

        </div>
    );
};
export default HeaderLeft;