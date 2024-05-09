import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Test from '../../components/test/Test';
import Ratings from '../../components/ratings/Ratings';
import Pricing from '../../components/pricing/Pricing';
import BTTButton from "../../components/BTTButton/BTTButton";


export default function PricingScreen()  {
    return (
        <>
            <Navbar/>
            <Pricing/>
            <Ratings/>
            <Test/>      <BTTButton/>

            <Footer/>
        </>
    );
}