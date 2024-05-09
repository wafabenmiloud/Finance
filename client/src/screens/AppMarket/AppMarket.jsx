import React from "react";
import "./AppMarket.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import img1 from "../../assets/market_imgs/market_img1.svg";
import img2 from "../../assets/market_imgs/market_img2.svg";
import img3 from "../../assets/market_imgs/market_img3.svg";
import img4 from "../../assets/market_imgs/market_img4.svg";
import img5 from "../../assets/market_imgs/market_img5.svg";
import img6 from "../../assets/market_imgs/market_img6.svg";
import img7 from "../../assets/market_imgs/market_img7.svg";
import img8 from "../../assets/market_imgs/market_img8.svg";
import img9 from "../../assets/market_imgs/market_img9.svg";
import img10 from "../../assets/market_imgs/market_img10.svg";
import img11 from "../../assets/market_imgs/market_img11.svg";
import img12 from "../../assets/market_imgs/market_img12.svg";
import img13 from "../../assets/market_imgs/market_img13.svg";
import img14 from "../../assets/market_imgs/market_img14.svg";
import img15 from "../../assets/market_imgs/market_img15.svg";
import img16 from "../../assets/market_imgs/market_img16.svg";
import img17 from "../../assets/market_imgs/market_img17.svg";
import img18 from "../../assets/market_imgs/market_img18.svg";
import img19 from "../../assets/market_imgs/market_img19.svg";
import img20 from "../../assets/market_imgs/market_img20.svg";
import img21 from "../../assets/market_imgs/market_img21.svg";
import img22 from "../../assets/market_imgs/market_img22.svg";
import img23 from "../../assets/market_imgs/market_img23.svg";
import img24 from "../../assets/market_imgs/market_img24.svg";
import img25 from "../../assets/market_imgs/market_img25.svg";
import img26 from "../../assets/market_imgs/market_img26.svg";
import img27 from "../../assets/market_imgs/market_img27.svg";
import img28 from "../../assets/market_imgs/market_img28.svg";
import img29 from "../../assets/market_imgs/market_img29.svg";
import img30 from "../../assets/market_imgs/market_img30.svg";
import img31 from "../../assets/market_imgs/market_img31.svg";
import img32 from "../../assets/market_imgs/market_img32.svg";
import img33 from "../../assets/market_imgs/market_img33.svg";
import img34 from "../../assets/market_imgs/market_img34.svg";
import img35 from "../../assets/market_imgs/market_img35.svg";
import img36 from "../../assets/market_imgs/market_img36.svg";
import img37 from "../../assets/market_imgs/market_img37.svg";
import img38 from "../../assets/market_imgs/market_img38.svg";
import img39 from "../../assets/market_imgs/market_img39.svg";
import img40 from "../../assets/market_imgs/market_img40.svg";
import img41 from "../../assets/market_imgs/market_img41.svg";
import img42 from "../../assets/market_imgs/market_img42.svg";
import img43 from "../../assets/market_imgs/market_img43.svg";
import img44 from "../../assets/market_imgs/market_img44.svg";
import img45 from "../../assets/market_imgs/market_img45.svg";
import img46 from "../../assets/market_imgs/market_img46.svg";
import img47 from "../../assets/market_imgs/market_img47.svg";
import img48 from "../../assets/market_imgs/market_img48.svg";
import img49 from "../../assets/market_imgs/market_img49.svg";
import img50 from "../../assets/market_imgs/market_img50.svg";
import img51 from "../../assets/market_imgs/market_img51.svg";
import img52 from "../../assets/market_imgs/market_img52.svg";
import img53 from "../../assets/market_imgs/market_img53.svg";
import img54 from "../../assets/market_imgs/market_img54.svg";
import img55 from "../../assets/market_imgs/market_img55.svg";
import img56 from "../../assets/market_imgs/market_img56.svg";
import img57 from "../../assets/market_imgs/market_img57.svg";
import img58 from "../../assets/market_imgs/market_img58.svg";
import img59 from "../../assets/market_imgs/market_img59.svg";
import img60 from "../../assets/market_imgs/market_img60.svg";
import img61 from "../../assets/market_imgs/market_img61.svg";
import img62 from "../../assets/market_imgs/market_img62.svg";
import img63 from "../../assets/market_imgs/market_img63.svg";
import img64 from "../../assets/market_imgs/market_img64.svg";
import img65 from "../../assets/market_imgs/market_img65.svg";
import img66 from "../../assets/market_imgs/market_img66.svg";
import img67 from "../../assets/market_imgs/market_img67.svg";
import img68 from "../../assets/market_imgs/market_img68.svg";
import img69 from "../../assets/market_imgs/market_img69.svg";
import img70 from "../../assets/market_imgs/market_img70.svg";
import img71 from "../../assets/market_imgs/market_img71.svg";
import search from "../../assets/icons/search.svg";
import pricetag from "../../assets/market_imgs/pricetag.svg";
import filter from "../../assets/market_imgs/filter.svg";
import rocket from "../../assets/market_imgs/rocket.svg";
import Insider from "../../components/insider/Insider";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function AppMarket() {
  return (
    <>
      <Navbar />
      <div id="market_trial">
        <h1>
          <span>Faji</span> App Marketplace
        </h1>
        <h2>
          Découvrez des applications pour étendre les fonctionnalités de Faji.
          Vous n'êtes pas encore client Faji ?
        </h2>
        <Link to="/trial" className="btn_market">
          Testez gratuitement
        </Link>
      </div>
      <div className="market_search_bar">
        <div className="market_input_field1">
          <img src={search} alt="img" />
          <input type="text" placeholder="Recherche" />
        </div>
        <div className="market_input_field">
          <img src={pricetag} alt="img" />
          <input type="text" placeholder="Choisir une catégorie" />
        </div>
        <div className="market_input_field">
          <img src={filter} alt="img" />
          <input type="text" placeholder="Sélectionner le filtre de prix" />
        </div>
      </div>
      <div className="market_spotlight">
        <h1>Spotlight App</h1>
        <div className="market_spotlight_card">
          <div>
            <h1>RESTORE-IT Backup</h1>
            <p>
              «Désolé, j'ai supprimé accidentellement les reçus de cette
              semaine, veuillez s'il vous plaît, les saisir à nouveau . . .» Si
              vous voulez vous protéger d'erreurs de manipulations: Avec la
              sauvegarde RESTORE-IT pour Faji, les données, documents et
              contacts de Faji peuvent être sauvegardés et exportés de manière
              ciblée dans un centre de données suisse . Vos données, documents
              et contacts de Faji seront sauvegardés automatiquement avec une
              transmission cryptée, lesquels pouront être conservés jusqu'à 10
              ans .
            </p>
            <h4>Tester maintenant</h4>
          </div>
          <div>
            <img src={rocket} alt="img" />
          </div>
        </div>
      </div>
      <div className="market_cards">
        <div>
          <h4 className="app_market_title">Nouveau</h4>
          <div className="grid">
            <MarketCard
              img={img1}
              title="Offre exclusive Sunrise Business pour l'Internet haut débit"
              body="30% de réduction sur les abonnements Internet: Profitez du Smart Wifi gratuit et d'offres exclusives pour aider votre entreprise à se développer avec Sunrise Business  ."
              percentage="à partir de 30% de rabais"
            />
            <MarketCard
              img={img1}
              title="Offre exclusive Sunrise Business pour le mobile"
              body="40% de réduction sur le mobile: Profitez des meilleures solutions de communication et des offres exclusives pour aider votre entreprise à se développer avec Sunrise Business   ."
              percentage="40% de rabais"
            />
            <MarketCard
              img={img2}
              title="swiDOC - l'archive numérique"
              body="swiDOC permet aux PME d'archiver de manière efficace et conforme à la législation tous les documents liés à leur activité  . De plus, des intégrations avec Faji ou One Drive ainsi qu'une interface API ouverte sont disponibles  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img3}
              title="PrivacyBee - la déclaration de confidentialité sécurisée pour votre site web"
              body="En cinq minutes seulement, nous générons automatiquement une mise en œuvre conforme à la loi suisse sur la protection des données, avec des mises à jour régulières  . Rédigé et contrôlé par des avocats suisses expérimentés pour la sécurité juridique  ."
              percentage="à partir de 30% de rabais"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Populaire</h4>
          <div className="grid">
            <MarketCard
              img={img4}
              title="Faji Commerce"
              body="Créez votre boutique en ligne en quelques minutes et vendez vos produits sur Internet en toute simplicité  . Profitez de nombreux outils pour mettre toutes les chances de votre côté  . Idéal pour booster vos ventes  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img5}
              title="Clockodo"
              body="Logiciel de gestion du temps qui permet d'enregistrez vos temps de travail et de projet, d'établir des rapports et de facturer vos clients facilement  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img6}
              title="Worldline Schweiz AG"
              body="Avec Worldline Schweiz AG, proposez à vos clients de régler leurs factures via TWINT, Visa ou MasterCard  . Pour des paiements plus rapides, sans frais de dossier ni frais mensuels !"
              percentage="1,5% + CHF 0  .30 /transaction"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Gestion des contacts & CRM</h4>
          <div className="grid">
            <MarketCard
              img={img7}
              title="HubSpot"
              body="Synchronisez les données entre Faji et HubSpot sans saisie manuelle des données ni importations fastidieuses et chronophages  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img8}
              title="Faji Pipedrive Connector App"
              body="Réduisez le travail manuel et concentrez-vous sur les tâches importantes en transférant automatiquement les informations de Faji à Pipedrive et de Pipedrive à Faji avec l'application Faji Pipedrive Connector  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img9}
              title="XfleX pour peintres"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration allégée: CRM, traitement des commandes avec catalogues, saisie des heures, contrôle des horaires selon ASEPP et plus encore  .  .  ."
              percentage="à partir de CHF 149 / mois"
            />
            <MarketCard
              img={img9}
              title="XfleX bâtitech"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration efficace: CRM, traitement des offres avec catalogues IGH, objets, installations, contrats de maintenance, planification  ."
              percentage="à partir de CHF 199  .- /mois"
            />
            <MarketCard
              img={img10}
              title="wwcom smart call"
              body="wwcom est la solution de communication idéale pour votre PME  . Flexible, adaptable à vos besoins et optimisée pour le marché suisse des PME - elle est hébergée en Suisse et est parfaitement intégrée à Faji  ."
              percentage="à partir de CHF 30  .- /mois"
            />
            <MarketCard
              img={img11}
              title="Swiss Newsletter"
              body="Envoyez des lettres d'information professionnelles directement à vos contacts depuis Faji  . Vous bénéficiez de la fiabilité de livraison du leader du marché suisse de l'email marketing  . Mieux encore: jusqu'à 200 e-mails par mois sont gratuits !"
              percentage="Gratuit"
            />
            <MarketCard
              img={img12}
              title="Mesurer la satisfaction des clients"
              body="Obtenez des informations précieuses sur le degré de satisfaction de vos clients à l'égard des services de votre entreprise grâce à une enquête continue auprès de vos clients  . En outre, vous apprenez si et comment vous pouvez encore améliorer vos services  . Vous disposez ainsi d'une base importante pour votre réussite future  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img13}
              title="mailXpert"
              body="La solution d'e-mail marketing leader en Suisse pour les volumes d'envoi élevés et l'automatisation du marketing  . Reliez mailXpert directement à Faji et envoyez des newsletters hautement personnalisées  ."
              percentage="à partir de CHF 1'590  .- /an"
            />
            <MarketCard
              img={img14}
              title="eCall Business Messaging"
              body="Des solutions de messagerie pour votre entreprise: Comment joindre vos clients par SMS, fax, e-mail ou message vocal  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img15}
              title="Faji Go"
              body="Faji on the go: Scannez et enregistrez automatiquement vos reçus et factures QR grâce à l'application mobile Faji Go  . Vous pouvez également utiliser Faji Go pour enregistrer vos temps de travail, consulter vos factures et gérer vos contacts lors de vos déplacements  . Téléchargez gratuitement l'application sur iOS et Android dès maintenant !"
              percentage="Gratuit"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">
            Protection des données & sécurité
          </h4>
          <div className="grid">
            <MarketCard
              img={img16}
              title="PrivacyBee - la déclaration de confidentialité sécurisée pour votre site web"
              body="En cinq minutes seulement, nous générons automatiquement une mise en œuvre conforme à la loi suisse sur la protection des données, avec des mises à jour régulières  . Rédigé et contrôlé par des avocats suisses expérimentés pour la sécurité juridique  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img17}
              title="RESTORE-IT Backup"
              body="«Désolé, j'ai supprimé accidentellement les reçus de cette semaine, veuillez s'il vous plaît, les saisir à nouveau  .  .  .» Si vous voulez vous protéger d'erreurs de manipulations: Avec la sauvegarde RESTORE-IT pour Faji, les données, documents et contacts de Faji peuvent être sauvegardés et exportés de manière ciblée dans un centre de données suisse  . Vos données, documents et contacts de Faji seront sauvegardés automatiquement avec une transmission cryptée, lesquels pouront être conservés jusqu'à 10 ans  ."
              percentage="Tester maintenant"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Achat et Dépenses</h4>
          <div className="grid">
            <MarketCard
              img={img18}
              title="ebidtopay - Logiciel d'achat"
              body="Avec la solution SaaS, vous bénéficiez d'un soutien numérique pour tous vos achats:
Réduisez les prix grâce aux enchères d'achat  .
Gagnez du temps grâce aux appels d'offres en ligne et aux commandes sur catalogue  .
Améliorez la qualité grâce à l'évaluation des fournisseurs  .
Évitez les risques grâce à la création numérique de contrats  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img19}
              title="2getHR"
              body="2getHR complète Faji dans la numérisation complète des processus RH:

Enregistrement du temps
Gestion des dépenses
Gestion des vacances
Interviews des employés"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img20}
              title="AMNIS"
              body="Votre compte d'entreprise international:
comptes locaux en EUR, GBP, USD et CAD à votre nom pour envoyer et recevoir de l'argent dans le monde entier ainsi que des cartes de débit virtuelles et physiques multidevises pour vous et votre équipe   .
Achetez et vendez plus de 50 devises au meilleur taux  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img21}
              title="SPESEN  .AI - Comptabilité automatisée"
              body="Débarrassez-vous du papier et des entrées de données manuelles et laissez-nous faire le travail pour vous  ! Avec SPESEN  .AI, vous pouvez non seulement automatiser vos dépenses et la saisie de vos factures, mais aussi la comptabilisation des charges à payer et des amortissements  . 100% hosted et made in Switzerland  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img22}
              title="Triboni"
              body="Les factures entrantes et dépenses peuvent être reçues par courrier électronique, par l'application mobile FajiGo et depuis un scanner  . Elles sont automatiquement reconnues, téléchargées sur Faji et archivées dans une archive Olico certifiée dans un cloud suisse  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img23}
              title="wechselstube  .ch"
              body="Profitez des meilleurs taux de change de Suisse  . Simple  . Fiable  . Toutes les devises principales  . Parfaitement adapté au paiement de factures en devises étrangères et pour se prémunir des variations de change  ."
              percentage="Compte gratuit"
            />
            <MarketCard
              img={img24}
              title="Faji Go"
              body="Faji on the go: Scannez et enregistrez automatiquement vos reçus et factures QR grâce à l'application mobile Faji Go  . Vous pouvez également utiliser Faji Go pour enregistrer vos temps de travail, consulter vos factures et gérer vos contacts lors de vos déplacements  . Téléchargez gratuitement l'application sur iOS et Android dès maintenant !"
              percentage="Gratuit"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Ventes et Marketing</h4>
          <div className="grid">
            <MarketCard
              img={img25}
              title="eTermin"
              body="eTermin est un planificateur de rendez-vous en ligne intelligent pour une prise de rendez-vous en ligne efficace, une gestion des clients et un marketing ciblé  . eTermin fait gagner énormément de temps et augmente les ventes  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img26}
              title="Digital Knowledge Off Page SEO Management"
              body="Mettez votre site web en réseau sur Internet grâce à un outil de gestion des connaissances  . Vous poussez votre site web via le Knowledge Graph (Schema  .org) dans les annonces de recherche organique  . Vous optimisez votre classement organique  . Vous analysez votre environnement de marché et les termes de recherche  . Vous agissez via les canaux de médias sociaux avec vos clients et vous gérez et organisez votre gestion de la réputation  ."
              percentage="à partir de CHF 78  .- /mois"
            />
            <MarketCard
              img={img9}
              title="XfleX pour peintres"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration allégée: CRM, traitement des commandes avec catalogues, saisie des heures, contrôle des horaires selon ASEPP et plus encore  .  .  ."
              percentage="à partir de CHF 149 / mois"
            />
            <MarketCard
              img={img9}
              title="XfleX bâtitech"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration efficace: CRM, traitement des offres avec catalogues IGH, objets, installations, contrats de maintenance, planification  ."
              percentage="à partir de CHF 199  .- /mois"
            />
            <MarketCard
              img={img27}
              title="Saisissez des offres sur place"
              body="entriesErkunden
