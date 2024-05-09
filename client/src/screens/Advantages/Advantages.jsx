import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Test from '../../components/test/Test';
import Advantages from '../../components/advantages/Advantages';
import Ratings from '../../components/ratings/Ratings';
import BTTButton from "../../components/BTTButton/BTTButton";

export default function AdvantagesScreen()  {
    return (
        <>
            <Navbar/>
            <Advantages/>
            <Ratings/>
            <Test/>
            <BTTButton/>

            <Footer/>
        </>
    );
}