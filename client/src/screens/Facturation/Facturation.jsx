import React from 'react';
import './Facturation.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";


const Facturation = () => {
    return (
        <>
            <Navbar />
            <div className="sections_facturation">
                <div className="stock_header bvr_header">
                    <h1>
                        <span>Facturation</span>
                    </h1>
                    <p>Toute votre facturation prise en charge par un logiciel!</p>
                    <Link to="/trial">
                        Testez gratuitement
                    </Link>

                </div>{" "}
                <div className="bvr_section1">
                    <h3>Créer et remplir des bulletins de versement ne devrait pas être une tâche fastidieuse et chronophage. Un logiciel de comptabilité pour PME et start-up comme Faji vous permet de créer en ligne et en toute simplicité des factures avec bulletin de versement, et ce à moindre coût. Vous pouvez ainsi imprimer vos factures avec le bulletin de versement correspondant et les envoyer par la poste ou tout simplement par e-mail au format PDF.</h3>
                    <p>Découvrez ci-dessous pourquoi il est particulièrement intéressant de créer vos bulletins de versement en ligne.</p>
                </div>
                <div className="section1_facturation">
                    <h2>La facture est un document d’usage courant. Une facture mentionne de nombreuses informations dont:</h2>
                    <ul>
                        <li>La prestation d’un fournisseur (quantité, type, date de la livraison)</li>
                        <li>La date d’émission de la facture</li>
                        <li>Un numéro de facture issu d’un système de comptage en continu</li>
                        <li>Le prix des biens livrés ou des prestations fournies</li>
                        <li>Le montant de la taxe sur la valeur ajoutée TVA (qui se calcule au moyen du taux de TVA en vigueur pour les biens ou prestations concernés)</li>
                    </ul>
                    <h2>Les factures donnent également des informations sur leur expéditeur, notamment:</h2>
                    <ul>
                        <li>Le nom de la société</li>
                        <li>Le numéro d’identification des entreprises</li>
                        <li>La forme juridique</li>
                        <li>L’inscription au Registre du commerce</li>
                        <li>La direction ou le conseil d’administration</li>
                        <li>Le conseil de surveillance</li>
                        <li>Les noms des associés (dans les sociétés de personnes), etc.</li>
                        <li>L’adresse</li>
                        <li>Le numéro de client du destinataire</li>
                        <li> Les conditions et modes de paiement</li>
                    </ul>
                    <h2>La facture sert à notifier le destinataire du paiement à effectuer, et sert de base à la comptabilisation de la transaction. Du côté de l’émetteur, elle est comptabilisée comme créance dans un compte débiteur. Le destinataire comptabilise la facture comme dette ouverte dans sa comptabilité fournisseurs.</h2>
                    <h5>Etablir sa facturation manuellement peut prendre beaucoup de temps et peut donner lieu à des erreurs. L'utilisation d'un logiciel de comptabilité s'avère très utile, en particulier pour les PME et les indépendants déjà surmenés. Un bon logiciel permet d'automatiser entièrement de nombreux processus. Cliquez ici pour en savoir plus!</h5>
                    <h2>Facturation: rédaction des factures</h2>
                    <p>La procédure de rédaction des factures est également appelée facturation. Au cours de cette procédure, toutes les informations indispensables à faire figurer sur une facture seront traitées. Ces informations comprennent des données sur le débiteur (client), le prix unitaire des biens ou des services fournis, éventuellement sur la base de tarifs dégressifs, les quantités livrées, les documents de commande et quelques autres détails. Cette opération fait intervenir en partie le service comptabilité (données débiteurs), la gestion des stocks (articles, prix unitaires) et éventuellement d’autres sources de données. En soi, la rédaction de la facture n’est pas une procédure   comptable. Une fois que la facture est émise, elle est comptabilisée. Cette tâche peut être de grande ampleur et mobiliser de nombreuses ressources, en fonction du nombre de clients. La plupart du temps, il est donc judicieux d’installer un logiciel de facturation pour gérer ces tâches, comme par exemple le logiciel de facturation Faji.</p>
                </div>
                <div className="bvr_section1 facturation_center">
                    <h3>Toute votre facturation en ligne, simplifiée et automatisée avec Faji</h3>
                    <p>Avec Faji, le logiciel de comptabilité pour les PME et les indépendants, vous contrôlez non seulement votre facturation, mais aussi l’ensemble de la gestion des commandes, des offres aux rappels de paiement automatiques en passant par l'établissement des factures – le tout en ligne et en toute simplicité. De plus, grâce à l'interface entre Faji et votre e-banking, vos factures émises et vos transactions bancaires sont automatiquement rapprochées. Vous vous épargnez ainsi un travail manuel long et fastidieux et dégagez plus de temps pour ce qui compte vraiment. Saisissez votre adresse e-mail et profitez de 30 jours d'essai gratuits sans engagement.</p>
                </div>
                <div className="facturation_test">
                    <h2>Toute votre facturation en ligne et en quelques clics</h2>
                    <a href="/">Testez Faji gratuitement et sans engagement pendant 30 jours</a>
                </div>
                <div className="section2_facturation">
                    <h3>Systèmes de gestion des marchandises et factures</h3>
                    <p>Les systèmes de gestion des marchandises représentent les procédures de livraisons et de flux des marchandises qui sont générées dans l’entreprise. La gestion des marchandises, ou des stocks, fait partie des tâches les plus importantes de l’entreprise, surtout dans les entreprises de production ou de commerce, et est déterminante pour son succès. La facturation dans les délais est un élément central de la gestion des stocks, car elle génère des recettes pour l’entreprise.<br /> Après avoir délivré une prestation, il est normal de facturer cette prestation au débiteur. Pour ce faire, une série d’informations sont indispensables, émanant de la gestion des commandes, de la gestion des stocks, de la comptabilité des comptes débiteurs et d’autres sources. Ces informations doivent être synthétisées lors de la rédaction de la facture. Dans de nombreuses entreprises, l’émission des factures est automatisée. Les factures sont émises par le système, et la plupart du temps envoyées par voie électronique, puis transmises directement à la comptabilité pour enregistrement, ou enregistrées automatiquement.<br /> L’une des tâches en matière de facturation est l’établissement de notes de crédit, ainsi que la gestion des rabais et escomptes. La gestion des créances y est liée de près. Elle prend en charge le suivi des paiements dans les délais et la constitution de provisions pour risques. Une partie du travail en matière de provisions pour risques consiste à compiler des informations sur la solvabilité des clients, pour éviter les défauts de paiement. Pour ce faire, on accède aux comptes débiteurs, mais aussi à des banques de données externes.</p>
                    <h3>Externalisation à des tiers</h3>
                    <p>Dans certaines sociétés, la facturation peut représenter un volume de travail considérable, avec plusieurs milliers de factures à émettre chaque jour. La plupart du temps, le procédé entier de facturation est externalisé à des sous-traitants, qui le prennent en charge de manière automatisée à l’aide d’un logiciel de facturation. Le prestataire externe recherche toutes les informations dont il a besoin dans les fichiers de gestion des stocks par voie électronique, émet les factures, les envoie, s’occupe de la gestion des créances et délivre des prestations hautement spécialisées à l’entreprise, contre honoraires. Avec le logiciel de facturation Faji, les PME et les startups peuvent gérer elles-mêmes ces procédures de manière simple et intuitive. Essayez Faji dès à présent, gratuitement et sans engagement pendant 30 jours et économisez du temps et de l’argent.</p>
                </div>

            </div>
            <div className="test_text">
                <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                <h3>
                    Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                    l'outil de gestion idéal des PME.
                </h3>
                <Link to="/">Testez Gratuitement</Link>
                <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
            </div>      <BTTButton/>

            <Footer />
        </>
    );
}

export default Facturation;
