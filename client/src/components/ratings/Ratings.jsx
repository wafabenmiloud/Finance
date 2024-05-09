import React from "react";
import './ratings.css';
import star from '../../assets/icons/Star.svg'
import halfStar from '../../assets/icons/half star.png'

const Ratings = () => {
    return(
        <div className="rating">
            <h3>Vous aussi, faites confiance à <span style={{color:'#25A7FF'}}> Faji</span>, comme plus de 60'000 entreprises <br /> suisses satisfaites  .</h3>
            <div className="rating_flex">
            <div className="score">
                <p className="number">4,5</p>
                <p>sur plus de 1150 Google commentaires</p>

            </div>
            <div className="stars">
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img className="half" src={halfStar} alt="img" />

            </div>
            </div>
        </div>
    )
}
export default Ratings;