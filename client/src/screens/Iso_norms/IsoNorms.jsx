import React from 'react';
import './IsoNorms.css';
import { Link } from "react-router-dom";
import image from '../../assets/iso image.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import BTTButton from "../../components/BTTButton/BTTButton";

const IsoNorms = () => {
    return (
        <>
        <Navbar/>
            <div className="isonorms">
                <div className="header_iso">
                    <div className="stock_header bvr_header">
                        <h1>
                            <span>Faji et la norme </span>  ISO 20022
                        </h1>
                        <p>Mises à jour gratuites, sûres et automatiques: nous nous occupons de la transition, vous de votre entreprise.</p>
                        <Link to="/trial">
                            Testez gratuitement
                        </Link>
                        <p>Dans le monde des PME, la dénomination ISO 20022 est sur toutes les lèvres. Mais en quoi consiste précisément ce nouveau standard de paiement? Quelles sont les conséquences du passage à ce nouveau trafic des paiements pour les utilisateurs de Faji? Nos réponses aux questions essentielles.</p>

                    </div>{" "}
                </div>
                <div className="iso_card">
                    <CardNr span="Qu'est-ce que la norme ISO 20022?" text="Toute communication, pour être réellement efficace, nécessite l'utilisation d'un langage commun. C'est également le cas dans le secteur financier. L'arrivée de la norme ISO 20022 va permettre d'harmoniser les opérations de paiement. Cette standardisation des paiements concerne trois acteurs: les PME, les fournisseurs de logiciels comme Faji ainsi que les institutions financières et les banques." />
                </div>
                <div className="iso_section">
                    <h2>ISO 20022: préparez-vous pour ce nouveau standard avec Faji</h2>
                    <p>Nous actualisons Faji en fonction de la norme ISO 20022. Nous travaillons en étroite collaboration avec les banques connectées au logiciel afin de répondre aux exigences du nouveau standard de paiement en temps et en heure. La conversion est prise en charge de manière optimale grâce à des mises à jour automatiques, vous pouvez ainsi vous concentrer sur votre entreprise sans vous préoccuper de cette transition.</p>
                    <img src={image} alt="img" />
                </div>
                <div className="tva_function">
                    <h2>Pourquoi un nouveau standard est-il mis en place?</h2>
                    <p>L'introduction de la nouvelle norme vise à harmoniser les opérations de paiement internationales, ce qui permet de rendre le trafic plus fluide. Les processus sont traités plus rapidement et de façon plus fiable. La multiplicité des standards internationaux existant à ce jour compliquent la communication entre les acteurs financiers. Par conséquent, il est difficile d'automatiser la transmission des données. La norme ISO 20022 devrait permettre de dépasser cette complexité. <br /><br />Que cela signifie-t’il pour le trafic des paiements national? Jusqu'ici, deux systèmes de paiements coexistaient en Suisse: l'un géré par PostFinance, l'autre par les banques. Ces deux systèmes fonctionnent avec des normes différentes, ce qui augmente les coûts et complexifie les processus. Avec l'introduction de la nouvelle norme ISO 20022, les systèmes communiquerons désormais avec les mêmes codes. En Suisse comme ailleurs, les institutions financières s’harmonisent et garantissent ainsi l'interopérabilité avec l'espace de paiements en euros (SEPA).</p>
                    <h2>Qu'est-ce que le nouveau standard change pour votre PME?</h2>
                    <p>La nouvelle norme a une incidence sur le trafic des paiements de votre PME: les virements et les relevés bancaires que vous générez via Faji sont ainsi concernés.<br /><br /> Dans la mesure où Faji est un logiciel dit «standard», vous n'avez rien à faire. En tant que fournisseur du logiciel, nous prenons en charge la mise à jour de Faji afin de garantir la transition vers la norme ISO. Nos équipes travaillent étroitement avec les banques connectées à Faji afin d'adapter le système à chaque étape. Nous assurons l'uniformisation de vos opérations de paiement ainsi que vos relevés de compte — que vous soyez client de Credit Suisse, PostFinance, Raiffeisen, UBS, Zürcher Kantonalbank (ZKB) ou d'autres institutions bancaires.<br /><br /> Ce que vous devez faire? Rien du tout! La transition est prise en charge de manière optimale par des mises à jour automatiques et gratuites: nous nous chargeons d'harmoniser le trafic de paiements via Faji. En tant que fournisseur de solution cloud, nous nous occupons de tout pour que vous puissiez vous concentrer sur votre entreprise.</p>
                </div>

                <div className="bluebg_tva">
                    <p>Nous faisons en sorte de garantir une transition facilitée vers la nouvelle norme ISO 20022 à chaque étape.</p>
                </div>
                <div className="tva_function">
                    <p>- Matthias Paulus, Product Owner et expert bancaire chez Faji</p>
                    <h2>Quels sont les changements liés à l'introduction de la norme ISO 20022?</h2>
                    <p>Quels sont les changements concrets apportés par la mise en place du nouveau standard? Son introduction va affecter les PME en trois étapes: <br/> <br/> 1. Processus créditeurs <br />Les virements et les ordres de paiement sont transmis dans un nouveau format de fichier. Dans le cadre de la mise en place de la norme ISO, les formats DTA et OPAE (Poste) sont remplacés par le format de fichier pain.001. <br/> <br/> 2. Comptabilité des débiteurs, reporting et gestion de trésorerie <br />Les informations de compte contenus dans les relevés bancaires sont transmis dans un nouveau format de fichier. Avec l'arrivée du nouveau standard, le format actuel – SWIFT MT940 – est remplacé par le format camt.053 (camt = Cash Management). Le fichier v11 – qui correspond aux paiements de vos clients via les bulletins de versement orange – est quant à lui remplacé par les formats camt.052, camt.053 et camt.054. <br/> <br/> 3. Nouveau bulletin de versement <br/> Un nouveau bulletin de versement, la «QR-facture», remplace maintenant les anciens bulletins de versement — les bulletins de versement rouges avec communication et l'ensemble des bulletins de versement orange avec numéro de référence (BVR/BRVB). Par ailleurs, la désignation officielle «QR-facture avec section de paiement» va remplace celle de «bulletin de versement». La caractéristique principale de la QR-facture est son code QR, un code-barres en deux dimensions. Il permet la lecture numérique des factures et leur paiement en quelques clics – à l'aide d'un Smartphone ou d'une application d’e-banking. Cela permet d'uniformiser le trafic des paiements. De plus, les 27 chiffres du numéro de référence ne doivent plus être saisis manuellement, ce qui simplifie les processus et permet d'éviter les erreurs de saisie.</p>
                    <h2>Pour terminer: Qu'est-ce que l'ISO ?</h2>
                    <p>L'ISO (Organisation internationale de normalisation) est un organisme définissant des normes internationales. Il existe plus de 21 000 normes ISO — principalement économiques et technologiques. Avec ISO 20022, l'organisation défini une norme permettant non seulement d'uniformiser les communications concernant le trafic des paiements au niveau international, mais également d'harmoniser l'échange des données électroniques pour les institutions.</p>
                </div>
                <div className="test_text">
                <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                <h3>
                    Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                    l'outil de gestion idéal des PME.
                </h3>
                <Link to="/trial">Testez gratuitement</Link>                <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
            </div>


            </div>      <BTTButton/>

            <Footer/>
        </>
    );
}

export default IsoNorms;

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
