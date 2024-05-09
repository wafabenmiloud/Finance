import React from 'react';
import './Faji_commerce.css';
import arrowDown from '../../assets/images/arrow down header.svg'
import Ratingswhitebg from '../../components/ratings_white_bg/Ratings_white_bg';
import Test from '../../components/test/Test';
import Testimonials from '../../components/testimonials/Testimonials';
import ToggleLine from '../../components/toggle_line/Toggle_line';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import cart from '../../assets/commerce/cart commer.svg'
import rocket from '../../assets/commerce/rocket commerce.svg'
import gear from '../../assets/commerce/gear commerce.svg'
import chat from '../../assets/commerce/chat commerce.svg'
import { BsCheckLg } from "react-icons/bs";
import row1 from "../../assets/row1.png";
import row2 from "../../assets/row2.png";
import row3 from "../../assets/row3.png";
import checkBlack from '../../assets/icons/black check.svg'
import checkBlue from '../../assets/icons/check white.svg'
import BTTButton from "../../components/BTTButton/BTTButton";



const FajiCommerce = () => {
    return (
        <>
            <Navbar/>
            <CommerceHeader title=" en créant votre propre boutique en ligne" span="Boostez vos ventes" paragraph="Créez votre propre boutique en ligne en quelques minutes et vendez vos produits sur Internet en toute simplicité. Commencez par ouvrir un compte Faji gratuit, puis activez Faji Commerce (essai gratuit de 30 jours)." icon1={cart} icon2={rocket} icon3={gear} icon4={chat} cardTitle1="La boutique en ligne idéale" cardTitle2="Démarrez en quelques clics" cardTitle3="Aide à la configuration" cardTitle4="Nous sommes à votre service" text1="Une boutique en ligne professionnelle dès le départ: avec toutes les options de paiement suisses habituelles – notamment avec intégration d’une section de paiement pour les cartes de crédit et/ou Twint. Connexion possible avec la Poste suisse, Galaxus, Google Shopping, etc." text2="Idéal pour tous les nouveaux venus: ouvrez votre propre boutique en ligne en quelques minutes. Avec votre propre nom de domaine, des modèles de conception personnalisables et une interface intégrée vers le logiciel de gestion Faji¹." text3="Pour gagner un temps précieux et vous consacrer à ce que vous aimez vraiment faire: si vous le souhaitez, nous pouvons configurer votre boutique en ligne pour vous et vous montrer comment la gérer de manière optimale en fonction de vos besoins." text4="Nous tenons à proposer à nos utilisateurs une offre d’assistance entièrement gratuite. Que vous ayez des questions ou un besoin d'assistance urgent: contactez-nous par téléphone, par chat ou par e-mail, ou visitez notre portail d'assistance accessible 24h/24 et 7j/7." title2="Avec Faji Commerce, ouvrir votre boutique en ligne devient un jeu d'enfant" paragraph2 ="De la configuration au design en passant par le marketing – laissez-vous guider!"/>
            <div className="cards_sales">
                <Row className="green" title='Gagnez du temps: créez votre boutique en ligne en quelques minutes' body="Avec Faji Commerce, lancez votre boutique en ligne rapidement et facilement:" text1="Aucunes connaissances informatiques ne sont nécessaires, votre boutique est prête à l'emploi en quelques étapes seulement." text2="Votre boutique en version multilingue (DE/FR/EN/IT), un atout sur le marché suisse." text3="Possibilité de choisir votre propre nom de domaine – pour soigner votre image professionnelle." img={row1} />
                <RowRev className="blue" title="Choisissez le design qui vous correspond" body="Donnez à votre boutique en ligne un look unique:" text1="Choisissez parmi des modèles de mise en page et de design de qualité professionnelle." text2="Couleurs, polices, logo… tout est personnalisable." text3="Votre design personnel complète une structure fiable et performante adoptée par de nombreuses boutiques en ligne de premier plan dans toute la Suisse." img={row2} />

                <Row className="green" title="Boostez votre chiffre d'affaires: gestion, vente et livraison des produits optimisées" body="Avec Faji Commerce, vous allez adorer vendre vos produits:" text1='Gérez facilement vos produits: créez des produits en quelques clics et catégorisez-les par variante ou caractéristique.' text2="Boostez vos ventes grâce au cross-selling et aux moyens de paiement suisses (cartes de crédit, Twint, ApplePay, GooglePay, BobInvoice, Postfinance et plus encore)." text3="L’expédition se fait en quelques clics grâce à la connexion à la Poste Suisse, DHL, DPD ou même au dropshipping.." img={row3} />
                <RowRev1 className="blue" title="Des outils marketing de pointe pour votre boutique en ligne" body="Atteignez votre groupe cible et assurez le succès de votre boutique en ligne:" text1="Profitez de modules complémentaires et d'intégrations, y compris l'interface Galaxus et l'intégration de Google Shopping." text2="Suivez le comportement des utilisateurs de manière ciblée grâce à Google Analytics." text3="Optimisez votre SEO pour plus de visiteurs via la recherche Google." text4="Certificat SSL pour la sécurité et la fiabilité." img={row2} />

                <Row className="green" title="Synchronisation automatique avec le traitement des commandes et la comptabilité" body="Faji Commerce complète¹ le logiciel de gestion Faji et offre ainsi une solution tout-en-un optimale pour les indépendants, les petites entreprises et les startups en Suisse:" text1='Les commandes, les clients et les articles sont automatiquement synchronisés entre Faji et votre boutique en ligne Faji Commerce.' text2="Les factures sont générées automatiquement puis correctement comptabilisées dans la comptabilité." text3="De l'achat à la vente sur votre boutique en ligne, en passant par la comptabilité: tout sur une seule plateforme." img={row3} />
            </div>
            <div id='commerce_pricing' className="section2_pricing">
                <div className="pricing1">
                    <h3>Commerce Starter</h3>
                    <p>Le forfait de base</p>
                    <h5 className="price_pricing1">seul  .&nbsp; <span style={{ fontSize: 35 }}><b>CHF 89 </b></span> &nbsp;.- /mois²</h5>
                    <p></p>
                    <ul>
                        <li><img src={checkBlue} alt="img" /><h5><b>250 produits, 25 catégories, 1 administrateur</b></h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Boutique en ligne</b> avec votre propre domaine</h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Connexion Faji</b> intégrée</h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Paiement en ligne</b> par carte de crédit et via Twint, ApplePay, GooglePay, BobInvoice, Postfinance, etc.</h5></li>
                        <li><img src={checkBlue} alt="img" />Assistance gratuite</li>
                        <li><img src={checkBlue} alt="img" />Gammes et caractéristiques produits</li>
                        <li><img src={checkBlue} alt="img" />Filtres produits et promotions</li>
                        <li><img src={checkBlue} alt="img" />Solution multilingue DE/FR/EN/IT (boutique, produits, SEO, etc.)</li>
                        <li><img src={checkBlue} alt="img" />40% de réduction sur toutes les applications saldia – connexion à Galaxus, POS, dropshipping, etc.</li>
                    </ul>
                    <a className='open_account_commerce1' href="/">Ouvrir un compte et tester gratuitement </a>
                    <div className="bottom_commerce_pricing">
                        
                        <p></p>
                        <b>Déja client? Connectez-vous et lancez-vous</b>
                    
                    </div>



                </div>
                <div className="pricing2 pricing2_commerce">
                    <div className="appreciated_pricing">
                        <h4>Bestseller</h4>
                    </div>
                    <div className="pricing2_inside pricing2">
                        <h3>Commerce Pro</h3>
                        <p>Le forfait standard</p>
                        <h5 className="price_pricing2">seul  .&nbsp; <span style={{ fontSize: 35 }}><b>CHF 109</b></span>&nbsp;  .- /mois²</h5>
                        

                        <p></p>
                        <ul>
                            <li><img src={checkBlack} alt="img" /><h5><b>500 produits, 50 catégories, 2 administrateurs</b></h5></li>
                            <li><img src={checkBlack} alt="img" /><h5><b>Boutique en ligne </b>avec votre propre domaine</h5></li>
                            <li><img src={checkBlack} alt="img" /><h5><b>Connexion Faji</b> intégrée</h5></li>
                            <li><img src={checkBlack} alt="img" /><h5><b>Paiement en ligne</b> par carte de crédit et via Twint, ApplePay, GooglePay, BobInvoice, Postfinance, etc.</h5></li>
                            <li><img src={checkBlack} alt="img" />Assistance gratuite</li>
                            <li><img src={checkBlack} alt="img" />Gammes et caractéristiques produits</li>
                            <li><img src={checkBlack} alt="img" />Filtres produits et promotions</li>
                            <li><img src={checkBlack} alt="img" />Solution multilingue DE/FR/EN/IT (boutique, produits, SEO, etc.)</li>
                            <li><img src={checkBlack} alt="img" />Groupes de clients</li>
                            <li><img src={checkBlack} alt="img" />Combinaisons d'articles (cross-selling)</li>
                            <li><img src={checkBlack} alt="img" />Gestion des rôles (administrateurs)</li>
                            <li><img src={checkBlack} alt="img" />Application logistique (Post, DPD ou DHL) incluse</li>
                            <li><img src={checkBlack} alt="img" />50% de réduction sur toutes les applications saldia – connexion à Galaxus, POS, dropshipping, etc.</li>
                        </ul>
                        <a className='open_account_commerce' href="/">Ouvrir un compte et tester gratuitement </a>
                        <div className="bottom_commerce_pricing">
                        
                            <p></p>
                            <b>Déja client? Connectez-vous et lancez-vous</b>
                    
                       </div>

                    </div>
                </div>
                <div className="pricing1 pricing1_last">
                    <h3>Commerce Pro+</h3>
                    <p>Le forfait complet</p>
                    <h5 className="price_pricing1">seul  . &nbsp;<span style={{ fontSize: 35 }}><b>CHF 129</b></span> &nbsp; .- /mois²</h5>
                    <p></p>
                    <ul>
                        <li><img src={checkBlue} alt="img" /><h5><b>Produits, catégories et administrateurs illimités</b></h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Boutique en ligne</b> avec votre propre domaine</h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Connexion Faji</b> intégrée</h5></li>
                        <li><img src={checkBlue} alt="img" /><h5><b>Paiement en ligne</b> par carte de crédit et via Twint, ApplePay, GooglePay, BobInvoice, Postfinance, etc.</h5></li>
                        <li><img src={checkBlue} alt="img" />Assistance gratuite</li>
                        <li><img src={checkBlue} alt="img" />Gammes et caractéristiques produits</li>
                        <li><img src={checkBlue} alt="img" />Filtres produits et promotions</li>
                        <li><img src={checkBlue} alt="img" />Solution multilingue DE/FR/EN/IT (boutique, produits, SEO, etc.)</li>
                        <li><img src={checkBlue} alt="img" />Produits, catégories et administrateurs illimités</li>
                        <li><img src={checkBlue} alt="img" />Gestion des rôles (administrateurs)</li>
                        <li><img src={checkBlue} alt="img" />Application logistique (Post, DPD ou DHL) incluse</li>
                        <li><img src={checkBlue} alt="img" />Application Google Shopping incluse</li>
                        <li><img src={checkBlue} alt="img" />60% de réduction sur toutes les applications saldia – connexion à Galaxus, POS, dropshipping, etc.</li>

                    </ul>
                    <a className='open_account_commerce1' href="/">Ouvrir un compte et tester gratuitement </a>
                    <div className="bottom_commerce_pricing">
                        
                    <p></p>
                    <b>Déja client? Connectez-vous et lancez-vous</b>
                    
                    </div>

                </div>

            </div>
            <div className='seperating_line_commerce' >
                <br />
                <hr  />
                <p>  1. Pour pouvoir utiliser Faji Commerce, vous devez d'abord ouvrir un compte Faji. Déjà client Faji? Connectez-vous et activez Faji Commerce dès maintenant! <br /> 2. Prix valable en cas de facturation annuelle. La durée de votre forfait Faji Commerce correspond à celle de votre package Faji (facturation annuelle ou mensuelle). En cas de facturation mensuelle, Faji Commerce Starter est facturé CHF 99/mois, Faji Commerce Pro CHF 119.-/mois et Faji Commerce Pro+ CHF 139.-/mois.</p>
            </div>
            <div className="faq faq_commerce">
            <h2>FAQ : Les réponses à toutes vos questions concernant la gestion d'une boutique en ligne</h2>
            <ToggleLine title="Pourquoi ai-je besoin d'un compte Faji pour créer une boutique en ligne avec Faji Commerce?" details="Faji Commerce est une extension du logiciel de gestion Faji. En tant que telle, elle requiert la création préalable d'un compte Faji. Une fois votre compte créé, vos commandes, vos clients et vos articles sont automatiquement synchronisés entre Faji et votre boutique en ligne Faji Commerce. Si vous êtes déjà client Faji, il vous suffit d'activer Faji Commerce dans votre compte Faji."  />
            <ToggleLine title="A quoi correspond l'offre d’essai gratuit pendant 30 jours?" details="Vous pouvez tester Faji gratuitement et sans engagement pendant 30 jours, sans limite de fonctionnalités (package Pro+) et sans avoir à enregistrer de carte de crédit. Aucun téléchargement ni installation n'est nécessaire. Le logiciel est opérationnel en quelques étapes. Après l'expiration des 30 jours d’essai, votre compte test est automatiquement désactivé, aucune résiliation n'est nécessaire."  />
            <ToggleLine title="Quels sont les aspects juridiques à prendre en compte lors de la création d'une boutique en ligne en Suisse?" details="En Suisse, une boutique en ligne doit comporter un certain nombre d'informations juridiques comme les conditions générales de vente, la déclaration de politique de confidentialité ou encore les mentions légales. Si vous créez votre boutique en ligne avec Faji Commerce, ces pages juridiques sont déjà créées – vous êtes donc paré sur le plan juridique. Notez également que pour pouvoir vendre des produits, vous devez avoir inscrit votre entreprise au registre du commerce local."  />
            <ToggleLine title="Combien coûte une boutique en ligne avec Faji Commerce?" details="Faji Commerce est disponible uniquement en tant qu'extension du logiciel de gestion Faji (cliquez ici pour consulter nos différents forfaits). Faji et Faji Commerce constituent ensemble un package complet et optimal qui combine votre boutique en ligne avec la gestion des commandes et la comptabilité. C'est une solution parfaitement adaptée aux indépendants, aux petites entreprises et aux start-ups suisses. Tout est inclus, il n'y a aucuns frais cachés: la configuration de votre boutique ne nécessite aucune compétence informatique, l'hébergement est inclus et le support client par téléphone, chat ou e-mail est totalement gratuit."  />
            <ToggleLine title="Est-il possible d'utiliser mon propre domaine avec Faji Commerce?" details="Bien sûr, vous pouvez tout à fait utiliser votre propre nom de domaine avec Faji Commerce. Vous renforcez ainsi l'image de marque de votre entreprise."  />
            <ToggleLine title="Dois-je créer ma boutique en ligne moi-même?" details="Vous pouvez configurer vous-même votre boutique en ligne avec Faji Commerce en seulement quelques étapes. La configuration se fait en toute simplicité et aucune connaissance informatique n'est nécessaire grâce aux modèles de design et de mise en page. Si vous le souhaitez, nous pouvons également configurer votre boutique en ligne pour vous et vous montrer ensuite comment l'utiliser de manière optimale."  />
            
        </div>
        <Testimonials title="Ce que disent " span="nos clients"/>
        <Ratingswhitebg/>
        <Test/>      <BTTButton/>

        <Footer/>
            
            

        </>
    );
}