Vous êtes artisan et vous souhaitez saisir vos devis directement chez le client et les transférer sur Faji   ?
Moins de temps au bureau, plus de temps pour vos projets !"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img28}
              title="Guichet Poursuites-Plus"
              body="entriesErkundenGérez vous-même vos procédures de poursuite par voie électronique en contact direct avec l'office des poursuites — rapide, simple, automatisé  . La transmission de données s'effectue par le raccordement de Faji  . Vous économisez du temps et des efforts  . Plus: la première poursuite est gratuite  ."
              percentage="à partir de CHF 15  .-"
            />
            <MarketCard
              img={img29}
              title="Swiss Newsletter"
              body="Envoyez des lettres d'information professionnelles directement à vos contacts depuis Faji  . Vous bénéficiez de la fiabilité de livraison du leader du marché suisse de l'email marketing  . Mieux encore: jusqu'à 200 e-mails par mois sont gratuits !"
              percentage="Gratuit"
            />
            <MarketCard
              img={img20}
              title="AMNIS"
              body="Votre compte d'entreprise international: comptes locaux en EUR, GBP, USD et CAD à votre nom pour envoyer et recevoir de l'argent dans le monde entier ainsi que des cartes de débit virtuelles et physiques multidevises pour vous et votre équipe  . Achetez et vendez plus de 50 devises au meilleur taux  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img30}
              title="Mesurer la satisfaction des clients"
              body="Obtenez des informations précieuses sur le degré de satisfaction de vos clients à l'égard des services de votre entreprise grâce à une enquête continue auprès de vos clients  . En outre, vous apprenez si et comment vous pouvez encore améliorer vos services  . Vous disposez ainsi d'une base importante pour votre réussite future  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img31}
              title="mailXpert"
              body="La solution d'e-mail marketing leader en Suisse pour les volumes d'envoi élevés et l'automatisation du marketing  . Reliez mailXpert directement à Faji et envoyez des newsletters hautement personnalisées  ."
              percentage="à partir de CHF 1'590  .- /an"
            />
            <MarketCard
              img={img32}
              title="eCall Business Messaging"
              body="Des solutions de messagerie pour votre entreprise: Comment joindre vos clients par SMS, fax, e-mail ou message vocal  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img33}
              title="Pingen"
              body="Vos envois postaux simplifiés: envoyez des documents tels que des offres et des factures au format papier  . Pingen transmet vos documents à une imprimerie qui se charge de l'impression et de l'expédition  ."
              percentage="Gratuit à installer"
            />
            <MarketCard
              img={img34}
              title="PepperShop"
              body="Boostez les ventes de vos produits sur votre propre boutique en ligne  . PepperShop est un logiciel d'e-commerce suisse complet et flexible, doté d'une interface complète avec votre compte Faji  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img35}
              title="Advanon"
              body="Advanon est la première plateforme de financement grâce à laquelle les entreprises peuvent transformer leurs factures ouvertes en liquidités  . Simple, flexible, rapide et possible directement via Faji  ."
              percentage="Gratuit à installer"
            />
            <MarketCard
              img={img36}
              title="Worldline Schweiz AG"
              body="Avec Worldline Schweiz AG, proposez à vos clients de régler leurs factures via TWINT, Visa ou MasterCard  . Pour des paiements plus rapides, sans frais de dossier ni frais mensuels !"
              percentage="1,5% + CHF 0  .30 /transaction"
            />
            <MarketCard
              img={img37}
              title="SumUp by BedayaConnect"
              body="Synchronisez vos ventes et vos paiements par carte directement dans Faji via SumUp  . Vous économisez ainsi un travail manuel fastidieux  . Vous évitez les erreurs et vous avez à tout moment une vue d'ensemble complète  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img38}
              title="wechselstube  .ch"
              body="Profitez des meilleurs taux de change de Suisse  . Simple  . Fiable  . Toutes les devises principales  . Parfaitement adapté au paiement de factures en devises étrangères et pour se prémunir des variations de change  ."
              percentage="Compte gratuit"
            />
            <MarketCard
              img={img39}
              title="Arvato Financial Solutions (recouvrement)"
              body="Le recouvrement des factures impayées implique beaucoup d'efforts  . Avec le recouvrement de créances, vous confiez ce travail à un spécialiste et augmentez ainsi les chances de recevoir votre argent rapidement  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img40}
              title="Leadinfo"
              body="Grâce à cette intégration, vous pouvez facilement relier Leadinfo à Faji  . Leadinfo identifie les visiteurs anonymes de votre site web pour vous aider à augmenter vos revenus  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img41}
              title="SMAILD par Deidis"
              body="Envoyez des documents par courrier postal directement depuis Faji ou depuis votre courrier électronique  . Améliorer le processus de relance en envoyant vos lettres de relance automatiquement par courrier postal  . SMAILD est une application cloud scalable qui utilise le nouveau service Pingen pour imprimer et envoyer des documents par courrier physique à l'adresse indiquée sur la première page du PDF - Gagnez du temps !"
              percentage="Tester maintenant"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Boutiques en ligne et POS</h4>
          <div className="grid">
            <MarketCard
              img={img34}
              title="PepperShop"
              body="Boostez les ventes de vos produits sur votre propre boutique en ligne  . PepperShop est un logiciel d'e-commerce suisse complet et flexible, doté d'une interface complète avec votre compte Faji  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img42}
              title="WooCommerce Faji Automator"
              body="Automatisez les processus commerciaux et minimisez les tâches administratives avec WooCommerce Faji Automator  !"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img43}
              title="SumUp by BedayaConnect"
              body="Synchronisez vos ventes et vos paiements par carte directement dans Faji via SumUp  . Vous économisez ainsi un travail manuel fastidieux  . Vous évitez les erreurs et vous avez à tout moment une vue d'ensemble complète  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img34}
              title="Prestashop by BedayConnect"
              body="Synchronisez les clients, les produits et les commandes de PrestaShop directement avec Faji et BedayaConnect  . Vous économisez ainsi un travail manuel fastidieux  . Vous évitez les erreurs et vous avez à tout moment une vue d'ensemble complète  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img44}
              title="Shopify by BedayaConnect"
              body="Connectez votre boutique Shopify à Faji et épargnez-vous des heures de travail manuel ! Synchronisez vos clients, produits et commandes Shopify avec Faji et BedayaConnect  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img40}
              title="Leadinfo"
              body="Grâce à cette intégration, vous pouvez facilement relier Leadinfo à Faji  . Leadinfo identifie les visiteurs anonymes de votre site web pour vous aider à augmenter vos revenus  ."
              percentage="Tester maintenant"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Projets et saisie de temps</h4>
          <div className="grid">
            <MarketCard
              img={img45}
              title="WERK8 - Gestion des garages automobiles"
              body="WERK8 aide les garages à gagner de l'argent en permettant aux mécaniciens de travailler de manière productive et sans être dérangés dans leur espace de travail  . Et bien sûr, WERK8 rend aussi le bureau efficace  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img46}
              title="Traak"
              body="Traak est un logiciel de gestion du temps, simple d'utilisation, conçu spécifiquement pour les entreprises du secteur de la construction  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img25}
              title="eTermin"
              body="eTermin est un planificateur de rendez-vous en ligne intelligent pour une prise de rendez-vous en ligne efficace, une gestion des clients et un marketing ciblé  . eTermin fait gagner énormément de temps et augmente les ventes  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img9}
              title="XfleX pour peintres"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration allégée: CRM, traitement des commandes avec catalogues, saisie des heures, contrôle des horaires selon ASEPP et plus encore  .  .  ."
              percentage="à partir de CHF 149 / mois"
            />
            <MarketCard
              img={img9}
              title="XfleX bâtitech"
              body="Votre solution spécialisée avec toutes les fonctions dont vous avez besoin pour une administration efficace: CRM, traitement des offres avec catalogues IGH, objets, installations, contrats de maintenance, planification  ."
              percentage="à partir de CHF 199  .- /mois"
            />
            <MarketCard
              img={img27}
              title="Saisissez des offres sur place"
              body="entriesErkunden
