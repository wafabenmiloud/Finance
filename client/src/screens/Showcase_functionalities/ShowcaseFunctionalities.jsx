import React from 'react';
import laptopImg from '../../assets/images/advantages laptop.png'
import './ShowcaseFunctionalities.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { BsCheckLg } from "react-icons/bs";
import row1 from "../../assets/accounting/row1 Accounting.png";
import row2 from "../../assets/accounting/row2 Accounting.png";
import row3 from "../../assets/accounting/row3 Accounting.png";
import row4 from "../../assets/accounting/row4 Accounting.png";
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import BTTButton from "../../components/BTTButton/BTTButton";

const ShowcaseFunctionalities = () => {
    return (
        <>
        <Navbar/>
            <div className="header1_question header1_question_showcase">
            
                <h2> <span style={{color:'#25A7FF'}}>Fonctions -</span> tout ce dont vous avez besoin pour votre entreprise</h2>
            
                <p>La solution pour tous ceux qui ont déjà passé trop de temps à faire de la comptabilité - plus de 60'000 clients sont déjà convaincus</p>
            </div>
            <div className="section1">
                <div className="text text_showcase">
                    <div className="rectangle"></div>
                    <h2>Mieux travailler avec  <span style={{color:'#25A7FF'}}> Faji</span></h2>
                    <p>Grâce à Faji, gérez l'ensemble des processus de votre PME de manière plus efficace et sécurisée et tirez pleinement profit de la digitalisation. Une solution tout-en-un: gestion des contacts, devis et facturation, e-banking intégré et gestion de projets (avec suivi des temps de travail). La comptabilité s'exécute en arrière-plan et tout est automatiquement enregistré sans risque d’erreur.</p>

                </div>
                <img className="image" src={laptopImg} alt="img" />
            </div>
            <div className="cards_management showcase_cards">
                <Row className="green" title="Dashboard - Toutes les données en un coup d'œil" body="Commencez votre journée en jetant un coup d'œil à votre tableau de bord personnalisé." text1='Tous les chiffres clés financiers importants.' text2="Vue d'ensemble des tâches en cours." text3="Accès facile à tout moment et où que vous soyez grâce au stockage sur le cloud."  img={row1} />
                <RowRev className="blue"  title="Gestion des contacts - Votre CRM personnel" body="La gestion des contacts idéale pour votre entreprise." text1="Importez facilement vos contacts." text2="Enregistrez des documents (contrats, etc.) dans vos contacts et ajoutez des rappels." text3="Créez des catégories spécifiques et définissez des interlocuteurs pour chaque contact." img={row2} />
                <Row className="green" title="Processus de vente - De l'offre à la facture" body="Devenez un professionnel de la vente et créez des offres et des factures en quelques clics à partir de vos produits et/ou services préenregistrés." text1='Calculez facilement vos taux horaires ou vos forfaits grâce au suivi des projets et à la saisie du temps de travail.' text2="Soignez votre image avec des documents au design personnalisable et des options multilingues." text3="Envoyez directement vos offres par e-mail."  img={row3} />
                <RowRev className="blue"  title="Gestion des dépenses - Un traitement optimal de vos dépenses et de vos pièces comptables" body="Personne n'aime payer ses factures! Mais avec le module d'achat de Faji, le traitement des factures est un jeu d'enfant." text1="Saisissez, comptabilisez et payez vos factures fournisseurs et vos dépenses en quelques clics." text2="Il vous suffit de sélectionner le bon compte de comptabilité, de définir la date d'échéance et d'associer les documents numérisés." text3="Avec notre application «Faji Go», vous pouvez scanner vos justificatifs et les régler directement dans notre module d'achat grâce à la facture QR."  img={row4} />
                <Row className="green" title='Comptabilité - Le bilan annuel simplifié' body="Effectuez le décompte de la TVA et votre bilan annuel en quelques clics." text1='Les factures entrantes et sortantes sont automatiquement comptabilisées avec les comptes de comptabilité et les taux de TVA enregistrés.' text2="Créez votre propre plan comptable afin que Faji s'adapte à vos besoins." text3="Déterminez rapidement les succès de votre entreprise à l'aide des rapports de comptabilité."  img={row1} />
                <RowRev className="blue"  title="Gestion des dépenses - Un traitement optimal de vos dépenses et de vos pièces comptables" body="Personne n'aime payer ses factures! Mais avec le module d'achat de Faji, le traitement des factures est un jeu d'enfant." text1="Saisissez, comptabilisez et payez vos factures fournisseurs et vos dépenses en quelques clics." text2="Il vous suffit de sélectionner le bon compte de comptabilité, de définir la date d'échéance et d'associer les documents numérisés." text3="Avec notre application «Faji Go», vous pouvez scanner vos justificatifs et les régler directement dans notre module d'achat grâce à la facture QR." img={row2} />
                <Row className="green" title='Comptabilité - Le bilan annuel simplifié' body="Effectuez le décompte de la TVA et votre bilan annuel en quelques clics." text1='Les factures entrantes et sortantes sont automatiquement comptabilisées avec les comptes de comptabilité et les taux de TVA enregistrés.' text2="Créez votre propre plan comptable afin que Faji s'adapte à vos besoins." text3="Déterminez rapidement les succès de votre entreprise à l'aide des rapports de comptabilité."  img={row1} />
                <RowRev2 className="blue"  title="Comptabilité des salaires - Optimisée pour les petites entreprises suisses" body="Grâce à la connexion de la comptabilité financière à votre e-banking, le traitement des salaires ne prend que quelques minutes." text1="Respectez toutes les exigences légales grâce à la solution de gestion des salaires certifiée Swissdec 4.0 et la «procédure uniforme de déclaration des salaires» (ELM) gratuite." text2="Gagnez du temps lors de la transmission des données aux compagnies d'assurance et à l'administration: les données sont déjà préparées de manière optimale pour les différents destinataires." img={row2} />
                <Row className="green" title='Banking - Rapprochement automatique avec votre compte bancaire' body="Gardez une vue d'ensemble des factures ouvertes et payées et oubliez la saisie manuelle." text1='Votre e-banking est connecté à Faji via des interfaces avec les principales banques suisses.' text2="Les ordres de paiement aux fournisseurs et les paiements des salaires sont transmis directement à votre e-banking depuis Faji." text3="Quant aux paiements entrants, ils sont automatiquement rapprochés des factures ouvertes."  img={row1} />
                <RowRev1 className="blue"  title="Extensions - pour tous vos besoins spécifiques" body="En fonction du package sélectionné, nous vous proposons des fonctionnalités et des extensions utiles qui faciliteront votre travail au quotidien." span1="Boutique en ligne: " span2="Suivi des temps de travail: " span3="Gestion des stocks: " span4="Renseignements jridiques par téléphone: " span5="Gestion de projets: " span6="Faji Go: " text1="Créez votre boutique en ligne en quelques minutes et vendez facilement vos produits sur Internet. Profitez de nombreux outils pour mettre toutes les chances de votre côté." text2="Enregistrez les temps de travail à l'aide du chronomètre intégré ou saisissez simplement vos temps après coup. Avec Faji, l'enregistrement des temps n'a jamais été aussi simple et rapide. Possible aussi en mobilité avec un PC, un Mac, une tablette ou un smartphone."  text3="avec Faji, vous gérez votre stock rapidement et facilement et vous gardez toujours un œil sur votre stock."text4="Des réponses rapides par téléphone à toutes vos questions d’ordre juridique concernant votre entreprise - un service exclusif pour les utilisateurs de Faji."text5="Une gestion simple et claire qui vous permet de faire passer vos projets au niveau supérieur."text6="Utilisez l'application mobile Faji Go pour enregistrer les temps, numériser vos justificatifs, transférer vos documents et gérer vos contacts directement sur votre Smartphone." img={row2} />
            </div>
            <Testimonials title="Ce que disent " span="nos clients"/>
        <Ratingswhitebg/>
            <Test/>      <BTTButton/>

            <Footer/>
        </>
    );
}

export default ShowcaseFunctionalities;

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
const RowRev1 = ({ className, title, body, text1, text2, text3,text4,text5,text6,span1,span2,span3,span4,span5,span6, img }) => {
    return (
        <div className="row_reverse">
            <div className="row_reverse_lines">
                <h2>
                    <span>{title}</span>
                    
                </h2>
                <h3>{body}</h3>
                <Line className="line_reverse" text={text1} span={span1} />
                <Line className="line_reverse" text={text2} span={span2} />
                <Line className="line_reverse" text={text3} span={span3} />
                <Line className="line_reverse" text={text4} span={span4} />
                <Line className="line_reverse" text={text5} span={span5} />
                <Line className="line_reverse" text={text6} span={span6} />
                
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
const RowRev2 = ({ className, title, body, text1, text2, img }) => {
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


const Line = ({ text, className,span }) => {
    return (
        <div className={className}>
            <div className="tic_wrapper1">
                <div className="tic1">
                    <BsCheckLg className="tic_icon1" />
                </div>
            </div>
            <div className="line_text1">
                <h4><span style={{color:'#25A7FF', fontSize:'18px'}}>{span}</span>{text}</h4>
            </div>
        </div>
    );
};
