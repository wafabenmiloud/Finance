import React from 'react';
import './OnlineAccounting.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Testimonials from '../../components/testimonials/Testimonials';

import BTTButton from "../../components/BTTButton/BTTButton";


const OnlineAccounting = () => {
    return (
        <>
        <Navbar/>
            <div className="online_accounting">
                <div className="stock_header">
                    <h1>
                        <span>Tenir la comptabilité</span> de votre entreprise en ligne
                    </h1>
                    <p className='p'>Simple. Claire. Automatisée. Voici comment fonctionne la comptabilité aujourd'hui.</p>
                    <Link to="/trial">
                        Testez gratuitement
                    </Link>
                    <div className="stock_header_cards">
                        <HeaderCard
                            className="stock_header_card1"
                            title="Assistance gratuite"
                            body="24h/24, 7j/7"
                        />
                        <HeaderCard
                            className="stock_header_card2"
                            title="Vos données en"
                            body="sécurité en Suisse"
                        />
                        <HeaderCard
                            className="stock_header_card3"
                            title="Essai gratuit"
                            body="sans carte de crédit"
                        />
                        <HeaderCard
                            className="stock_header_card4"
                            title="Plus de"
                            body="60'000 clients"
                        />
                        <HeaderCard
                            className="stock_header_card5"
                            title="Un logiciel plusieurs fois "
                            body="récompensé"
                        />
                    </div>
                </div>{" "}
                <div className="onlineaccounting_cards">
                    <CardNr span="Tenir votre comptabilité" title=" sans efforts" text="Si vous traitez vos documents avec Faji, Faji tiendra votre comptabilité automatiquement (par exemple, la comptabilité des comptes débiteurs pour les factures sortantes). Ainsi, avec Faji, votre comptabilité se tient toute seule, ou presque. Vous connaîssez à tout moment la situation financière de votre entreprise, grâce à des graphiques et des rapports, ainsi que des statistiques sur votre chiffre d'affaires." />
                    <CardRv span="Journal présentant une vue d'ensemble" title="pour toutes les écritures comptables" text="Les écritures   comptables sont répertoriés dans le journal de façon claire, qu'il s'agisse de la comptabilité manuelle ou opérée par le système. Faji propose différents filtres pour vous permettre d’organiser votre comptabilité selon vos exigences. Vous pouvez également exporter vos données sous forme de fichier Excel. L'application mobile FajiGo vous permet de scanner vos documents même lors de vos déplacements et de les télécharger en quelques clics. Ainsi, tous vos documents sont archivés dans votre comptabilité." />
                    <CardNr span="Synchronisez e-banking" title=" sans efforts" text="Faji révolutionne les paiements des petites entreprises. Grâce à l’interface vers l'e-banking, vous payez vos factures rapidement et facilement. Saisissez les ordres de paiement et transmettez-les à l'e-banking en un clic. Avec Faji vous pouvez également synchroniser l’alignement des paiements en un clin d’œil. Rapprochez les transactions bancaires directement avec la comptabilité dans Faji. Le rapprochement automatique avec UBS e-banking vous offre un confort maximal. Grâce à l'interface, les clients de Postfinance et de la banque cantonale de Zurich peuvent eux-aussi synchroniser les paiements directement avec l’e-banking." />
                    <CardRv span="Un système de comptabilité" title=" complet dans un logiciel unique" text="Avec Faji, vous gérez non seulement vos recettes et vos dépenses, mais également votre bilan et votre compte de résultats. Vous avez tout ce dont vous avez besoin pour tenir votre comptabilité financière. Créez votre propre plan   comptable et effectuez la comptabilité selon vos besoins." />
                    <CardNr span="Une collaboration en ligne" title="  avec votre société comptablegrâce à Faji" text="Souhaitez-vous obtenir l’aide d'un expert pour effectuer votre comptabilité? Invitez votre société   comptableà utiliser Faji et facilitez votre collaboration. Donnez-lui un accès en ligne pour des domaines bien précis de votre compte, comme par exemple le journal de comptabilisation ou le calcul de la TVA. De cette manière, il peut vous aider directement à gérer la comptabilité." />
                    <CardRv span="Afficher la TVA et" title=" la facturation conformément à l'AFC" text="Vous n'avez aucune vue d’ensemble de votre TVA? Pas de problème: Faji vous aide et vous offre une facturation de la TVA simple, mais complète. Peu importe si vous travaillez de manière effective ou si vous calculez la taxe d'imposition, avec rémunération convenue ou perçue. Faji propose toutes les méthodes. Le formulaire de TVA est généré automatiquement: ainsi, il correspond au format   comptable de l'Administration fédérale des contributions (AFC). De cette manière, vous respectez toujours les échéances." />
                </div>
                <Testimonials title="Ce que disent " span="nos clients"/>

                <div className="test_text">
                    <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                    <h3>
                        Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                        l'outil de gestion idéal des PME.
                    </h3>
                    <Link to="/trial">Testez gratuitement</Link>                    <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                    <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
                </div>      <BTTButton/>

                <Footer/>

            </div>
        </>
    );
}

export default OnlineAccounting;

const CardNr = ({ span, title, text }) => {
    return (
        <div className="stock_card_normal">
            <div className="stock_card_normal_blue"></div>
            <div className="stock_card_normal_content">
                <h1>
                    <span> {span} </span>
                    {title}
                </h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CardRv = ({ span, title, text }) => {
    return (
        <div className="stock_card_reverse">
            <div className="stock_card_reverse_blue"></div>
            <div className="stock_card_reverse_content">
                <h1>
                    <span> {span} </span>
                    {title}
                </h1>
                <p>{text}</p>
            </div>
        </div>
    );
};
const HeaderCard = ({ title, body, className }) => {
    return (
        <div className={className}>
            <p>{title}</p>
            <h6>{body}</h6>
        </div>
    );
};