Vous êtes artisan et vous souhaitez saisir vos devis directement chez le client et les transférer sur Faji   ?
Moins de temps au bureau, plus de temps pour vos projets !"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img47}
              title="tik-tak"
              body="tik-tak, l'application de suivi du temps (temps de travail, temps de projet, absences et gestion des vacances)  . Facile et rapide pour les employés et les managers, avec analyse et synchronisation avec Faji  . Développé en coordination avec Faji  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img19}
              title="2getHR"
              body="2getHR complète Faji dans la numérisation complète des processus RH:
              Enregistrement du temps
              Gestion des dépenses
              Gestion des vacances
              Interviews des employés"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img5}
              title="Clockodo"
              body="Logiciel de gestion du temps qui permet d'enregistrez vos temps de travail et de projet, d'établir des rapports et de facturer vos clients facilement  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img48}
              title="Work2Report"
              body="Work2Report permet une exploitation simple, rapide et exacte de la saisie détaillée des temps de travail  . Work2Report amplifie Faji de rapports détaillés du temps de travail comprenant les soldes horaires et l'export au format PDF  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img15}
              title="Faji Go"
              body="Faji on the go: Scannez et enregistrez automatiquement vos reçus et factures QR grâce à l'application mobile Faji Go  . Vous pouvez également utiliser Faji Go pour enregistrer vos temps de travail, consulter vos factures et gérer vos contacts lors de vos déplacements  . Téléchargez gratuitement l'application sur iOS et Android dès maintenant !"
              percentage="Gratuit"
            />
            <MarketCard
              img={img49}
              title="Squadra"
              body="Le logiciel pour les entreprises de travail en équipe  . Grâce à la demande automatique de disponibilité, à la planification intuitive des équipes, à la saisie des temps intégrée et au contrôle du temps de travail, vous doublez votre efficacité en matière de gestion du personnel  ."
              percentage="à partir de CHF 0  .09 / heure tracée"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">
            Gestion des produits et des stocks
          </h4>
          <div className="grid">
            <MarketCard
              img={img45}
              title="WERK8 - Gestion des garages automobiles"
              body="WERK8 aide les garages à gagner de l'argent en permettant aux mécaniciens de travailler de manière productive et sans être dérangés dans leur espace de travail  . Et bien sûr, WERK8 rend aussi le bureau efficace  ."
              percentage="Tester maintenant"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Analyse et Rapports</h4>
          <div className="grid">
            <MarketCard
              img={img2}
              title="swiDOC - l'archive numérique"
              body="swiDOC permet aux PME d'archiver de manière efficace et conforme à la législation tous les documents liés à leur activité  . De plus, des intégrations avec Faji ou One Drive ainsi qu'une interface API ouverte sont disponibles  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img50}
              title="TRESIO"
              body="TRESIO est le cockpit numérique de gestion des liquidités pour les entreprises suisses  . Grâce à la connexion avec Faji, la planification des flux de trésorerie est entièrement automatisée  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img48}
              title="Work2Report"
              body="Work2Report permet une exploitation simple, rapide et exacte de la saisie détaillée des temps de travail  . Work2Report amplifie Faji de rapports détaillés du temps de travail comprenant les soldes horaires et l'export au format PDF  ."
              percentage="Tester maintenant"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Comptabilité</h4>
          <div className="grid">
            <MarketCard
              img={img51}
              title="eBill de io-market AG"
              body="Avec la solution automatisée d'io-market, les factures peuvent être envoyées aux clients sous forme d'eBill directement à partir du compte Faji existant !"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img52}
              title="Qlerqs - RobotComptable"
              body="Vous souhaitez comptabiliser vos factures facilement   ? Le RobotComptable lit, enregistre et attribue automatiquement un compte à votre facture dans Faji  . Vous n'avez qu'à la vérifier et l'approuver  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img53}
              title="Fixed Assets"
              body="Automatisez la comptabilité des immobilisations et les amortissements pour Faji - économisez du temps, de l'argent et des nerfs  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img53}
              title="Accruals"
              body="Automatisez la régularisation pour Faji - économisez du temps, de l'argent et des nerfs  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img54}
              title="PagiTron - Comptabilité intelligente"
              body="Adieu la chasse aux reçus manquants et la comptabilisation manuelle de vos revenus et dépenses dans Faji  . Grâce à la technologie de reconnaissance optique, les informations sont automatiquement extraites et enregistrées, ce qui vous permet de mieux contrôler votre temps et vos coûts administratifs  .
