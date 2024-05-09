import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './SalesAccounting.css'
import { BsCheckLg } from "react-icons/bs";
import row1 from "../../assets/row1 sales accounting.png";
import row2 from "../../assets/row2 sales accounting.png";
import row3 from "../../assets/row3 sales accounting.png";
import row4 from "../../assets/row4 sales accounting.png";
import thumbsUp from '../../assets/accounting/thumbsUp Accounting.svg'
import calendar from '../../assets/icons/calendar header.svg'
import person from '../../assets/icons/person header.svg'
import award from '../../assets/accounting/award sales accounting.svg'
import Header1 from '../../components/header1/Header1';
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import ToggleLine from '../../components/toggle_line/Toggle_line';
import BTTButton from "../../components/BTTButton/BTTButton";

const SalesAccounting = () => {
    return (
        <>
             <Navbar />
            <Header1 span="La comptabilité" title=" en toute simplicité" paragraph="Un traitement des salaires et une comptabilité des salaires optimisés pour les indépendants, les petites entreprises et les startups suisses" icon1={person} icon2={thumbsUp} icon3={calendar} icon4={award} cardTitle1="Personnalisé" cardTitle2="Simple" cardTitle3="Clair" cardTitle4="Certifié" text1="Configurez la comptabilité salariale en fonction de vos besoins." text2="Effectuez la déclaration et le décompte des salaires en toute sérénité." text3="Toute la comptabilité salariale dans un logiciel en ligne." text4="Certifié Swissdec et ELM – un programme de gestion des salaires conforme aux normes les plus élevées." span2="Faji et la comptabilité des salaires :" title2=" comment ça marche?" paragraph2="Une solution simple et intuitive pour les indépendants, les petites entreprises et les startups suisses. Avec Faji, le traitement des salaires devient plus simple et plus professionnel. Découvrez les fonctionnalités qui vont faciliter votre travail au quotidien." />
            <div className="cards_sales">
                <Row className="green" title='Paramètres personnalisables et types de salaire flexibles' body="Faji s'adapte parfaitement à vos besoins — pour que vous puissiez traitez les salaires en toute sérénité." text1="Choisissez entre différents types de salaire (fixe, à l'heure, 13e salaire, etc.), données d'imposition à la source, frais, allocations pour enfant et plus encore." text2="Les cotisations de sécurité sociale (AVS, par exemple) sont calculées automatiquement. Enregistrez toutes les données d'assurance en cas d'accident et d'indemnités journalières." text3="Pour chaque employé, toutes les modifications peuvent être consultées sur une timeline: celle-ci vous permet de suivre facilement les changements passés et de prévoir ceux à venir." img={row1} />
                <RowRev className="blue" title="Fiches de salaire et certificats de salaire en toute simplicité" body="Nous avons optimisé le traitement des salaires dans Faji de manière à vous faciliter la tâche." text1="La comptabilité des salaires est liée à la comptabilité financière et à l'e-banking: réglez et comptabilisez facilement les salaires en quelques étapes seulement, sans rapprochement supplémentaire." text2="Envoyez les fiches de salaire mensuelles et les certificats de salaire annuels à vos employés par e-mail en quelques clics." text3="Exportation de rapports et de certificats de salaire groupés." img={row2} />

                <Row className="green" title="Exportation de rapports et de certificats de salaire groupés." body="Toute la comptabilité des salaires dans un seul logiciel – pour avoir toutes les données importantes sous les yeux, à tout moment." text1="Donnez à votre fiduciaire un accès gratuit à votre compte Faji pour une collaboration optimale." text2="Avec Faji, la comptabilité des salaires s'effectue en quelques clics et en toute simplicité." text3="Nous nous chargeons d'effectuer lessauvegardes régulières et les mises à jour logicielles gratuites afin que vous puissiez vous concentrer sur l'essentiel." img={row3} />
                <RowRev1 className="blue" title="Un logiciel certifié et les normes les plus élevées" body="Certifié Swissdec et ELM, conforme aux normes les plus élevées – pour un traitement des salaires facile, clair et efficace." text1="La comptabilité des salaires de Faji est certifiée Swissdec: elle répond ainsi aux normes légales relatives à l'échange de toutes les données salariales pertinentes par voie électronique entre les entreprises, les administrations et les assureurs concernés." text2="Procédure unifiée de communication des salaires (ELM)." text3="Des modules de texte personnalisables (introduction et texte final) sont disponibles en plusieurs langues." img={row4} />
            </div>
            <div className="faq">
            <h2>FAQ : Les réponses à toutes vos questions concernant la comptabilité des salaires</h2>
            <ToggleLine title="En quoi consiste la comptabilité des salaires?" details="La comptabilité des salaires est l'un des éléments de la comptabilité. Comme son nom l'indique, elle traite des salaires et des bulletins de salaire. Retrouvez davantage d'informations concernant les salaires, les certificats de salaire et le calcul des salaires sous les liens respectifs."  />
            <ToggleLine title="Je n'ai pas le temps de configurer ma comptabilité salariale. Proposez-vous une assistance dans ce domaine?" details="Nous vous proposons un service d'aide à la configuration afin de vous assister au mieux. N'hésitez pas à nous contacter par téléphone (+41 71 552 00 61) ou par e-mail (contact@faji.com.tn). Nous serons ravis de pouvoir vous assister"  />
            <ToggleLine title="Est-il possible d'effectuer soi-même sa comptabilité salariale?" details="Vous pouvez tout à fait tenir vous-même votre comptabilité générale et la comptabilité des salaires. Avec un logiciel tout-en-un comme Faji, vous n'avez rien à craindre. Vous pouvez également faire effectuer l'ensemble des travaux comptables par un fiduciaire ou faire appel à lui en cas d'incertitudes spécifiques. Vous évitez ainsi des échanges complexes et chronophages avec les autorités fiscales. Avec Faji, vous avez la possibilité d'autoriser votre fiduciaire à accéder à votre comptabilité. Donnez-lui un accès en ligne en quelques clics. Votre collaboration s’en trouvera ainsi simplifiée et optimisée. Vous trouverez plus d'informations à ce sujet dans cet article d’aide."  />
            <ToggleLine title="Qu'est-ce que l'ELM et comment fonctionne-t-elle?" details="La déclaration électronique des salaires (ELM pour «Einheitliches Lohnmeldeverfahren») peut vous faire gagner un temps considérable lors de la transmission des données salariales à l’AVS, l’assurance-accidents ou aux administrations fiscales.Les logiciels de traitement de la paie certifiés Swissdec tels que Faji peuvent préparer les données pour les différents destinataires de manière autonome.Vous devez simplement saisir les données des destinataires dans la comptabilité des salaires de Faji. Après le dernier traitement des salaires précédant la livraison des données, cliquez sur les destinataires souhaités et transférez les données.Une fois la transmission effectuée, vous recevrez un accusé de réception avec le récapitulatif des documents envoyés. Ceux-ci sont vérifiés par l'assurance et acceptés ou refusés. Le cas échéant, des corrections peuvent également être effectuées sur les données avant une nouvelle transmission.Vous trouverez plus d'informations à ce sujet dans cet article d’aide."  />
            
        </div>
        <Testimonials title="Ce que disent " span="nos clients"/>
            <Ratingswhitebg/>
            <Test/>
            <p className='sales_contact'>Avez-vous encore des questions  ? Appelez-nous : +216 71 808 862 <br />Si vous préférez nous écrire: contact@faji.com.tn </p>
            
            <BTTButton/>

            <Footer />

       
        </>
    );
}

export default SalesAccounting;

const Row = ({ className, title, body, text1, text2, text3, img }) => {
    return (
        <div className="row_normal">
            {" "}
            <div className="row_normal_img">
                <div className={className}></div>
                <div className='photo_sales_start'>
                    <img src={img} alt="img" className="photo_sales_start_img"/>
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
const RowRev = ({ className, title, body, text1, text2, text3, text4, text5, img }) => {
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
                    <img src={img} alt="img" className="row_reverse_imgg"/>
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
                    <img src={img} alt="img" className="row_reverse_imgg"/>
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


