import React from "react";
import './Ratings_white_bg.css';
import star from '../../assets/icons/Star.svg'
import halfStar from '../../assets/icons/half star.png'

const Ratings_white_bg = () => {
    return(
        <div className="rating_wbg">
            <h3>Vous aussi, faites confiance à <span style={{color:'#25A7FF'}}> Faji</span>, comme plus de 60'000 entreprises <br /> suisses satisfaites  .</h3>
            <div className="rating_wbg_flex">
            <div className="score_wbg">
                <p className="number_wbg">4,5</p>
                <p>sur plus de 1150 Google commentaires</p>

            </div>
            <div className="stars_wbg">
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img src={star} alt="img" />
                <img className="half_wbg" src={halfStar} alt="img" />

            </div>
            </div>
        </div>
    )
}
export default Ratings_white_bg;