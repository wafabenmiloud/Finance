import React from 'react';
import './JobDetails.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import arrow from "../../assets/qui_arrow.png";
import BTTButton from "../../components/BTTButton/BTTButton";
import { Link } from "react-router-dom";



const JobDetails = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); 
      };
    return (
        <>
            <Navbar />
            <div className="jobDetails">
                <h1>Web Analyst 80 - 100%</h1>
                <a href="/">Postuler maintenant</a>
                <div className="jobDetails_text">
                    <div className="jobDetails_text_header">
                        <h3>Volume de travail: 80-100%</h3>
                        <h4>Lieu du travail: Rapperswil, St. Gallen, CH</h4>
                    </div>
                    <p>Every day we work hard to make small business owners more successful. Sounds ambitious? It is. That's why we need your help. Our philosophy is that every business can afford high-quality, efficient software solutions. That's why Faji is the leading provider of web-based business software for small businesses in Switzerland. We are continuing to expand. Currently, Faji has over 60,000 customers and more than 150 employees and the number is growing. In order to grow further, we need active support! Become a part of our young, creative team at Lake Zurich and benefit from more fun at work and a lot of creative freedom. We are looking for</p>
                    <hr />
                    <h5>What you can expect from us:</h5>
                    <ul>
                        <li>You are the central contact for website analyses, Google Analytics and Google Tag Manager.</li>
                        <li>You are responsible for the operation, optimization and expansion of our website analysis tools (Google Analytics, GTM, Big Query, etc.)</li>
                        <li>You ensure error-free website tracking and you constantly develop it further.</li>
                        <li>You enjoy targeted web and customer journey analyses and you like to create reports, dashboards and one-time analyses to convey insights and action recommendations in an easy-to-understand way (data storytelling).</li>
                        <li>You analyze and interpret A/B tests and support the planning and execution of conversion optimization measures (CRO).</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                    </ul>
                    <hr />
                    <h5>What we expect from you:</h5>
                    <ul>
                        <li>You are the central contact for website analyses, Google Analytics and Google Tag Manager.</li>
                        <li>You are responsible for the operation, optimization and expansion of our website analysis tools (Google Analytics, GTM, Big Query, etc.)</li>
                        <li>You ensure error-free website tracking and you constantly develop it further.</li>
                        <li>You enjoy targeted web and customer journey analyses and you like to create reports, dashboards and one-time analyses to convey insights and action recommendations in an easy-to-understand way (data storytelling).</li>
                        <li>You analyze and interpret A/B tests and support the planning and execution of conversion optimization measures (CRO).</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                    </ul>
                    <hr />
                    <h5>Our benefits:</h5>
                    <ul>
                        <li>You are the central contact for website analyses, Google Analytics and Google Tag Manager.</li>
                        <li>You are responsible for the operation, optimization and expansion of our website analysis tools (Google Analytics, GTM, Big Query, etc.)</li>
                        <li>You ensure error-free website tracking and you constantly develop it further.</li>
                        <li>You enjoy targeted web and customer journey analyses and you like to create reports, dashboards and one-time analyses to convey insights and action recommendations in an easy-to-understand way (data storytelling).</li>
                        <li>You analyze and interpret A/B tests and support the planning and execution of conversion optimization measures (CRO).</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                        <li>You are open to collaborating with internal and external stakeholders and enjoy working in interdisciplinary project teams.</li>
                    </ul>
                    <hr />
                    <h5>What else you can expect from us:</h5>
                    <p>We are a young dynamic company that works together as a team to make a great product even better. We are the right place for you if you want to work on this ideology with us in a lively startup atmosphere and if you love the web and its possibilities. With us, there is room to develop personally and professionally in a positive work environment and to give your ideas the necessary freedom.</p>
                    <hr />
                    <p>This is a full-time, permanent position in beautiful Rapperswil SG, Switzerland. Hybrid work is possible. Sounds good? Apply now and we will contact you shortly.</p>
                </div>
                
            </div>
            <div className="jobdetails1">
            <div className="qui_equipe">
                    <div className="qui_equipe_content">
                        <h1>
                            Nous avons réussi à vous convaincre ? Vous aussi vous souhaitez
                            faire partie de l'équipe ?
                        </h1>
                        <p>Découvrez nos postes vacants !</p>
                        <button onClick={scrollToTop}> <Link style={{color:'white'}} to="/joblist" >Rejoindre l'équipe Faji </Link></button>
                    </div>
                    <div className="qui_equipe_arrow">
                        <img src={arrow} alt="img" />
                    </div>
                </div>
            </div>      <BTTButton/>

            <Footer />

        </>
    );
}

export default JobDetails;
