import React from 'react';
import './NosDirectives.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import graduation from '../../assets/directives icons/Graduation hat.svg'
import shield from '../../assets/directives icons/Shield.svg'
import orders from '../../assets/directives icons/Orders.svg'
import info from '../../assets/directives icons/info.svg'
import ToggleLine from '../../components/toggle_line/Toggle_line';
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import BTTButton from "../../components/BTTButton/BTTButton";

const NosDirectives = () => {
    return (
        <>
            <Navbar/>
            <div className="section1_directives">
                <h2>Nos directives</h2>
                <p className='directives_p'>Nous considérons que la sécurité, la transparence et la protection des données font partie de nos priorités absolues. Vous trouverez ci-dessous nos Conditions générales de vente (CGV), notre Déclaration de protection des données ainsi que d'autres documents et explications importants.</p>
                <div className="header1_cards directives_cards">
                    <div className="header1_card">
                        <img src={graduation} className="header1_card_icon directives_icon" alt="img"></img>
                        <h3>CGV</h3>
                        <p >Conditions générales de vente CGV complémentaires pour les cours Academy</p>
                    </div>
                    <div className="header1_card">
                        <img alt="img" src={shield} className="header1_card_icon directives_icon"></img>
                        <h3>Protection des données</h3>
                        <p>Comptabilité automatisée – travailler en ligne, partout, à tout moment.</p>
                    </div><div className="header1_card">
                        <img alt="img" src={orders} className="header1_card_icon directives_icon"></img>
                        <h3>Traitement des commandes</h3>
                        <p>Contrat de traitement des commandes</p>
                    </div><div className="header1_card">
                        <img alt="img" src={info} className="header1_card_icon directives_icon"></img>
                        <h3>Information légales</h3>
                        <p>Information légales</p>
                    </div>
                </div>
                
            </div>
            <div className="section2_directives">
                <h2>Règlement général sur la protection des données (RGPD)</h2>
                <ToggleLine title="Le RGPD, qu’est-ce que c’est?" details="Le RGPD est le nouveau règlement européen sur la protection des données personnelles (RGPD). Avec le RGPD, l’ancienne directive sur la protection des données (de 1995) est adaptée à l'ère numérique: elle a été mise à jour et modernisée. Comment les données personnelles doivent-elles désormais être traitées? Les exigences relatives au traitement des données personnelles sont spécifiées dans le RGPD. Le RGPD entre en vigueur le 25 mai prochain. Il sera applicable dans l’ensemble de l'UE." />
                <ToggleLine title="Données à caractère personnel: de quoi s’agit-il?" details="Les données personnelles sont des informations concernant un utilisateur permettant notamment de déterminer son identité. Les données personnelles comprennent des informations telles que le nom, la date de naissance, l’adresse e-mail, le numéro de sécurité sociale, les coordonnées bancaires, des données en ligne, mais également des caractéristiques physiques telles que le sexe ou la taille. Le RGPD réglemente le traitement de ces données personnelles." />
                <ToggleLine title="Qu'est-ce que le GDPR?" details="Le sigle anglais GDPR («General Data Protection Regulation») est parfois utilisé à la place du sigle français RGPD." />
                <ToggleLine title="Qui est concerné par le RGPD?" details="Le RGPD concerne toutes les entreprises ayant un établissement dans l'UE et/ou traitant les données de citoyens de l'UE. Faji est ainsi concerné dans la mesure où des clients basés dans l’UE travaillent avec le logiciel." />
                <ToggleLine title="Pourquoi les entreprises suisses sont-elles concernées par le RGPD?" details="A partir du moment où une entreprise suisse a un établissement dans l'Union européenne (UE) ou (ce qui est bien plus fréquent) traite des données personnelles de citoyens de l'UE, elle est concernée par le RGPD." />
                <ToggleLine title="Quels sont les avantages apportés par le RGPD pour les utilisateurs?" details="Le nouveau règlement renforce la protection des données personnelles des utilisateurs. Le RGPD met ainsi en place des principes et des droits pour les utilisateurs de manière à réglementer le traitement des informations telles que le nom, la date de naissance, l’adresse e-mail, le numéro de sécurité sociale, les coordonnées bancaires, les données en ligne, mais également les caractéristiques physiques telles que le sexe ou la taille." />
                <ToggleLine title="Quel est l’impact du RGPD pour les entreprises?" details="Le RGPD renforce la responsabilité des entreprises et impose une documentation plus détaillée sur le traitement des données personnelles." />
                <ToggleLine title="L’activité de Faji est-elle conforme au RGPD?" details="Oui. A la date d’entrée en vigueur du nouveau règlement général européen sur la protection des données (RGPD), nous satisferons toutes les exigences légales en tant que fournisseur." />
                <ToggleLine title="Qu’est-ce qu’un contrat de traitement des données?" details="Le contrat de traitement des données détaille le cadre régissant le transfert et le traitement des données personnelles pour le compte de votre entreprise à des tiers – en l'occurrence, Faji." />
                <ToggleLine title="Suis-je concerné par le contrat de traitement des données?" details="A partir du moment où vous avez un établissement dans l'Union européenne (UE) ou traitez des données personnelles de citoyens de l'UE, vous êtes concernée par le RGPD. Vous devez par conséquent – entre autres choses – conclure un contrat de traitement des données avec Faji afin de vous mettre en conformité avec le RGPD. Pour vous simplifier les choses, nous avons intégré ce contrat à nos Conditions générales (vous le trouverez en annexe de celles-ci)." />
            </div>
            <Ratingswhitebg/>
            <Test/>
            <BTTButton/>

            <Footer/>
        </>
    );
}

export default NosDirectives;
