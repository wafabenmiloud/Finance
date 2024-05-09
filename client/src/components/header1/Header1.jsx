import React from 'react';
import './Header1.css';
import arrowDown from '../../assets/images/arrow down header.svg'



const Header1 = ({title,span,paragraph,icon1,icon2,icon3,icon4,cardTitle1,cardTitle2,cardTitle3,cardTitle4,text1,text2,text3,text4,title2,paragraph2,span2,span3})=> {
    return (
        <>
        <div className="header1">
            <div className="header1_test">
                <h1><span style={{color:'#25A7FF'}}>{span}</span>{title}</h1>
                <p>{paragraph}</p>
                <a href="/" className='header1_btn'>Testez gratuitement</a>
            </div>
            <div className="header1_advantages">
                <h2>Vos avantages <img src={arrowDown} alt="img" /></h2>
                <div className="header1_cards">
                    <div className="header1_card">
                        <img alt="img" src={icon1} className="header1_card_icon"></img>
                        <h3>{cardTitle1}</h3>
                        <p>{text1}</p>
                    </div>
                    <div className="header1_card">
                        <img alt="img" src={icon2} className="header1_card_icon"></img>
                        <h3>{cardTitle2}</h3>
                        <p>{text2}</p>
                    </div><div className="header1_card">
                        <img alt="img" src={icon3} className="header1_card_icon"></img>
                        <h3>{cardTitle3}</h3>
                        <p>{text3}</p>
                    </div><div className="header1_card">
                        <img alt="img" src={icon4} className="header1_card_icon"></img>
                        <h3>{cardTitle4}</h3>
                        <p>{text4}</p>
                    </div>
                </div>
                
            </div>
            <div className="header1_question">
                <h2> <span style={{color:'#25A7FF'}}>{span2}</span>{title2}<span style={{color:'#25A7FF'}}>{span3}</span></h2>
                <p>{paragraph2}</p>
            </div>
        </div>
        </>
    )
}
export default Header1;