import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Accounting.css'
import { BsCheckLg } from "react-icons/bs";
import clock from "../../assets/accounting/clock Accounting.svg";
import thumbsUp from "../../assets/accounting/thumbsUp Accounting.svg";
import handShake from "../../assets/accounting/handShake Accounting.svg";
import info from "../../assets/accounting/info Accounting.svg";
import row1 from "../../assets/accounting/row1 Accounting.png";
import row2 from "../../assets/accounting/row2 Accounting.png";
import row3 from "../../assets/accounting/row3 Accounting.png";
import row4 from "../../assets/accounting/row4 Accounting.png";
import Header1 from '../../components/header1/Header1';
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import ToggleLine from '../../components/toggle_line/Toggle_line';
import BTTButton from "../../components/BTTButton/BTTButton";

const Accounting = () => {
    return (
        <>
              <Navbar/>
            <Header1 span="La comptabilité " title=" en toute simplicité" paragraph="La comptabilité en ligne simplifiée - pour toutes les PME suisses" icon1={clock} icon2={thumbsUp} icon3={handShake} icon4={info} cardTitle1="Rapide" cardTitle2="Fiable" cardTitle3="Pratique" cardTitle4="Assistance" text1="Avec Faji, gérez votre comptabilité en un rien de temps." text2="Une fois configurée, la comptabilité s'exécute en arrière-plan." text3="Idéale pour la collaboration avec votre   comptable." text4="Notre équipe d'assistance vous assiste avec plaisir en cas de questions." span2="Faji et la comptabilité :" title2=" comment ça marche? " paragraph2="Effectuez le décompte de la TVA et le bilan annuel en quelques clics. Avec Faji, tout devient à la fois simple et professionnel. Découvrez les fonctionnalités pratiques qui vont faciliter votre travail au quotidien" />
            <div className="cards_management">
                <Row className="green" title='Plus de temps pour ce qui compte vraiment' body="Avec Faji, votre comptabilité s'exécute automatiquement, ce qui vous permet de consacrer plus de temps à votre entreprise et aux choses que vous aimez faire." text1='Les factures entrantes et sortantes sont automatiquement comptabilisées avec les comptes de comptabilité et les taux de TVA enregistrés.' text2="Les produits ou services non préenregistrés peuvent être saisis manuellement en toute simplicité." text3="Les paiements sont automatiquement rapprochés dans le module bancaire, ce qui vous fait gagner un temps précieux et vous permet de réduire les sources d’erreur."  img={row1} />
                <RowRev className="blue"  title="Fiable et fonctionnel" body="Faji est un logiciel efficace, équipé de toutes les fonctionnalités dont vous avez besoin pour votre comptabilité." text1="Une fois configurée, la comptabilité s'exécute en arrière-plan." text2="Faji inclut des plans comptables standard et des taux de TVA que vous pouvez modifier et compléter en fonction de vos besoins." text3="Faji prend en charge les méthodes TVA courantes." img={row2} />
                <Row1 className="green" title='Une collaboration renforcée avec votre fiduciaire' body="Faji est idéal pour travailler avec votre fiduciaire et ainsi profiter encore davantage de ses conseils." text1='Donnez à votre fiduciaire un accès gratuit à votre compte Faji: il pourra alors suivre votre activité et vous assister en temps réel en vous conseillant de manière plus précise et sur le long terme.' text2="Votre fiduciaire peut également effectuer le décompte TVA et générer des rapports." text3="Le bilan annuel est simplifié, car toutes les données nécessaires sont déjà dans votre compte Faji." text4="Vous cherchez encore un fiduciaire? Faji travaille avec plus de 1000 partenaires fiduciaires certifiés."  img={row3} />
                <RowRev className="blue"  title="Notre équipe d'assistance est à votre disposition" body="Faji est un logiciel fiable et efficace qui facilite votre comptabilité. En cas de questions, notre équipe d'assistance se fera un plaisir de vous aider." text1="Vous pouvez nous contacter 24h/24 et 7j/7 depuis votre domicile ou votre bureau." text2="Notre assistant d'onboarding vous accompagne à chaque étape de la configuration de votre comptabilité." text3="Nous proposons également des services d'aide à la configuration à des tarifs compétitifs pour vous assurer que le module bancaire et la comptabilité sont correctement configurés. Notre équipe se fera un plaisir de vous conseiller. N'hésitez pas à créer un compte d'essai gratuit."  img={row4} />
            </div>
            <div className="faq">
            <h2>FAQ : Les réponses à toutes vos questions concernant la comptabilité</h2>
            <ToggleLine title="En quoi consiste au juste la comptabilité?" details="Lorsque vous effectuez votre comptabilité, la première étape consiste à organiser vos pièces comptables. C'est l'un des grands principes comptables: «Pas de comptabilisation sans pièce justificative.» Il faut ensuite comptabiliser l'impôt préalable et l'impôt sur le chiffre d’affaires, ainsi que l'imposition des résultats de l'entreprise. La gestion des actifs et l'inventaire sont également des processus comptables, tout comme la comptabilité analytique."  />
            <ToggleLine title="Quels sont les différents types de comptabilité?" details="En plus de la comptabilité générale, on peut citer notamment la comptabilité financière, la comptabilité des créanciers ou encore la comptabilité des débiteurs. Il convient également de distinguer la comptabilité simplifiée et la comptabilité en partie double. Il existe toute une terminologie associée que vous pouvez retrouver dans notre glossaire comptable."  />
            <ToggleLine title="Est-il possible de travailler avec des monnaies étrangères dans Faji?" details="Oui. Vous pouvez tout à fait définir une monnaie étrangère et un taux de change associé. Les rapports des feuilles de compte indiquent toujours la monnaie étrangère avec le solde final. Les gains et pertes de change réalisés sont directement comptabilisés lors du paiement. Les gains et pertes de change non réalisés doivent être comptabilisés manuellement. Il est également possible de comptabiliser la monnaie de base dans une monnaie étrangère pour les banques. C’est pourquoi il est important d’effectuer une comptabilisation correcte et de ne pas oublier la monnaie étrangère. Si le compte bancaire est connecté à un e-banking, la comptabilisation est effectuée automatiquement et avec le cours correct dans la monnaie étrangère correspondante. Les cours peuvent être enregistrés manuellement dans une table des cours ou modifiés dans un module lors de la saisie d’une écriture. Vous trouverez plus d'informations à ce sujet dans cet article d’aide."  />
            <ToggleLine title="Comment gérer les revenus et les dépenses?" details="En Suisse, les entreprises peuvent choisir entre deux comptabilités différentes: la comptabilité simplifiée, qui correspond à la comptabilité de caisse et pour laquelle chaque revenu/dépense ne doit être enregistré qu'une seule fois, et la comptabilité en partie double."  />
            <ToggleLine title="Comment les rapports concernant le compte de résultat ou le bilan sont-ils créés ?" details="Dans Faji, vous pouvez afficher votre bilan et votre compte de résultat avec une comparaison d'une année sur l'autre sous forme de rapports et les imprimer. Si vous souhaitez ajuster votre plan comptable, vous trouverez plus d’informations sous «Gestion des groupes de comptes» et «Plan comptable». Pour plus d'informations, consultez notre article d'assistance."  />
            
        </div>
            
            <Testimonials title="Ce que disent " span="nos clients"/>
            <Ratingswhitebg/>
            <Test/>
            <BTTButton/>

            <Footer/>
        </>
    );
}

export default Accounting;

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
const Row1 = ({ className, title, body, text1, text2, text3, text4, img }) => {
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
                <Line className="line_normal" text={text4} />
                
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


