import React from 'react';
import './ProductsUpdates.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BTTButton from "../../components/BTTButton/BTTButton";


const ProductsUpdates = () => {
    return (
        <>
        <Navbar/>
            <div className="products_updates">
                <h1>UPDATE-NEWS</h1>
                <h2>Update-News 2023: Nouvelles mises à jour</h2>
                <p>13065 Vues</p>
                <h2>Update News 2020: Nouvelles mises à jour</h2>
                <p>768 Vues</p>
                <h2>Update News 2020: Nouvelles mises à jour</h2>
                <p>768 Vues</p>
                <h2>Update News 2020: Nouvelles mises à jour</h2>
                <p>768 Vues</p>
               
            </div>      <BTTButton/>

            <Footer/>
        </>
    );
}

export default ProductsUpdates;
