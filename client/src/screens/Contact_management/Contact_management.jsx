import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Contact_management.css'
import { BsCheckLg } from "react-icons/bs";
import row1 from "../../assets/images/row1 management.png";
import row2 from "../../assets/images/row2 management.png";
import row3 from "../../assets/images/row3 management.png";
import row4 from "../../assets/images/row4 management.png";
import bag from '../../assets/icons/bag header.svg'
import person from '../../assets/icons/person header.svg'
import cloud from '../../assets/icons/cloud header.svg'
import Header1 from '../../components/header1/Header1';
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import ToggleLine from '../../components/toggle_line/Toggle_line';

import BTTButton from "../../components/BTTButton/BTTButton";

const ContactManagement = () => {
    return (
        <>
            <Navbar/>
            <Header1 span="Gestion des contacts" title=" – Votre CRM personnel" paragraph="Une gestion professionnelle des contacts et des clients pour votre entreprise" icon1={person} icon2={bag} icon3={bag} icon4={cloud} cardTitle1="Personnalisé" cardTitle2="Clair" cardTitle3="Simple" cardTitle4="Flexible" text1="Filtrez vos contacts selon vos besoins et regroupez-les par secteurs d'activité, par langues ou en fonction de paramètres personnalisables." text2="Ajoutez des notes et des contrats à vos contacts et profitez d'une bonne vue d'ensemble pour chacun d'eux." text3="Importez et exportez facilement vos contacts existants." text4="Accédez à tout moment aux adresses de vos contacts en ligne grâce au cloud." span3="Faji" title2=" La gestion des contacts avec " paragraph2="Un logiciel de gestion des contacts et des clients constitue la base de votre entreprise. Avec Faji, tout devient à la fois plus simple et plus professionnel. Découvrez les fonctionnalités pratiques qui vont vous faciliter le travail au quotidien." />
            <div className="cards_management">
                <Row className="green" title='Personnalisez vos contacts' body="Configurez la gestion des contacts en fonction de vos besoins." text1='Créez des catégories spécifiques et définissez des interlocuteurs dédiés pour chaque contact.' text2="Catégorisez vos contacts en fonction du secteur d'activité, de la langue ou d'un groupe librement définissable («Clients réguliers», par exemple)." text3="Vue de liste avec vos propres filtres (catégorie ou interlocuteur, par exemple)."  img={row1} />
                <RowRev className="blue"  title="Une vue d'ensemble à tout moment" body="Toutes les informations relatives à vos contacts, fournisseurs et partenaires en un coup d'œil." text1="L'ensemble des projets, offres, factures, avoirs, impayés, etc. sont visibles pour chaque contact." text2="Les informations enregistrées dans vos contacts sont récupérées automatiquement dans le processus de vente (e-mail, adresse postale ou langue, par exemple)." text3="Ajoutez directement des contrats et des notes ou des remarques à vos contacts." img={row2} />
                <Row className="green" title='Simple et efficace' body="Avec Faji, vous travaillez facilement et gagnez du temps grâce à une optimisation des processus." text1='Vos contacts existants peuvent être importés en quelques clics depuis Excel ou exportés depuis Faji si nécessaire.' text2="Les informations associées à vos contacts sont récupérées automatiquement dans le processus de vente (e-mail, adresse postale ou langue, par exemple)." text3="Enregistrez des documents dans vos contacts (contrats ou rappels par exemple) afin de ne rien oublier à l'étape des ventes."  img={row3} />
                <RowRev1 className="blue"  title="Une gestion flexible de vos contacts" body="Faji vous permet de travailler de manière flexible, que vous soyez au bureau ou en déplacement." text1="Accédez à tout moment aux adresses de vos contacts en ligne grâce au cloud." text2="Oubliez les contraintes avec l'application «Faji Go»."  img={row4} />
            </div>
            <div className="faq">
            <h2>FAQ: Questions/Réponses concernant la gestion des contacts</h2>
            <ToggleLine title="Quels sont les avantages de la gestion des contacts avec un logiciel CRM comme Faji ?" details="Un logiciel CRM (Customer Relationship Management) va permettre à votre entreprise de gagner en efficacité. Faji est parfaitement adapté aux besoins des petites entreprises suisses. Pour une vue d’ensemble optimale de votre entreprise et une fidélité client renforcée. En savoir plus."  />
            <ToggleLine title="Quels sont les avantages de la gestion des contacts avec un logiciel CRM comme Faji ?" details="Il n'y a aucun problème de compatibilité. Tenez votre comptabilité sur Mac en toute simplicité et profitez des processus automatisés. Accédez facilement au logiciel de comptabilité en ligne à l’aide de votre navigateur, quel que soit l’appareil Apple que vous utilisez! En savoir plus."  />
            <ToggleLine title="Est-il possible d'utiliser la gestion des contacts avec l'application Faji Go sur mon smartphone Android ?" details="Bien sûr! Vous pouvez facilement gérer vos contacts sur votre Smartphone, même lorsque vous êtes en déplacement. Vous trouverez l'application Faji Go dans le Google Play Store tout comme dans l'App Store d'Apple. En savoir plus. Retrouvez de nombreux conseils et informations utiles sur notre portail d'assistance."  />
            
        </div>
            
        <Testimonials title="Ce que disent " span="nos clients"/>
            <Ratingswhitebg/>
            <Test/>      <BTTButton/>

            <Footer/>
            

        </>
    );
}

export default ContactManagement;


const Row = ({ className, title, body, text1, text2, text3, img }) => {
    return (
        <div className="row_normal">
            {" "}
            <div className="row_normal_img">
                <div className={className}></div>
                <div className='photo_sales_start'>
                    <img src={img} alt="img" />
                </div>
            </div>
            <div className="row_normal_lines">
                <h2>
                    <span>{title}</span>
                </h2>
                <h3>{body}</h3>
                <Line className="line_normal" text={text1} />
                <Line className="line_normal" text={text2} />
                <Line className="line_normal" text={text3} />
                
            </div>
        </div>
    );
};
const RowRev = ({ className, title, body, text1, text2, text3, img }) => {
    return (
        <div className="row_reverse">
            <div className="row_reverse_lines">
                <h2>
                    <span>{title}</span>
                    
                </h2>
                <h3>{body}</h3>
                <Line className="line_reverse" text={text1} />
                <Line className="line_reverse" text={text2} />
                <Line className="line_reverse" text={text3} />
            </div>
            <div className="row_reverse_img">
                <div className={className}></div>
                <div>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};
const RowRev1 = ({ className, title, body, text1, text2, img }) => {
    return (
        <div className="row_reverse">
            <div className="row_reverse_lines">
                <h2>
                    <span>{title}</span>
                    
                </h2>
                <h3>{body}</h3>
                <Line className="line_reverse" text={text1} />
                <Line className="line_reverse" text={text2} />

            </div>
            <div className="row_reverse_img">
                <div className={className}></div>
                <div>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};
const Line = ({ text, className }) => {
    return (
        <div className={className}>
            <div className="tic_wrapper1">
                <div className="tic1">
                    <BsCheckLg className="tic_icon1" />
                </div>
            </div>
            <div className="line_text1">
                <h4>{text}</h4>
            </div>
        </div>
    );
};
