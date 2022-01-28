import '../App.css';
import React from 'react';
import Header from '../components/Headers/HeaderMain';
import Motive from '../components/TextMain/Motiv';
import Categories from '../components/CategoriesLinks/Categories';
import Contacts from '../components/Footers/Contacts';
import Footer from '../components/Footers/Footer';


function Main() {
    return (
      <div className="App">
        <Header />
        <Motive />
        <Categories />
        <Contacts />
        <Footer />
      </div>   
    );
}

export default Main;
