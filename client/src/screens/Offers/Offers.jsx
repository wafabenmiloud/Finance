import React from 'react';
import './Offers.css';
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import icon1 from "../../assets/offers/icon 1 offers.svg";
import icon2 from "../../assets/offers/icon 2 offers.svg";
import icon3 from "../../assets/offers/icon 3 offers.svg";
import icon4 from "../../assets/offers/icon 4 offers.svg";
import arrowDown from "../../assets/images/arrow down header.svg";
import avatar from "../../assets/time_avatar.png";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';





const Offers = () => {
    return (
        <>
        <Navbar/>
            <div className="offers">
                <div className="auto_title">
                    <h1><span>Rédigez facilement</span>  vos offres</h1>
                    <p>Rédigez vos offres en toute simplicité.</p>
                    <Link to="/trial">Testez gratuitement</Link>
                    <p className='centered_offers'>L’établissement d’une offre propre et bien structurée est un élément important pour le succès d’une future passation de commande. Elle constitue l’une des vitrines privilégiées de l‘entreprise. Il est donc d’autant plus important, pour une offre, d’être bien structurée et agréablement présentée.</p>
                    <p className='centered_offers'> Vous souhaitez établir vos offres encore plus facilement et rapidement? Optez pour le logiciel de gestion Faji, et créez des offres en quelques clics grâce à l’importation des données et aux modèles fournis par le logiciel. Le logiciel vous simplifie également les étapes suivantes: vous avez en effet la possibilité de créer vos factures à partir de vos offres en un rien de temps.</p>
                </div>
                <Header
                    icon1={icon1}
                    icon2={icon2}
                    icon3={icon3}
                    icon4={icon4}
                    cardTitle1="Création d’offres à partir de modèles"
                    cardTitle2="Carnet d'adresses pour les offres, les commandes et les factures"
                    cardTitle3="Envoi par e-mail"
                    cardTitle4="Créez des offres où que vous soyez"
                    text1="Travaillez encore plus efficacement grâce aux modèles: toutes les mentions obligatoires sont automatiquement générées par Faji dans vos offres, dans la mise en page que vous avez choisie. Vous n'avez plus à vous en soucier!"
                    text2="Avec Faji, rédigez vos offres, vos commandes et vos factures rapidement et facilement: les adresses de vos clients sont automatiquement importées à partir du carnet d'adresses."
                    text3="Envoyez directement vos offres par e-mail depuis Faji. Vos clients peuvent accepter ou refuser votre offre en ligne, ou encore laisser un commentaire. Vous pouvez également envoyer vos offres par courrier."
                    text4="Faji est un logiciel de gestion basé sur le web: vous pouvez travailler à tout moment, où que vous soyez – vos données sont disponibles en permanence. Restez productifs tout au long de la journée!"
                />
                <div className="artisanat_content">
                    <div className="artisanat_client">
                        <div className="artisanat_client_img">
                            {" "}
                            <img src={avatar} alt="img" />
                        </div>
                        <div className="artisanat_client_content">
                            <h2>Jörg Schäfer</h2>
                            <h5>AVP Media-Design GmbH</h5>
                            <p>
                                Grâce à Faji, il est facile de garder une vue d'ensemble de l’offre à la facture. Cela libère des ressources que nous pouvons investir dans notre activité principale.
                            </p>
                        </div>
                    </div>

                    <h1>En savoir plus sur la gestion des offres</h1>
                    <p>Souhaitez-vous plus d'informations sur le processus de devis? Vous trouverez ici des exemples, des échantillons et des conseils pour vos besoins et les informations données:</p>
                </div>
                <div className="cards_bvr">
                    <CardNr span="" title=" Qu’est-ce qu’une offre?" text="Une offre ou encore un devis est, du point de vue commercial, un élément du processus d’acquisition. La plupart du temps, une demande émanant d’un client potentiel précède l’offre, demande à laquelle on réagit précisément au moyen de cette offre. L’offreur détermine les conditions auxquelles il est prêt à livrer les marchandises demandées, ou à prester les services demandés." />
                    <CardRv title="Conditions de forme d’une offre" span="" text="D’habitude, les offres prennent la forme écrite et sont ensuite envoyées soit par e-mail, soit par la poste. Cependant, la remise d’une offre peut aussi être informelle, c’est-à-dire oralement ou par téléphone. Dans tous les cas, il est important que l’offre soit bien structurée et clairement formulée, pour éviter les quiproquos." />
                    <CardNr span="" title="Dans quelle mesure une offre d'achat est-elle contraignante?" text="Une offre d'achat est contraignante: à partir du moment où le client accepte l'offre, que ce soit par écrit ou verbalement, un contrat contraignant est formé. Le Code des obligations suisse stipule que «le mandataire s'oblige à gérer l’affaire dont il s’est chargé ou à rendre les services qu’il a promis» (CO, article 394)." />
                    <CardRv title="Comment puis-je établir l’offre parfaite?" span="" text="Une offre d'achat doit être faite par écrit. Elle doit être claire et facile à comprendre. Outre les formalités habituelles, l'offre doit contenir toutes les informations et tous les frais relatifs à la vente du produit ou à la fourniture du service. Ceci inclut notamment les délais, les conditions de paiement et autres frais." />
                    <CardNr span="" title="Une offre d'achat est-elle payante?" text="Il faut avant tout veiller à ce que l’établissement de l’offre ne soit pas payant pour l’intéressé, sauf s’il en a été convenu autrement. Mais dans la plupart des cas, il s’agit seulement d’une invitation à conclure un contrat. Il faut ensuite veiller à ce que les prix soient fiables. Sur une offre, donnez toujours des prix exacts (TVA comprise). Si vous ne disposez pas encore des prix définitifs pour votre devis (par exemple, parce que l’ampleur des travaux n’est pas encore clairement définie), mentionnez clairement qu’il s’agit d’un devis sans engagement. Attention, l’octroi d’un escompte ou d’une ristourne n’est pas prescrit par la loi. Vous pouvez toutefois inciter le client, dans certaines circonstances, à acquitter plus rapidement le montant de sa facture (et c’est bien est le cas avec l’escompte), ce qui entraîne une répercussion positive sur votre trésorerie. Ajoutez ces options dans votre offre au besoin." />
                </div>
                <div className="facture_conseils">
                    <h1>Que doit contenir une offre d'achat?</h1>
                    <p>
                        une offre d'achat doit inclure les éléments suivants:
                    </p>

                    <div className="facture_conseils_lines">
                        <Line text="Nom et adresse du fournisseur de la prestation" />
                        <Line text="Nom et adresse du bénéficiaire de la prestation" />
                        <Line text="Date ou période de validité." />
                        <Line text="Tous les prix, frais et données quantitatives en détail" />
                        <Line text="Conditions de paiement (par exemple, paiement partiel, paiement total)" />
                        <Line text="Taux d’imposition applicable (par exemple, TVA de 8 % incluse)" />
                        <Line text="Données concernant les escomptes ou les ristournes" />
                        <Line text="Référence aux conditions générales (CG, si disponibles)" />
                    </div>
                </div>
                <div className="artisanat_content">
                    <h1>Utilisez notre modèle</h1>
                    <p>Etablissez vos offres à l’aide d’un logiciel de gestion comme Faji: toutes les mentions obligatoires et informations importantes seront automatiquement intégrées dans vos documents. Les coordonnées et les postes produits peuvent être importés en un clic. Les modules de texte vous permettent par ailleurs de rédiger vos offres encore plus facilement. A noter: Faji vous facilite la gestion de votre entreprise quel que soit votre secteur d'activité, que vous soyez prestataire de services, menuisier, peintre ou artisan. Autre avantage: Faji étant un logiciel basé sur le cloud, vous pouvez créer vos offres où que vous soyez, y compris lors de vos déplacements. Vous souhaitez en savoir plus? Essayez le logiciel!</p>
                    <h1>Quand le montant de la facture dépasse celui de l’offre</h1>
                    <p>Il peut toujours arriver qu’il y ait plus de travail qu’initialement prévu pour finaliser un contrat. Dans ce cas, il est indispensable d’en informer le client sans délai et d’obtenir son approbation sur ce supplément avant d’exécuter les travaux. Dans le cas contraire, une augmentation du montant de la facture serait injustifiée et pourrait mener à une action en justice.</p>
                </div>
                <div className="cloud_blue_section">
                    <h3>Rédigez vos offres en toute simplicité avec Faji</h3>
                    <p>Faji, le logiciel d’entreprise pour les PME, propose des modèles de présentation pour l’établissement simple et commode de vos offres. Lorsque vous utilisez ceux-ci, vous ne devez vous faire aucun souci, car tous les éléments que nous avons mentionnés sont compris automatiquement dans l’offre établie.</p>
                </div>
                <div className="test_text">
                    <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                    <h3>
                        Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                        l'outil de gestion idéal des PME.
                    </h3>
                    <Link to="/trial">Testez gratuitement</Link>{" "}
                    <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                    <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
                </div>




            </div>
            <Footer/>
        </>
    );
}

export default Offers;
const Line = ({ text }) => {
    return (
        <div className="facture_line_normal">
            <div className="facture_tic_wrapper">
                <div className="facture_tic">
                    <BsCheckLg className="facture_tic_icon" />
                </div>
            </div>
            <div className="facture_line_text">
                <h4>{text}</h4>
            </div>
        </div>
    );
};
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
                        Avantages de la création d'offres avec Faji
                        <img src={arrowDown} alt="img" />
                    </h2>

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
const CardNr = ({ span, title, text }) => {
    return (
        <div className="time_card_normal">
            <div className="time_card_normal_blue"></div>
            <div className="time_card_normal_content">
                <h1><span> {span} </span>
                    {title}

                </h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CardRv = ({ span, title, text }) => {
    return (
        <div className="time_card_reverse">
            <div className="time_card_reverse_blue"></div>
            <div className="time_card_reverse_content">
                <h1>
                    {" "}
                    {title}
                    <span> {span} </span>
                </h1>
                <p>{text}</p>
            </div>
        </div>
    );
};