import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/info tva.svg'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BTTButton from "../../components/BTTButton/BTTButton";



const JournalExplaination = () => {
    return (
        <>
        <Navbar/>
            <div className="header_iso">
                <div className="stock_header bvr_header">
                    <h1>
                        <span>Explication du journal de comptabilisation</span>   et de la tenue du journal
                    </h1>
                    <p>Automatisez votre journal   comptable grâce à Faji.</p>
                    <Link to="/trial">
                        Testez gratuitement
                    </Link>
                    <p>Le journal de comptabilisation enregistre toutes les opérations. Autrement dit, toutes les transactions comptabilisées sont enregistrées chronologiquement et ventilées par exercice. Il s’agit des informations telles que les factures entrantes et sortantes, les reçus et les relevés bancaires. Ce journal est le livre de base à partir duquel toutes les opérations sont référencées.</p>

                </div>{" "}
            </div>
            <div className="bluebg_tva">
                <img src={image} alt="img" />
                <p>Conseil: Avec le logiciel de comptabilité de Faji, faites votre comptabilité (quasi) automatiquement. Vous souhaitez en savoir plus? Testez Faji gratuitement et sans engagement pendant 30 jours.</p>
            </div>
            <div className="tva_function">
                <p>Ce qui est rapporté au journal, est publié simultanément dans les comptes du grand livre selon les principes de comptabilité à double entrée. Mais dans ce dernier n’apparaissent que les effets de l'enregistrement dans le livre de base de la situation économique de l'entreprise. Ces comptes du grand livre forment le grand livre général. Le livre de base et les comptes du grand livre sont détaillés par des sous-livres, qui sont attribués à chaque compte particulier. Ils complètent les informations contenues dans les comptes du grand livre. Le livre de caisse qui répertorie chaque processus de paiement en est un exemple. Mais dans le grand livre général, seule la caisse actuelle, ou sa variation par rapport à la veille provenant du rapport financier, est prise en compte. Un autre exemple est le livre du compte courant, dans lequel les actifs et les passifs de chaque client et fournisseur sont répertoriés. Ainsi, alors que le journal montre l'évolution dans le temps des écritures, le grand livre général explique les comptes généraux ainsi que leur contenu. Le journal et les détails des comptes du grand livre général sont les deux piliers de la comptabilité.</p>
            </div>
            <div className="test_text">
                <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                <h3>
                    Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                    l'outil de gestion idéal des PME.
                </h3>
                <Link to="/trial">Testez gratuitement</Link>                <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
            </div>      <BTTButton/>

        <Footer/>

        </>
    );
}

export default JournalExplaination;
