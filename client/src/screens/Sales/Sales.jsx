import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Sales.css'
import { BsCheckLg } from "react-icons/bs";
import row1 from "../../assets/row1.png";
import row2 from "../../assets/row2.png";
import row3 from "../../assets/row3.png";
import row4 from "../../assets/row4.png";
import bag from '../../assets/icons/bag header.svg'
import calendar from '../../assets/icons/calendar header.svg'
import person from '../../assets/icons/person header.svg'
import employee from '../../assets/icons/employee.svg'
import Header1 from '../../components/header1/Header1';
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import ToggleLine from '../../components/toggle_line/Toggle_line';
import BTTButton from "../../components/BTTButton/BTTButton";

const Sales = () => {
    return (
        <div>
            <Navbar />
            <Header1 span="Processus de vente" title=", gestion des dépenses et plus encore" paragraph="De l'offre à la facture – un traitement des commandes simple et professionnel pour votre entreprise." icon1={bag} icon2={calendar} icon3={person} icon4={employee} cardTitle1="Simple" cardTitle2="Clair" cardTitle3="Personnalisé" cardTitle4="Professionnel" text1="Une facturation facile à traiter – quel que soit votre secteur d'activité." text2="Le traitement des commandes est clairement structuré, vous avez donc tout sous les yeux à tout moment." text3="Le traitement des commandes est clairement structuré, vous avez donc tout sous les yeux à tout moment." text4="Les fonctionnalités d'analyse vous permettent de mieux saisir les développements de votre entreprise." span2="Faji" title2=" et le traitement des commandes: comment ça marche ?" paragraph2="Le processus de vente tout comme la gestion des dépenses sont deux éléments essentiels au succès d'une entreprise. Avec Faji, tout devient à la fois plus simple et plus professionnel. Découvrez les fonctionnalités pratiques qui vont vous faciliter le travail au quotidien." />
            <div className="cards_sales">
                <Row className="green" title='Création de documents en quelques clics' body="Avec Faji, vendre et facturer des produits, des services ou des projets spécifiques devient un jeu d'enfant." text1='Vous pouvez facilement créer des devis, des commandes, des factures ou encore des notes de crédit.' text2="Un document peut être généré en quelques secondes: sélectionnez simplement un contact, un produit ou un service ou ajoutez des postes spécifiques." text3="Vous pouvez ensuite modifier les prix et les descriptions ou ajouter des remises." text4="Paramètres spécifiques aux documents - pour que vous puissiez travailler encore plus vite et plus facilement." text5="Grâce à notre système de suivi des temps, vous pouvez calculer des taux horaires individuels par client, employé, activité ou projet." img={row1} />
                <RowRev className="blue" title="Une vue d'ensemble à tout moment" body="Un traitement des commandes clair qui facilite votre travail au quotidien." text1="La vue de liste vous permet de voir à tout moment le statut de vos documents de vente (ouvert, accepté, rejeté, terminé ou niveaux de relance par exemple)." text2="Si un client accepte une offre, vous pouvez la convertir en commande, en facture ou en livraison en un clic. Vous gagnez ainsi un temps précieux!" text3="Pour les commandes récurrentes, vous pouvez consulter les abonnements en cours de vos clients et générer de manière automatique des factures périodiques." text4="Un produit vous est retourné ? Créez une note de crédit en quelques clics." text5="Définissez des délais de paiement et des niveaux de relance personnalisés. Si vous le souhaitez, Faji peut envoyer des rappels à vos clients par e-mail - dans votre propre mise en page, évidemment." img={row2} />

                <Row className="green" title="Impressionnez vos clients avec un design personnalisé" body="En soignant l'image de votre entreprise, vous ne manquerez pas de convaincre de nouveaux clients." text1='Modèles de documents personnalisables pour les offres, les commandes, les factures, les bulletins de livraison et plus encore.' text2="Définissez par exemple des polices spécifiques, des logos et des couleurs personnalisées." text3="Des modules de texte personnalisables (introduction et texte final) sont disponibles en plusieurs langues." text4="Envoyez des documents à vos clients par e-mail ou par courrier postal." text5="Utilisez vos propres modèles d'e-mails pour être au plus près de vos clients." img={row3} />
                <div className="row_reverse">
                    <div className="row_reverse_lines">
                        <h2>
                            <span>Des fonctionnalités d'analyse pour être encore plus professionnel</span>
                        </h2>
                        <h3>Gardez un œil sur tous les développements commerciaux grâce aux fonctionnalités d'analyse.</h3>
                        <Line className="line_reverse" text="Le tableau de bord clairement structuré vous permet d'avoir une bonne vue d'ensemble des processus dès que vous vous connectez."/>
                        <Line className="line_reverse" text="Avec notre analyse des ventes, vous pouvez exporter les données de vos documents de vente au format Excel pour une évaluation encore plus détaillée." />
                        <Line className="line_reverse" text="Vous avez également la possibilité de générer un relevé de compte avec les paiements reçus et les factures ouvertes pour chaque contact. Vous avez ainsi tous vos processus sous contrôle et pouvez informer clients et fournisseurs de leur solde actuel." />
                       
                    </div>
                    <div className="row_reverse_img">
                        <div className="blue"></div>
                        <div>
                            <img src={row4} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
            <h2>FAQ: Questions/Réponses concernant le traitement des commandes</h2>
            <ToggleLine title="Qu'est-ce que le traitement des commandes ?" details="Le traitement des commandes comprend tous les processus liés à une commande client, à partir de la prise de commande. C'est un élément de la gestion des commandes. Lors du traitement d'une commande, il est nécessaire de vérifier attentivement la commande du client, d'identifier des incohérences ou des problèmes éventuels et de planifier le calendrier de traitement."  />
            <ToggleLine title="Comment se déroule le traitement d'une commande ?" details="Le traitement d'une commande démarre dès qu'une offre est créée. En tant qu'élément de la gestion des commandes, il comprend toutes les activités qui doivent être réalisées depuis la demande initiale du client jusqu'à la facturation de sa commande."  />
            <ToggleLine title="En quoi consiste concrètement le traitement des commandes ?" details="Tout commence par la création de la commande. Il est recommandé de saisir dès le départ toutes les données importantes du client et de la commande. Le processus s'achève normalement avec la facturation de la commande, à moins que le client fasse une réclamation ou renvoie la marchandise, par exemple."  />
            
        </div>
            <Testimonials title="Ce que disent " span="nos clients"/>
            <Ratingswhitebg/>
            <Test/>
            <p className='sales_contact'>Avez-vous encore des questions  ? Appelez-nous : +216 71 808 862 <br />Si vous préférez nous écrire: contact@faji.com.tn </p>
            
            <BTTButton/>

            <Footer />

        </div>
    );
}

export default Sales;

const Row = ({ className, title, body, text1, text2, text3, text4, text5, img }) => {
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
                <Line className="line_normal" text={text5} />
            </div>
        </div>
    );
};
const RowRev = ({ className, title, body, text1, text2, text3, text4, text5, img }) => {
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
                <Line className="line_reverse" text={text4} />
                <Line className="line_reverse" text={text5} />
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

