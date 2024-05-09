import React from 'react';
import './InvoicingSoftware.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import icon1 from "../../assets/invoice/file invoice.svg";
import icon2 from "../../assets/invoice/bank invoice.svg";
import icon3 from "../../assets/invoice/file2 invoice.svg";
import icon4 from "../../assets/invoice/file2 invoice.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import Testimonials from '../../components/testimonials/Testimonials';
import icon1b from "../../assets/invoice/cloud invoice.svg";
import icon2b from "../../assets/invoice/briefcase invoice.svg";
import Test from '../../components/test/Test';
import BTTButton from "../../components/BTTButton/BTTButton";



const InvoicingSoftware = () => {
    return (
        <>
            <Navbar />
            <div className="invoicing_software">
                <div className="time_header">
                    <h1>
                        {" "}
                        <span>Logiciel de facturation suisse</span> pour devis, factures et plus encore…
                    </h1>
                    <p style={{ textAlign: "center" }}>
                        Plus de 60'000 petites entreprises, startups et indépendants suisses font confiance au logiciel de facturation de Faji.
                    </p>
                    <button>Testez gratuitement</button>
                    <div className="time_header_cards">
                        <HeaderCard
                            className="time_header_card1"
                            title="Assistance gratuite"
                            body="24h/24, 7j/7"
                        />
                        <HeaderCard
                            className="time_header_card2"
                            title="Vos données en"
                            body="sécurité en Suisse"
                        />
                        <HeaderCard
                            className="time_header_card3"
                            title="Essai gratuit"
                            body="sans carte de crédit"
                        />
                        <HeaderCard
                            className="time_header_card4"
                            title="Plus de"
                            body="60'000 clients"
                        />
                        <HeaderCard
                            className="time_header_card5"
                            title="Un logiciel plusieurs fois "
                            body="récompensé"
                        />
                    </div>
                    <Header
                        icon1={icon1}
                        icon2={icon2}
                        icon3={icon3}
                        icon4={icon4}
                        cardTitle1="Création de factures et de devis"
                        cardTitle2="Connexion avec l'e-banking"
                        cardTitle3="Mise en page professionnelle"
                        cardTitle4="Rappels de paiement automatiques"
                        text1="Enregistrez une fois pour toutes vos données de base, produits et prestations dans Faji. Créez vos devis, factures, bulletins de livraison et rappels de paiement en deux temps trois mouvements."
                        text2="Connectez votre e-banking à notre logiciel basé sur le cloud et rapprochez rapidement et facilement les transactions dans votre compte Faji."
                        text3="Personnalisez la présentation de vos factures. Ajoutez votre logo, modifiez la mise en page et choisissez une police qui vous ressemble."
                        text4="Envoyez automatiquement et en toute simplicité des rappels de paiement pour les factures en retard: restez zen, gagnez du temps et augmentez votre taux de paiement!"
                    />
                </div>
                <Testimonials title="Ce que disent " span="nos clients" />
                <div className="section1_invoice">
                    <h3>Tout ce dont vous avez besoin dans un logiciel de facturation</h3>
                    <p className='invoice_centered'>Pour les petites et moyennes entreprises, les tâches à effectuer jour après jour ont souvent tendance à s'accumuler. Dans ce contexte, il arrive fréquemment que la création de factures soit reportée au lendemain — ou même carrément oubliée après une longue journée de travail. Un bon logiciel de facturation comme Faji vous épargne la plus grande partie de ce travail. Résultat: vous êtes payé plus rapidement et avez plus de temps pour les choses qui comptent vraiment. Nos clients s'épargnent en moyenne 3,1 heures de travail administratif par semaine!</p>
                    <div className="invoice_cards">
                        <CardNr span="automatisé" title="Un processus de facturation (quasi)" text="Créez directement une facture à partir d'un devis ou d'un temps de travail préenregistré. Envoyez-la ensuite par e-mail depuis votre compte Faji en un clic - c'est fini! Et ce n'est pas tout: connectez Faji à de nombreuses apps et à Zapier pour automatiser encore plus de processus." span1=" professionnelles et personnalisables" title1="Des factures" text1="Soignez l'image de votre entreprise avec des factures professionnelles qui vous ressemblent. Personnalisez les modèles de facture disponibles dans Faji en fonction de vos besoins. Ajoutez par exemple le logo de votre entreprise, sélectionnez une police qui vous ressemble, configurez une en-tête et modifiez la mise en page de vos documents." span2=" la TVA suisse vous compliquer la vie" title2="Ne laissez plus" text2="Que vous soyez assujetti à la TVA ou non, Faji fait tous les calculs pour vous. La TVA est automatiquement indiquée sur vos factures en fonction des données de base préenregistrées. Vous réduisez ainsi les risques d'erreur et pouvez vous concentrer sur les choses que vous aimez vraiment faire." />
                        <CardRv span="Une bonne vue d'ensemble de" title="vos finances dans le tableau de bord" text="Le tableau de bord de Faji vous donne les informations les plus utiles concernant vos finances: votre chiffre d'affaires mensuel, vos principaux clients ou encore le montant total de toutes les factures encore ouvertes ou en retard." span1="Toutes les factures" title1=" ouvertes en un coup d'œil" text1="Grâce à l'interface e-banking, vous pouvez voir en un coup d'œil quelles factures ont été payées et quelles factures sont encore ouvertes ou en retard. Faji travaille avec les plus grandes banques suisses: UBS, Credit Suisse, Zürcher Kantonalbank et bien d'autres!" span2="Envoi automatique de rappels" title2="pour des paiements plus rapides" text2="Vous en avez assez d'attendre trop longtemps le paiement de vos factures? Configurez facilement des processus de relance dans Faji et envoyez automatiquement des rappels de paiement pour les factures en retard. Les utilisateurs de Faji sont payés 26% plus vite en moyenne!" />
                    </div>
                </div>
                <div className="cloud_blue_cards">
                    {" "}
                    <Card
                        icon={icon1b}
                        title="Un logiciel de facturation en ligne"
                        body="Faji est un logiciel basé sur le web: vous pouvez accéder à vos données quand vous voulez, où vous voulez - que vous soyez chez vous, au bureau ou en déplacement, sur votre PC, votre Mac ou votre Smartphone. Connectez-vous simplement à votre compte Faji sur votre navigateur préféré!"
                    />
                    <Card
                        icon={icon2b}
                        title="Sauvegardes et mises à jour gratuites!"
                        body="Nous nous occupons des mises à jour et des sauvegardes régulières afin que vous puissiez vous concentrer sur l'essentiel - et ce quel que soit votre package, gratuitement et sans téléchargement. Votre logiciel de facturation reste ainsi toujours à jour et toutes vos données sont stockées de manière sécurisée dans le cloud."
                    />

                </div>
            </div>
            <Test/>      <BTTButton/>

            <Footer />
        </>
    );
}