"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img53}
              title="Importateur CSV - carte de crédit / Revolut"
              body="Comptabiliser et comptabiliser automatiquement plus de 100 transactions par carte de crédit/Revolut en 5 minutes    ?

L'importateur CSV d'Accrio rend cela possible - économisez du temps, de l'argent et des nerfs  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img21}
              title="SPESEN  .AI - Comptabilité automatisée"
              body="Débarrassez-vous du papier et des entrées de données manuelles et laissez-nous faire le travail pour vous  ! Avec SPESEN  .AI, vous pouvez non seulement automatiser vos dépenses et la saisie de vos factures, mais aussi la comptabilisation des charges à payer et des amortissements  . 100% hosted et made in Switzerland  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img55}
              title="Triboni"
              body="Les factures entrantes et dépenses peuvent être reçues par courrier électronique, par l'application mobile FajiGo et depuis un scanner  . Elles sont automatiquement reconnues, téléchargées sur Faji et archivées dans une archive Olico certifiée dans un cloud suisse  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img15}
              title="Faji Go"
              body="Faji on the go: Scannez et enregistrez automatiquement vos reçus et factures QR grâce à l'application mobile Faji Go  . Vous pouvez également utiliser Faji Go pour enregistrer vos temps de travail, consulter vos factures et gérer vos contacts lors de vos déplacements  . Téléchargez gratuitement l'application sur iOS et Android dès maintenant !"
              percentage="Gratuit"
            />
            <MarketCard
              img={img56}
              title="Arvato Financial Solutions (recouvrement)"
              body="Le recouvrement des factures impayées implique beaucoup d'efforts  . Avec le recouvrement de créances, vous confiez ce travail à un spécialiste et augmentez ainsi les chances de recevoir votre argent rapidement  ."
              percentage="Gratuit"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Finances & Assurances</h4>
          <div className="grid">
            <MarketCard
              img={img57}
              title="moneyhouse - Service RC"
              body="Moneyhouse vous aide à effectuer les mutations de données du registre du commerce  . Nous réalisons pour vous les changements souhaités — le plus rapidement possible — et les faisons inscrire au registre du commerce  ."
              percentage="à partir de CHF 150  .- / 670  .-"
            />
            <MarketCard
              img={img17}
              title="RESTORE-IT Backup"
              body="«Désolé, j'ai supprimé accidentellement les reçus de cette semaine, veuillez s'il vous plaît, les saisir à nouveau  .  .  .» Si vous voulez vous protéger d'erreurs de manipulations: Avec la sauvegarde RESTORE-IT pour Faji, les données, documents et contacts de Faji peuvent être sauvegardés et exportés de manière ciblée dans un centre de données suisse  . Vos données, documents et contacts de Faji seront sauvegardés automatiquement avec une transmission cryptée, lesquels pouront être conservés jusqu'à 10 ans  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img58}
              title="Mon-Contrat  .ch"
              body="Avec l'application Mon-Contrat  .ch, générez vos contrats 100% personnalisés en quelques minutes grâce à l'Intelligence Artificielle  . Des contrats et documents juridiques Suisses fiables et rapides  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img53}
              title="Fixed Assets"
              body="Automatisez la comptabilité des immobilisations et les amortissements pour Faji - économisez du temps, de l'argent et des nerfs  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img28}
              title="Guichet Poursuites-Plus"
              body="entriesErkundenGérez vous-même vos procédures de poursuite par voie électronique en contact direct avec l'office des poursuites — rapide, simple, automatisé  . La transmission de données s'effectue par le raccordement de Faji  . Vous économisez du temps et des efforts  . Plus: la première poursuite est gratuite  ."
              percentage="à partir de CHF 15  .-"
            />
            <MarketCard
              img={img20}
              title="AMNIS"
              body="Votre compte d'entreprise international:
