import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './TimeLine.css'
import BTTButton from "../../components/BTTButton/BTTButton";

const TimeLine = () => {
    return (
        <>
            <Navbar />
            <div className="section1_timeline">
                <h1>La timeline de <span style={{ color: '#25A7FF' }}> Faji</span></h1>
                <p>Nous travaillons dur chaque jour pour vous faciliter la vie en tant que client et fiduciaire. Voici quelques-unes des plus grandes nouveautés sur lesquelles nous avons déjà déployées pour vous.</p>
            </div>
            <div className="section2_timeline">
                <h2>Actuellement</h2>
                <h4>Faji est mis en ligne: le logiciel est utilisé par ses premiers utilisateurs</h4>
                <p><b>La première pierre est posée! Avant même son lancement officiel, Faji est utilisé par un premier groupe de clients. Le logiciel de gestion basé sur le cloud est lancé. Il offre une première version du traitement des commandes Faji (contacts, produits, projets et ventes).</b></p>
            </div>
            <div className="section3_timeline">
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2023
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Les nouveautés Produit de notre CPO – Partie III</h2>
                        <p>Avez-vous toujours voulu jeter un coup d’œil aux coulisses du développement de produit? Notre CPO, Claudio Beltrametti, vous donne des aperçus intéressants. Dans cet article, nous vous présentons la lecture intelligente des reçus pour notre secteur des achats. Jusqu’à présent, vous pouviez bénéficier de la lecture des factures QR. Désormais, vous pouvez non seulement scanner les reçus et les justificatifs sans code QR, mais aussi les traiter automatiquement — rapidement et efficacement avec notre application «Faji Go».</p>
                        <h2>Faji Campus – Pour plus de simplicité dans votre travail quotidien</h2>
                        <p>Afin de mieux vous accompagner, vous et votre entreprise, et d'apporter davantage de simplicité à votre quotidien professionnel, nous avons créé Faji Campus. Mais en fait, de quoi s'agit-il exactement? Faji Campus rassemble toutes les connaissances relatives à Faji, vous offre de précieux conseils pour votre travail quotidien en tant qu'entrepreneur et regroupe toutes les formations que nous proposons.</p>
                        <h2>La croissance se poursuit: 60'000 clients payants font confiance à la solution suisse Faji</h2>
                        <p>L'année dernière, l'entreprise SaaS Faji a renforcé sa position de leader du marché en atteignant les 50'000 clients. Près de huit mois plus tard, un nouveau cap a été franchi : 60'000 indépendants, petites entreprises et startups font confiance à la solution suisse Faji. Près de 1300 partenaires comptables certifiés viennent s'ajouter à ce nombre. La modernisation de la solution est l'une des principales priorités de Faji. De nombreuses améliorations ont été initiées et mises en place ces derniers mois. Cela porte déjà ses fruits: «Nos clients voient les progrès et savent que nous travaillons dur chaque jour pour améliorer notre solution d'entreprise pour eux», déclare Markus Naef, CEO de Faji.</p>

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2022
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>La nouvelle liste de contacts – encore meilleure, encore plus personnalisée</h2>
                        <p>Bonne nouvelle pour tous les clients Faji et ceux qui veulent le devenir : Nous avons optimisé la liste de contacts ! Ne vous inquiétez pas, même après la modernisation technologique, elle fait toujours ce qu'elle doit faire : elle affiche un aperçu de vos contacts et vous aide à les gérer.Cependant, nous avons profité de l'occasion pour apporter des améliorations et rendre votre travail encore plus simple et intuitif : vous pouvez désormais configurer votre liste de contacts selon vos propres besoins. Tous les paramètres des colonnes sont enregistrés individuellement pour chaque utilisateur et sont conservés lorsque vous consultez à nouveau la liste de contacts.</p>
                        <h2>Facture QR et bLink</h2>
                        <p>L’introduction de la facture QR bat son plein dans toute la Suisse. Les derniers paiements par bulletins de versement seront exécutés le 30 septembre 2022. Toutes les factures doivent donc être envoyées avant la date limite de paiement. Pour les utilisateurs de Faji, la démarche est on ne peut plus simple: il vous suffit de configurer la facture QR en quelques clics dans le module bancaire.Le saviez-vous? Faji est désormais connecté à bLink. Nous serons ainsi en mesure de vous proposer à l’avenir des connexions avec les banques participantes de manière rapide, simple et fiable..</p>
                        <h2>Avec plus de 50'000 clients payants, Faji connait une forte croissance et s'affirme comme l'un des leaders du marché</h2>
                        <p>Plus de 50'000 petites entreprises, indépendants et start-ups font aujourd'hui confiance au logiciel de gestion suisse. Outre ces 50'000 clients payants, Faji compte plus de 1'000 comptables partenaires certifiés. «La croissance robuste de notre clientèle reflète la forte demande existante pour une solution cloud basée sur le web permettant de travailler facilement dans toutes les situations», note Markus Naef, CEO de Faji. Le rapport au travail a beaucoup évolué au cours des dernières années, et la nécessité de gagner en flexibilité s'est encore accrue. «Nous avons clairement identifié cette demande, c'est pourquoi nous améliorons en permanence nos logiciels d'entreprise et travaillons sans cesse à les rendre plus complets pour nos clients», estime Naef.</p>
                        <h2>Questions et réponses</h2>
                        <p>Qu'est-ce qui motive nos clients ? Dans le cadre de notre enquête régulière sur le NPS (Net Promoter Score - un indicateur qui renseigne sur la satisfaction de nos clients), nous nous sommes penchés de manière critique sur vos questions et vous apportons ici des réponses.</p>
                        <h2>Les nouveautés Produit de notre CPO – Partie II</h2>
                        <p>Qu'est-ce qui motive nos clients ? Dans le cadre de notre enquête régulière sur le NPS (Net Promoter Score - un indicateur qui renseigne sur la satisfaction de nos clients), nous nous sommes penchés de manière critique sur vos questions et vous apportons ici des réponses.</p>
                        <h2>Les nouveautés Produit de notre CPO – Partie II</h2>
                        <p>Que s'est-il passé en termes de développement de Produits ? Notre CPO Matthias Zürrer jette un œil dans les coulisses avec vous : découvrez-en plus dans la deuxième partie de notre série ic.</p>
                        <h2>Optimisation des processus créditeurs pour les comptables et les clients</h2>
                        <p>Saisissez, postez, et payez vos reçus et vos dépenses plus facilement et rapidement: sur une seule page, et en moins d’une minute. Le nouveau module Achats sera déployé progressivement: il est disponible immédiatement sur tous les comptes Faji nouvellement créés, et sera disponible ultérieurement sur les comptes existants également. Jetez un premier coup d'œil au nouveau module d'achat dans notre version de démonstration.</p>
                        <h2>Faji Commerce – Boostez vos ventes en créant votre propre boutique en ligne</h2>
                        <p>Créez votre boutique en ligne en quelques minutes et vendez vos produits sur Internet en toute simplicité. Profitez de nombreux outils pour mettre toutes les chances de votre côté. Idéal pour ceux qui veulent vendre plus.</p>

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2021
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Les nouveautés Produit de notre CPO – Partie I</h2>
                        <p>Vous avez toujours voulu voir ce qu'il se passe dans les coulisses du développement Produit? Notre CPO Mathias Zürrer vous y emmène: sur quoi avons-nous travaillé ces dernières mois afin d'améliorer encore Faji pour nos clients? Que mettons-nous en place afin de faciliter les processus de nos clients et d'améliorer les fonctionnalités? Tenez-vous informés en lisant la première partie de notre série ici.</p>


                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2020
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Nouveau plan comptable</h2>
                        <p>Créez et modifiez des comptes et des groupes de comptes dans le plan comptable en quelques clics. Grâce aux modèles simplifiés, les modifications du plan comptable sont moins nombreuses et moins compliquées à effectuer. L'importation Excel de modèles de plans comptables permet par ailleurs une configuration nettement plus rapide pour les professionnels. En outre, le nouveau plan comptable permet de faire le lien de manière plus transparente et plus simple entre des comptes bancaires et de la comptabilité.</p>
                        <h2>Nouveaux rapports bilan et compte de résultat</h2>
                        <p>Les nouveaux rapports bilan et compte de résultat sont disponibles en phase «Early Access». Une meilleure flexibilité et des analyses plus précises: la comparaison d'une année sur l'autre est optimisée grâce aux nouveaux filtres. Un exemple parmi d’autres: des comparaisons trimestrielles sont désormais possibles. Aussi les documents PDF sont plus clairs: le format d'impression a été optimisé. Les nouveaux PDF sont plus clairs, nécessitent moins d'espace et les filtres utilisés sont appliqués automatiquement.</p>
                        <h2>La QR-facture est arrivée: activez-la dès maintenant!</h2>
                        <p>Les utilisateurs de Faji sont parés pour la QR-facture! Celle-ci est prise en charge par Faji depuis fin juin. Activez-la dès maintenant dans votre compte Faji.</p>
                        <h2>Un envoi optimisé des e-mails depuis Faji</h2>
                        <p>L'une des idées les plus populaires: un envoi optimisé des e-mails depuis Faji permettant également l’envoi du document en pièce jointe au format PDF.</p>
                        <h2>Faji Go: l’application Faji pour vos déplacements – aujourd'hui et demain</h2>
                        <p>Suite à la création et au développement de l’app Contacts en 2019, nous vous proposons désormais Faji Go, qui combine nos deux précédentes applications mobiles («Scanner» et «Contacts») sous une nouvelle interface. De nouvelles fonctionnalités seront régulièrement intégrées à l’avenir. Utilisez Faji Go pour scanner et importer vos documents ou pour gérer vos contacts – en attendant l’arrivée de nouvelles fonctionnalités!</p>
                        <h2>TWINT, carte de crédit et autres modes de paiement</h2>
                        <p>Une nouvelle option de paiement en plus de Visa et MasterCard est désormais disponible: le paiement via TWINT – pour des factures payées plus rapidement et en toute sécurité.</p>


                    </div>

                </div><div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2019
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Un Faji toujours plus riche – pour les comptables également: une Marketplace d'applications pour les comptables</h2>
                        <p>Nous voulons faire de Faji un outil encore plus efficace pour les comptables. Au-delà de la comptabilité et des processus créditeurs, les comptables ont d’ores déjà la possibilité d’étendre les fonctionnalités de Faji: découvrez dans la Marketplace diverses applications conçues pour les comptables et permettant notamment de simplifier les inscriptions au registre du commerce ou la saisie du temps en ligne.</p>
                        <h2>App Contacts de Faji: recherchez, modifiez ou appelez vos clients où que vous soyez</h2>
                        <p>Une première version de l’app Contacts de Faji a été lancée début 2019. Nous l’avons amélioré suite à vos nombreux commentaires: désormais, l’app vous permet non seulement d’appeler et de consulter vos contacts, mais également de les modifier et d’en créer de nouveaux directement sur votre Smartphone.</p>
                        <h2>Feuilles de compte révisées</h2>
                        <p>Les feuilles de compte révisées sont plus claires et vous offriront de meilleures options de filtrage et d'exportation.</p>
                        <h2>Connexion avec l’e-banking de la BCV, SGKB et banque Valiant</h2>
                        <p>Après les interfaces avec l'e-banking de St.Galler Kantonalbank et de banque Valiant à l'été 2018, une interface avec la BCV (Banque Cantonale Vaudoise) est désormais également disponible. L’importation et l’exportation fastidieuses des relevés de compte électroniques ne seront ainsi plus nécessaires.</p>
                        <h2>Nouveau module d’importation des produits</h2>
                        <p>Le nouveau module d’importation des produits simplifiera grandement la gestion du catalogue de produits.</p>

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2018
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Exportation des données pour l'analyse des ventes</h2>
                        <p>Nous mettons à votre disposition un meilleur outil d’analyse des ventes. Identifiez rapidement vos meilleurs produits et clients et consultez la performance des ventes: Les données brutes sont facilement téléchargeables au format Excel pour un traitement ultérieur et une analyse plus approfondie.</p>
                        <h2>Comptabilisation automatique des salaires dans la comptabilité financière</h2>
                        <p>L'intégration de la comptabilité des salaires vous permet non seulement de transférer directement les versements de salaires à partir de Faji, mais aussi de comptabiliser automatiquement les salaires dans la comptabilité financière de Faji. Votre charge de travail administrative s’en trouvera ainsi diminuée.</p>
                        <h2>Tous les paiements transférés via les interfaces bancaires ont migré vers la nouvelle norme ISO</h2>
                        <p>En étroite collaboration avec les banques partenaires, nous faisons passer les interfaces bancaires à la nouvelle norme de paiement ISO 20022. Fin juin au plus tard, le transfert des paiements (y compris des versements de salaires) via le module bancaire de Faji se fera uniquement dans les nouveaux formats de fichiers.</p>
                        <h2>Partenariat avec l'Institut für Jungunternehmen: une offre de séminaires gratuits élargie</h2>
                        <p>Nous sommes fiers du travail en commun réalisé avec notre nouveau partenaire: après Swiss Life, UBS, Swisscom, Treuhand|Suisse, Credit Suisse et d'autres, Faji met en place un nouveau partenariat avec l'IFJ (Institut für Jungunternehmen). Grâce à cette collaboration, les entrepreneurs sont encore mieux soutenus lors de la création de leur entreprise, et les clients Faji peuvent prendre part à de très nombreux séminaires gratuits sur des thèmes centraux comme la comptabilité.</p>

                    </div>

                </div><div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2017
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Plus de flexibilité pour les comptables</h2>
                        <p>Une solution dédiée pour les comptables, particulièrement appréciée des clients confiant la tenue de leur comptabilité financière et leur comptabilité des salaires à un comptableFaji.</p>
                        <h2>Rapprochement automatique des transactions bancaires grâce à l’ISO 20022</h2>
                        <p>Le nouveau standard de paiement permet d’automatiser les processus: les transactions BVR concernées sont automatiquement rapprochées.</p>
                        <h2>Faji à nouveau élue «meilleure start-up technologique suisse»</h2>
                        <p>Comme en 2016, le jury du «Top 100 Startup Award» a élu Faji «meilleure start-up technologique suisse».</p>
                        <h2>Une comptabilité des salaires plus simple et efficace avec Faji</h2>
                        <p>La comptabilité des salaires fastidieuse sous Excel, c’était hier! Avec Faji, il est désormais possible de traiter les salaires clairement, efficacement et en toute simplicité. Début 2018, la comptabilité des salaires de Faji est certifiée Swissdec, disponible en trois langues et d’ores et déjà utilisée par de nombreux utilisateurs du logiciel. De nouvelles fonctionnalités et améliorations seront bientôt mises en place.</p>
                        <h2>La plateforme Faji ne cesse de s'agrandir: Advanon est déjà la 10e extension disponible</h2>
                        <p>Avec Advanon, vous pouvez faire préfinancer vos factures à partir de Faji et optimiser ainsi votre trésorerie. Ce nouvel add-on fait de Faji un logiciel toujours plus flexible et complet. D’autres extensions sont en cours de développement.</p>
                        <h2>Nouveau masque d'écriture manuelle</h2>
                        <p>Le masque d’écritures manuelles de Faji a été largement revu: nouvelles fonctionnalités, groupes d'écritures, écritures collectives… Faji a satisfait l’une des demandes les plus récurrentes au sein de la communauté des utilisateurs.</p>
                        <h2>Synchronisez vos transactions bancaires avec l'une des 5 plus grandes banques suisses</h2>
                        <p>Avec la mise en place d’une connexion avec l’e-banking de Credit Suisse, Faji propose désormais des interfaces avec les cinq plus grandes banques suisses: Credit Suisse, PostFinance, Zürcher Kantonalbank, Raiffeisen et UBS. D'autres institutions financières seront bientôt connectées au logiciel.</p>

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2016
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Un éditeur de documents plus flexible</h2>
                        <p>Les fonctions existantes de l’éditeur ont également été améliorées: créer des offres, des commandes et des factures dans une mise en page et un design personnalisés devient un véritable jeu d’enfant. Le nouvel éditeur de document répond à de nombreux besoins exprimés par les utilisateurs du logiciel: des fonctionnalités plus nombreuses et intuitives vous permettent désormais d’éditer vos documents sans la moindre difficulté.</p>
                        <h2>Un traitement des documents comptables plus efficace et plus mobile</h2>
                        <p>Avec l’appli Scanner de Faji, la tenue de votre comptabilité devient encore plus simple: tous vos documents comptables sont classés et archivés gratuitement par l’application. Scannez une note de frais avec votre Smartphone, téléchargez-la à partir de l’appli, enregistrez-la… et c’est tout! Que vous teniez vous-même votre comptabilité ou fassiez appel à un fiduciaire, les processus sont optimisés.</p>

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2015
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Une première en Suisse: Faji connecté à l’e-banking d'UBS</h2>
                        <p>Une innovation 100% suisse: en coopération avec notre partenaire UBS, Faji met en place une connexion entre le logiciel et l’e-banking d'UBS afin d’automatiser le rapprochement des transactions bancaires. Les ordres de paiement peuvent être transmis depuis le logiciel à l’e-banking en un clic, ce qui permet aux utilisateurs de Faji de s’épargner un travail manuel chronophage. L'exportation et l'importation des relevés de compte électroniques n’ont également plus lieu d’être.</p>
                        <h2>La collaboration entre comptables et clients encore plus simplifiée</h2>
                        <p>Faji ne facilite pas seulement la collaboration en ligne entre clients et comptables: le répertoire des comptables associés au logiciel permet aux utilisateurs de Faji de trouver facilement un comptableprès de chez eux. La collaboration entre clients et comptables s’en trouve ainsi grandement simplifiée. En plus de bien connaître le logiciel, les comptables certifiés Faji vous accompagnent dans le cadre de la gestion de votre comptabilité (y compris de la comptabilité des salaires) et peuvent répondre à vos questions en matière de fiscalité.</p>
                        

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2014
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Grâce à Faji, la comptabilité devient un jeu d’enfant</h2>
                        <p>Le logiciel ne simplifie pas seulement l’établissement des devis et des factures des petites entreprises: il leur permet également de tenir facilement leur comptabilité. Son efficacité en fait un outil incontournable pour toutes les PME.</p>
                        

                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='green_year'>2013
                            <span className='year_line'>
                                <div className="timeline_circle_green">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_green2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Faji a été officiellement fondé</h2>
                        <p>Faji, alors connu sous le nom d’easySYS, a été officiellement fondé dans le but de développer un logiciel de bureautique professionnel pour les PME.</p>
                        
                    </div>

                </div>
                <div className="timeline_card">
                    <div className="timeline_year">
                        <h5 className='blue_year'>2012
                            <span className='year_line'>
                                <div className="timeline_circle_blue">

                                </div>
                                <div className="timeline_line">

                                </div>
                                <div className="timeline_circle_blue2">

                                </div>
                            </span>
                        </h5>



                    </div>
                    <div className="timeline_text">
                        <h2>Faji est mis en ligne: le logiciel est utilisé par ses premiers utilisateurs</h2>
                        <p>La première pierre est posée! Avant même son lancement officiel, Faji est utilisé par un premier groupe de clients. Le logiciel de gestion basé sur le cloud est lancé. Il offre une première version du traitement des commandes Faji (contacts, produits, projets et ventes).</p>
                        

                    </div>

                </div>
            </div>      <BTTButton/>

            <Footer />
        </>
    );
}

export default TimeLine;