export default InvoicingSoftware;
const Header = ({
    icon1,
    icon2,
    icon3,
    icon4,
    cardTitle1,
    cardTitle2,
    cardTitle3,
    cardTitle4,
    text1,
    text2,
    text3,
    text4,
}) => {
    return (
        <>
            <div className="header">
                <div className="header_advantages">
                    <h2>
                        Un programme de facturation intuitif riche en fonctionnalités
                        <img src={arrowDown} alt="img" />
                    </h2>
                    <p>
                        Avec notre logiciel de facturation basé sur le web, créez vos devis, factures, bulletins de livraison et rappels de paiement en quelques clics.
                    </p>
                    <div className="header_cards">
                        <div className="header_card">
                            <img alt="img" src={icon1} className="header_card_icon"></img>
                            <h3>{cardTitle1}</h3>
                            <p>{text1}</p>
                        </div>
                        <div className="header_card">
                            <img alt="img" src={icon2} className="header_card_icon"></img>
                            <h3>{cardTitle2}</h3>
                            <p>{text2}</p>
                        </div>
                        <div className="header_card">
                            <img alt="img" src={icon3} className="header_card_icon"></img>
                            <h3>{cardTitle3}</h3>
                            <p>{text3}</p>
                        </div>
                        <div className="header_card">
                            <img alt="img" src={icon4} className="header_card_icon"></img>
                            <h3>{cardTitle4}</h3>
                            <p>{text4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const HeaderCard = ({ className, title, body }) => {
    return (
        <div className={className}>
            <p>{title}</p>
            <h6>{body}</h6>
        </div>
    );
};
const CardNr = ({ span, title, text, span1, title1, text1, span2, title2, text2 }) => {
    return (
        <div className="time_card_normal">
            <div className="time_card_normal_blue"></div>
            <div className="time_card_normal_content">
                <h1>
                    {title}
                    <span> {span} </span>

                </h1>
                <p>{text}</p>
                <h1>
                    {title1}
                    <span> {span1} </span>
                </h1>
                <p>{text1}</p>
                <h1>
                    {title2}
                    <span> {span2} </span>
                </h1>
                <p>{text2}</p>
            </div>
        </div>
    );
};

const CardRv = ({ span, title, text, span1, title1, text1, span2, title2, text2 }) => {
    return (
        <div className="time_card_reverse">
            <div className="time_card_reverse_blue"></div>
            <div className="time_card_reverse_content">
                <h1>
                    {" "}
                    <span> {span} </span>
                    {title}
                </h1>
                <p>{text}</p>
                <h1>
                    {" "}
                    <span> {span1} </span>
                    {title1}
                </h1>
                <p>{text1}</p>
                <h1>
                    {" "}
                    <span> {span2} </span>
                    {title2}
                </h1>
                <p>{text2}</p>
            </div>
        </div>
    );
};
const Card = ({ icon, body, title }) => {
    return (
      <>
        <div className="cloud_card_wrapper">
          <div className="cloud_card1">
            <img src={icon} alt="img" />
          </div>
          <div className="cloud_card2">
            <h3>{title}</h3>
            <h4>{body}</h4>
          </div>
        </div>
      </>
    );
  };