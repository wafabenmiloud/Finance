import React from 'react';
import './Bvr.css';
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import image from '../../assets/icons/bvr img.png';
import { BsCheckLg } from "react-icons/bs";
import BTTButton from "../../components/BTTButton/BTTButton";




const Bvr = () => {
    return (
        <>
            <Navbar />
            <div className="bvr">
                <div className="stock_header bvr_header">
                    <h1>
                        <span>Bulletin de versement (BVR)</span>  intégré aux factures et envoi par e-mail
                    </h1>
                    <p>Avec Faji, remplissez et envoyez vos bulletins de versement suisse en quelques clics*.</p>
                    <Link to="/trial">
                        Testez gratuitement
                    </Link>

                </div>{" "}
            </div>
            <div className="bvr_section1">
                <h3>Créer et remplir des bulletins de versement ne devrait pas être une tâche fastidieuse et chronophage. Un logiciel de comptabilité pour PME et start-up comme Faji vous permet de créer en ligne et en toute simplicité des factures avec bulletin de versement, et ce à moindre coût. Vous pouvez ainsi imprimer vos factures avec le bulletin de versement correspondant et les envoyer par la poste ou tout simplement par e-mail au format PDF.</h3>
                <p>Découvrez ci-dessous pourquoi il est particulièrement intéressant de créer vos bulletins de versement en ligne.</p>
            </div>
            <div className="bvr_section2">
                <Row className="green" title="Plus d'informations sur les bulletins de versement suisses pour les PME et les start-up" text1="Que vous imprimiez vos BVR ou que vous les envoyiez par e-mail, l'utilisation d'un logiciel vous rendra la tâche bien plus facile" text2="Comment remplir un bulletin de versement vierge ?" text3="Remplir automatiquement un modèle de bulletin de versement suisse dans Faji" img={image} />
            </div>
            <div className="bvr_section3">
                <h2>Que vous imprimiez ou envoyiez vos bulletins de versement avec numéro de référence (BVR) par e-mail, l'utilisation d'un logiciel vous permettra de le faire plus rapidement et facilement.</h2>
                <p>Vous pouvez remplir vos bulletins de versement avec numéro de référence (BVR) de plusieurs manières:</p>
                <ul>
                    <li>Votre banque ou Postfinance vous fournit des bulletins de versement pré-imprimés partiellement remplis</li>
                    <li>Vous remplissez à la main des bulletins de versement vierges</li>
                    <li>Votre logiciel de facturation génère automatiquement des bulletins de versement pré-remplis: vous n'avez plus qu'à les imprimer et à les envoyer par courrier, ou tout simplement à les transmettre par e-mail au format PDF.</li>
                </ul>
                <h2>L'information la plus importante figurant sur un bulletin de versement : le numéro de référence (BVR)</h2>
                <p>Le numéro de référence est l'information la plus importante d'un bulletin de versement – qu'il s'agisse d'un bulletin pré-imprimé, imprimé par vous, ou d'un modèle vierge.</p>
                <p>Le numéro de référence comporte 27 chiffres. Vous devez l'inscrire à la main, à moins que vous n'utilisiez un logiciel de comptabilité qui le génère automatiquement.</p>
                <p> À partir du moment où votre banque ou PostFinance vous transmet un avis de crédit, vous disposez des informations suivantes:</p>
                <ul>
                    <li>Numéro de référence du bulletin de versement</li>
                    <li>Date du versement</li>
                    <li>Montant du versement</li>
                </ul>
                <p>En revanche, vous ne disposez PAS du nom de la personne ayant effectué le paiement. Que le bulletin de versement soit pré-imprimé ou imprimé par vos soins, le nom du payeur doit être transmis à l'aide du numéro de référence. L'utilisation d'un logiciel de comptabilité présente ici un grand avantage. En effet, celui-ci associe automatiquement les noms et les numéros de référence, ce qui vous évite d'avoir à le faire manuellement – une tâche longue et fastidieuse. Ainsi, vous savez toujours précisément si des factures ont été réglées ou non.</p>
                <p> Un logiciel de comptabilité prend également en charge les tâches suivantes:</p>

            </div>
            <div className="cards_bvr">
                <CardRv span="Intégration automatique" title=" du numéro de référence aux bulletins de versement BVR" text="Les numéros de référence figurant sur les bulletins de versement BVR sont classés par ordre croissant. Le nom du payeur ne figure pas sur l'avis de crédit que vous transmet votre banque (seul le numéro de référence est indiqué): par conséquent, si vous utilisez des bulletins de versement pré-imprimés, il est essentiel d'associer manuellement (dans un fichier Excel par exemple) les numéros de référence à 27 chiffres et les noms des payeurs afin d'avoir une vue d'ensemble de vos paiements entrants et de les saisir correctement par la suite. Si vos bulletins de versement sont générés par un logiciel, cette étape manuelle n'est pas nécessaire: les noms et les numéros de référence sont automatiquement associés et les rapprochements ultérieurs sont également effectués de façon automatique, ce qui permet d'éviter les erreurs de frappe et les fautes d'inattention." />
                <CardNr title="des postes non soldés" span="Rapprochement automatique" text="Un logiciel de comptabilité comme Faji permet de rapprocher en quelques clics les numéros de référence et le montant des crédits: il n'est plus nécessaire de rapprocher manuellement vos opérations bancaires et votre comptabilité, une tâche aussi chronophage que fastidieuse. Si un crédit correspond au montant de la facture associé, celui-ci est comptabilisé comme encaissement et le statut de la facture passe automatiquement à «Payée». Si le montant réglé par le client est plus élevé que celui de la facture, Faji crédite automatiquement la différence sur le compte du client. Découvrez comment fonctionne le rapprochement de vos transactions bancaires avec Faji dans la vidéo ci-contre." />
                <CardRv span="Création de factures" title="  avec BVR en quelques clics" text="Vous passez beaucoup de temps à établir vos factures à la main? Un logiciel de comptabilité vous permet de générer des factures avec des bulletins de versement associés en toute simplicité. Vous pouvez ensuite les imprimer et les envoyer par la poste ou les transmettre par e-mail au format PDF" />
                <CardNr title=" des débiteurs" span="Contrôle automatique" text="Quelles factures ont été payées? Quels paiements sont encore dûs? Un logiciel de comptabilité comme Faji se charge de fermer automatiquement les comptes débiteurs lorsque les paiements associés sont crédités sur votre compte: vous n'avez plus à vérifier ni à modifier manuellement le statut de vos factures." />
                <CardRv span="Pas de charge administrative supplémentaire" title="  en cas de rappel" text="Lorsqu'une facture n'est pas réglée à temps, il peut être nécessaire d'envoyer une relance accompagnée d'un nouveau bulletin de versement. Si vous utilisez un bulletin de versement pré-imprimé, vous devez inscrire manuellement deux numéros de référence différents afin de garantir la cohérence de vos comptes. Ici aussi, l'utilisation d'un logiciel vous évite d'avoir à créer des rappels et des bulletins de versement. Le rapprochement ultérieur des crédits avec vos postes non soldés est également pris en charge automatiquement." />
            </div>
            <div className="bvr_section4">
                <h3>Remplir un bulletin de versement suisse: comment un logiciel vous facilite la tâche</h3>
                <ul>
                    <li>Vos bulletins de versement remplis en toute simplicité: vous n'avez plus à remplir vos bulletins à la main, la quasi totalité de cette tâche est prise en charge automatiquement par le logiciel.</li>
                    <li>Créez facilement vos factures en ligne et imprimez-les ou transmettez-les par e-mail au format PDF</li>
                    <li> Vous n'avez plus à noter manuellement les numéros de référence, les noms associés et les montant correspondants: ceux-ci sont associés automatiquement et enregistrés dans le logiciel.</li>
                    <li>Vous pouvez consulter à tout moment le statut de vos factures.</li>
                    <li>Les comptes débiteurs correspondants aux factures payées sont automatiquement fermés.</li>
                    <li>Les postes non soldés peuvent être rapprochés automatiquement via votre e-banking.</li>
                </ul>

            </div>
            <div className="bvr_section5">
                <h2>Comment remplir un bulletin de versement vierge?</h2>
                <p>Champs à remplir sur un bulletin de versement vierge avec numéro de référence (BVR):</p>
                <ul>
                    <li>Compte: Numéro de compte du bénéficiaire</li>
                    <li>Montant: Montant du versement</li>
                    <li>Numéro de référence: Numéro de référence à 27 chiffres. Les champs restants à gauche doivent être remplis avec des zéros.</li>
                    <li>Versé par: Adresse du client</li>
                    <li>En faveur de: Adresse du bénéficiaire</li>
                </ul>
                <h5>Remarque: Lorsque vous créez votre bulletin de versement BVR avec Faji, les champs mentionnés ci-dessus sont remplis automatiquement.</h5>
                <p>Champs à remplir sur un bulletin de versement vierge sans numéro de référence (BV):</p>
                <ul>
                    <li>Compte: Numéro de compte du bénéficiaire</li>
                    <li>Montant: Montant du versement</li>
                    <li> Commentaire/Motif versement (facultatif)</li>
                    <li>Versé par: Adresse du client</li>
                    <li>En faveur de: Adresse du bénéficiaire</li>
                </ul>
                <h5>Remarque:  Lorsque vous créez votre bulletin de versement BV avec Faji, certains des champs mentionnés ci-dessus sont remplis automatiquement.</h5>
            </div>
            <div className="bvr_section6">
                <h3>Remplir automatiquement un modèle de bulletin de versement suisse dans Faji</h3>
                <p>Avec Faji, la création de factures avec bulletin de versement est on ne peut plus simple. <br /> <br /> Vous souhaitez configurer la procédure BVR pour votre compte bancaire ou postal? Il vous suffit d'enregistrer une seule fois votre compte dans la section Banking de Faji. La configuration nécessite seulement votre identifiant BESR ainsi que votre numéro d'adhérent, tous deux fournis par votre banque. <br /> <br /> La mise en place de la procédure BVR se fait en une seule fois. Par la suite, la plupart des tâches sont effectuées automatiquement. Les données telles que votre adresse, le numéro de référence et la ligne de codage sont générées automatiquement par Faji et intégrées au bulletin de versement. Vous économisez ainsi un temps précieux – en particulier lorsque vous travaillez avec des volumes importants. <br /> <br /> En outre, vous pouvez choisir d'imprimer les bulletins de versement ou de les transmettre par e-mail au format PDF.</p>
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

            <Footer />

        </>
    );
}

export default Bvr;



const Row = ({ className, title, text1, text2, text3, img }) => {
    return (
        <div className="row_normal">
            {" "}
            <div className="row_normal_img">
                <div className={className}></div>
                <div className='photo_sales_start'>
                    <img src={img} alt="img" />
                </div>
            </div>
            <br />
            <div className="row_normal_lines">
                <h2>
                    <span>{title}</span>
                </h2>

                <Line className="line_normal" text={text1} />
                <Line className="line_normal" text={text2} />
                <Line className="line_normal" text={text3} />

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