export default FajiCommerce;


const CommerceHeader =({title,span,paragraph,icon1,icon2,icon3,icon4,cardTitle1,cardTitle2,cardTitle3,cardTitle4,text1,text2,text3,text4,title2,paragraph2}) => {
    return(
        <>
            <div className="header1">
            <div className="header1_test">
                <h1><span style={{color:'#25A7FF'}}>{span}</span>{title}</h1>
                <p style={{width:'50%', margin:'2% auto'}}>{paragraph}</p>
                <a href="/" className='header_btn_commerce'>Ouvrir un compte et tester gratuitement </a>
                <a href="/" className='header_btn_commerce'>Déjà client? Connectez-vous et lancez-vous</a>
            </div>
            <div className="header1_advantages">
                <h2>Vos avantages <img src={arrowDown} alt="img" /></h2>
                <div className="header1_cards">
                    <div className="header1_card">
                        <img alt="img" src={icon1} className="header1_card_icon"></img>
                        <h3>{cardTitle1}</h3>
                        <p>{text1}</p>
                    </div>
                    <div className="header1_card">
                        <img alt="img" src={icon2} className="header1_card_icon"></img>
                        <h3>{cardTitle2}</h3>
                        <p>{text2}</p>
                    </div><div className="header1_card">
                        <img alt="img" src={icon3} className="header1_card_icon"></img>
                        <h3>{cardTitle3}</h3>
                        <p>{text3}</p>
                    </div><div className="header1_card">
                        <img alt="img" src={icon4} className="header1_card_icon"></img>
                        <h3>{cardTitle4}</h3>
                        <p>{text4}</p>
                    </div>
                </div>
                
            </div>
            <div className="header1_question">
                <h2> {title2}</h2>
                <p>{paragraph2}</p>
            </div>
        </div>
        </>
    )
}
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
const RowRev1 = ({ className, title, body, text1, text2, text3, text4,  img }) => {
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