comptes locaux en EUR, GBP, USD et CAD à votre nom pour envoyer et recevoir de l'argent dans le monde entier ainsi que des cartes de débit virtuelles et physiques multidevises pour vous et votre équipe   .
Achetez et vendez plus de 50 devises au meilleur taux  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img35}
              title="Advanon"
              body="Advanon est la première plateforme de financement grâce à laquelle les entreprises peuvent transformer leurs factures ouvertes en liquidités  . Simple, flexible, rapide et possible directement via Faji  ."
              percentage="Gratuit à installer"
            />
            <MarketCard
              img={img62}
              title="Guichet Poursuites-Plus"
              body="entriesErkundenGérez vous-même vos procédures de poursuite par voie électronique en contact direct avec l'office des poursuites — rapide, simple, automatisé  . La transmission de données s'effectue par le raccordement de Faji  . Vous économisez du temps et des efforts  . Plus: la première poursuite est gratuite  ."
              percentage="à partir de CHF 15  .-"
            />
            <MarketCard
              img={img50}
              title="TRESIO"
              body="TRESIO est le cockpit numérique de gestion des liquidités pour les entreprises suisses  . Grâce à la connexion avec Faji, la planification des flux de trésorerie est entièrement automatisée  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img59}
              title="Smart Insurance"
              body="Ni trop, ni pas assez: avec Smart Insurance, votre entreprise est parfaitement assurée, et ce, en tout temps grâce à l'adaptation automatisée de votre contrat  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img23}
              title="wechselstube  .ch"
              body="Profitez des meilleurs taux de change de Suisse  . Simple  . Fiable  . Toutes les devises principales  . Parfaitement adapté au paiement de factures en devises étrangères et pour se prémunir des variations de change  ."
              percentage="Compte gratuit"
            />
            <MarketCard
              img={img60}
              title="Arvato Financial Solutions (recouvrement)"
              body="Le recouvrement des factures impayées implique beaucoup d'efforts  . Avec le recouvrement de créances, vous confiez ce travail à un spécialiste et augmentez ainsi les chances de recevoir votre argent rapidement  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img61}
              title="Protekta JurLine"
              body="Obtenez des renseignements juridiques par téléphone  . Avez-vous un problème juridique lié à votre entreprise et avez-vous besoin d'une estimation légale immédiatement   ? Les juristes du service JurLine de Protekta fournissent rapidement une aide simple et compétente  ."
              percentage="à partir de CHF 119  .- /an"
            />
            <MarketCard
              img={img61}
              title="Protection juridique"
              body="Un employé fait valoir des heures supplémentaires qu'il n'a pas effectuées   ? L'assurance-accidents réduit ses prestations   ? Votre client fait valoir des défauts   ? Vous aimeriez faire inscrire une hypothèque légale d'artisan et d'entrepreneur   ? Vous pouvez compter sur notre aide !"
              percentage="Calculable dans le calculateur de primes"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">HR & Recruiting</h4>
          <div className="grid">
            <MarketCard
              img={img63}
              title="MyCerty"
              body="La plateforme digitale MyCerty automatise la création du certificat de travail suisse  ."
              percentage="à partir de CHF 49  .-"
            />
            <MarketCard
              img={img19}
              title="2getHR"
              body="2getHR complète Faji dans la numérisation complète des processus RH:
              Enregistrement du temps
              Gestion des dépenses
              Gestion des vacances
              Interviews des employés"
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img64}
              title="Coople"
              body="Coople est la plus grande plateforme européenne de solutions flexibles pour le personnel  . Publier des offres d'emploi en ligne et recevoir aussitôt des profils de candidats  . Coople se charge du versement des salaires et de l'administration  ."
              percentage="salaire horaire + frais administratifs*"
            />
            <MarketCard
              img={img65}
              title="HR Cosmos"
              body="Obtenez rapidement et directement des réponses aux questions RH que vous rencontrez dans votre vie professionnelle  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img66}
              title="jobalino"
              body="jobalino est la solution de recrutement électronique simple pour les PME suisses  . Via le compte Faji, vous pouvez saisir directement les postes ouverts dans jobalino et les publier en quelques clics sur les sites d'emploi souhaités  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img67}
              title="up your self"
              body="Votre partenaire pour des objectifs durables et le développement des collaborateurs: Notre approche combine le conseil et la vie des objectifs au quotidien dans votre entreprise à l'aide de nos logiciels  ."
              percentage="à partir de CHF 14  .90 /mois/licence"
            />
            <MarketCard
              img={img49}
              title="Squadra"
              body="Le logiciel pour les entreprises de travail en équipe  . Grâce à la demande automatique de disponibilité, à la planification intuitive des équipes, à la saisie des temps intégrée et au contrôle du temps de travail, vous doublez votre efficacité en matière de gestion du personnel  ."
              percentage="à partir de CHF 0  .09 / heure tracée"
            />
          </div>
        </div>
        <div>
          <h4 className="app_market_title">Autre</h4>
          <div className="grid">
            <MarketCard
              img={img1}
              title="Offre exclusive Sunrise Business pour l'Internet haut débit"
              body="30% de réduction sur les abonnements Internet: Profitez du Smart Wifi gratuit et d'offres exclusives pour aider votre entreprise à se développer avec Sunrise Business  ."
              percentage="à partir de 30% de rabais"
            />
            <MarketCard
              img={img1}
              title="Offre exclusive Sunrise Business pour le mobile"
              body="40% de réduction sur le mobile: Profitez des meilleures solutions de communication et des offres exclusives pour aider votre entreprise à se développer avec Sunrise Business   ."
              percentage="40% de rabais"
            />
            <MarketCard
              img={img3}
              title="PrivacyBee - la déclaration de confidentialité sécurisée pour votre site web"
              body="En cinq minutes seulement, nous générons automatiquement une mise en œuvre conforme à la loi suisse sur la protection des données, avec des mises à jour régulières  . Rédigé et contrôlé par des avocats suisses expérimentés pour la sécurité juridique  ."
              percentage="à partir de 30% de rabais"
            />
            <MarketCard
              img={img57}
              title="moneyhouse - Service RC"
              body="Moneyhouse vous aide à effectuer les mutations de données du registre du commerce  . Nous réalisons pour vous les changements souhaités — le plus rapidement possible — et les faisons inscrire au registre du commerce  ."
              percentage="à partir de CHF 150  .- / 670  .-"
            />
            <MarketCard
              img={img68}
              title="Faji Pipedrive Connector App"
              body="40% de réduction sur le mobile: Profitez des meilleures solutions de communication et des offres exclusives pour aider votre entreprise à se développer avec Sunrise Business  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img17}
              title="RESTORE-IT Backup"
              body="«Désolé, j'ai supprimé accidentellement les reçus de cette semaine, veuillez s'il vous plaît, les saisir à nouveau  .  .  .» Si vous voulez vous protéger d'erreurs de manipulations: Avec la sauvegarde RESTORE-IT pour Faji, les données, documents et contacts de Faji peuvent être sauvegardés et exportés de manière ciblée dans un centre de données suisse  . Vos données, documents et contacts de Faji seront sauvegardés automatiquement avec une transmission cryptée, lesquels pouront être conservés jusqu'à 10 ans  ."
              percentage="Tester maintenant"
            />
            <MarketCard
              img={img10}
              title="wwcom smart call"
              body="wwcom est la solution de communication idéale pour votre PME  . Flexible, adaptable à vos besoins et optimisée pour le marché suisse des PME - elle est hébergée en Suisse et est parfaitement intégrée à Faji  ."
              percentage="à partir de CHF 30  .- /mois"
            />
            <MarketCard
              img={img69}
              title="Zapier"
              body="Zapier vous permet de connecter instantanément Faji à plus de 1500 applications pour automatiser votre travail et profiter de super-pouvoirs de productivité  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img70}
              title="SportsNow"
              body="Simplifiez la gestion de vos abonnements sportifs vendus avec Faji  . Les contacts, produits (abonnements) et factures sont automatiquement transférés à Faji  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img71}
              title="HelloNina Business Coaching"
              body="Conseil individuel en ligne pour PME et startups avec des experts qualifiés de HelloNina  . Peu importe s'il s'agit des ressources humaines, de la finance, du droit, du marketing ou de la vente  ."
              percentage="Gratuit"
            />
            <MarketCard
              img={img59}
              title="Smart Insurance"
              body="Ni trop, ni pas assez: avec Smart Insurance, votre entreprise est parfaitement assurée, et ce, en tout temps grâce à l'adaptation automatisée de votre contrat  ."
              percentage="Gratuit"
            />
          </div>
        </div>
      </div>
      <Insider/>
      <BTTButton/>
      <Footer/>
    </>
  );
}
const MarketCard = ({ img, title, body, percentage }) => {
  return (
    <div className="market_card">
      <img src={img} alt="img" />
      <h2>{title}</h2>
      <h6>{body}</h6>
      <p>{percentage}</p>
    </div>
  );
};
