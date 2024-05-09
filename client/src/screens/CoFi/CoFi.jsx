import React from "react";
import "./CoFi.css";
import calendar from "../../assets/icons/Calendar.svg";
import pen from "../../assets/icons/Pen.svg";
import laptop from "../../assets/images/laptop1.png";
import Navbar from "../../components/navbar/Navbar";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import BTTButton from "../../components/BTTButton/BTTButton";

const CoFi = () => {
  return (
    <>
      <Navbar />
      <div className="swiss_tva">
        <div className="stock_header ">
          <h1>
            <span>La comptabilité financière (CoFi)</span> expliquée simplement
          </h1>
          <div className="swiss_tva_header_p">
            <div className="time_author_tva">
              <p>
                <img src={calendar} alt="img" />
                Dernière mise-à-jour 31. mai, 2023
              </p>
              <p>
                <img src={pen} alt="img" />
                Rédigé par l’équipe éditoriale Faji
              </p>
            </div>
            <p className="swiss_tva_header_p1">
              Quiconque dirige une entreprise a des dépenses et des recettes. La
              comptabilité financière (CoFi), qui fait partie de la comptabilité
              d'entreprise, permet de les saisir correctement. Mais que comprend
              précisément la comptabilité financière? En quoi consistent le
              bilan, le compte de résultat, la tenue des comptes et le
              controlling? Nous clarifions pour vous les questions les plus
              importantes.
            </p>
          </div>
          <br />
          <br />
          <div className="cofi_card_wrap">
            <CardNr
              span="Qu'est-ce que la comptabilité financière?"
              title=""
              text="La comptabilité financière, en abrégé CoFi, est un domaine de la comptabilité et fait partie de la gestion   comptable externe. Elle permet à une entreprise d'enregistrer toutes les dépenses et recettes liées à l'exercice de son activité. Elle documente la situation financière de l'entreprise et sert de base au bilan et aux comptes annuels.."
            />
          </div>
          <div className="tva_function">
            <h2>
              Quels sont les tâches et les objectifs de la comptabilité
              financière?
            </h2>
            <p>
              La tâche principale de la comptabilité financière (CoFi) est
              d'enregistrer, de documenter et de traiter toutes les transactions
              financières d'une entreprise. Elle comprend trois sous-domaines:
            </p>
            <ul>
              <li>
                <span>Saisie des opérations commerciales courantes</span>
              </li>
              <li>
                <span>
                  Compte de résultat (également appelé compte de profits et
                  pertes)
                </span>
              </li>
              <li>
                <span>Bilan</span>
              </li>
            </ul>
            <h2>Saisie des opérations commerciales courantes</h2>
            <p>
              La comptabilité financière enregistre systématiquement toutes les
              opérations commerciales d'une entreprise, telles que les achats,
              les ventes et les autres transactions financières. Elle comprend
              également la création ou la documentation de documents comme les
              factures, les justificatifs et les relevés de compte. De plus, la
              comptabilité financière garantit que l'entreprise se conforme à
              toutes les exigences et directives légales en matière de rapports
              financiers. Cela inclut le respect de la législation fiscale et
              des obligations de publication.
            </p>
            <h2>Le compte de résultat dans la CoFi</h2>
            <p>
              Le compte de résultat, également appelé compte de profits et
              pertes, rapproche tous les revenus et dépenses au cours de
              l'exercice. En fonction du résultat, vous avez réalisé un bénéfice
              ou une perte. Notez que le compte de résultat ne montre pas
              seulement le montant de votre résultat financier, mais également
              sa source.
            </p>
            <h2>Le bilan dans la CoFi</h2>
            <p>
              Le bilan décrit la santé financière de votre entreprise en
              recensant ce qu'elle possède (l’actif) et ce qu’elle doit (le
              passif). Il montre donc où vous avez placé votre argent et d'où il
              provient. Le bilan doit toujours être équilibré, autrement dit, le
              total de l'actif (côté débit) doit être aussi important que le
              total du passif (côté crédit).
            </p>
            <h2>Les objectifs de la CoFi en bref</h2>
            <p>
              La comptabilité financière enregistre et documente la situation
              financière d'une entreprise. A la fin d'une année fiscale ou d'un
              exercice comptable, le résultat global – les comptes annuels –
              sont déterminés sur cette base. Ils se composent du compte de
              résultat (compte de profits et pertes) et du bilan. <br /> <br />{" "}
              Les objectifs de la comptabilité financière sont les suivants:{" "}
              <br /> <br /> 1.Transparence: La comptabilité financière doit
              permettre de représenter de manière transparente la situation
              financière et la performance de l'entreprise. <br /> <br />{" "}
              2.Traçabilité: Toutes les transactions financières doivent être
              documentées de manière vérifiable afin de permettre un contrôle
              intégral. <br /> <br /> 3.Contrôle: Une comptabilité financière
              rigoureuse permet de détecter les erreurs, les fraudes ou autres
              irrégularités. <br /> <br /> 4.Imposition: La comptabilité
              financière fournit les informations nécessaires au calcul et au
              paiement des impôts. <br /> <br /> 5.Rapports: La CoFi fournit –
              notamment dans le cadre des comptes annuels – des informations
              pour les rapports internes et externes, afin de donner aux parties
              prenantes un aperçu de la situation financière de l'entreprise.
            </p>
            <h2>Quels livres sont tenus dans la comptabilité financière?</h2>
            <p>
              En comptabilité financière, les indicateurs financiers (KPI) sont
              des éléments d'orientation importants sur la situation de votre
              entreprise. En plus de permettre le contrôle des opérations
              commerciales (controlling), ils vous renseignent également sur le
              succès de votre entreprise ou vous aident à la préparer pour
              l'avenir. <br />
              <br /> Pour ce faire, la comptabilité financière (CoFi) tient
              souvent, outre les grands livres, différents livres auxiliaires.
              Cette comptabilité va au-delà du compte de résultat et du bilan et
              permet des analyses plus complètes, mais est aussi plus complexe.
              Parmi ces livres auxiliaires figurent par exemple la comptabilité
              des débiteurs, la comptabilité des créanciers, le livre de caisse,
              la comptabilité des stocks et du matériel ou encore l'inventaire.
            </p>
            <h2>Quels comptes sont tenus dans la comptabilité financière?</h2>
            <p>
              Différents types de comptes permettent de rendre la comptabilité
              claire et contrôlable. Si chaque transaction commerciale modifie
              le bilan, elle n'y est pas comptabilisée directement, mais d'abord
              sur des sous-comptes. Ceux-ci sont intégrés dans le bilan à la fin
              de l'exercice.
            </p>
            <p>
              Parmi les types de comptes ou groupes de comptes figurent
              notamment:
            </p>
            <ul>
              <li>
                Les comptes de bilan &gt; pour le capital et les actifs
                disponibles d'une entreprise
              </li>
              <li>
                Les comptes de résultat &gt; pour les produits et les charges
                d'une entreprise
              </li>
              <li>
                Le compte de résultat (profit et perte) &gt; pour la
                comptabilisation des charges au débit et des produits au crédit
              </li>
              <li>
                Les comptes fiscaux &gt; pour la comptabilisation séparée de la
                TVA et de l'impôt préalable
              </li>
              <li>
                Le compte de capitaux propres &gt; un compte de passif pour les
                fonds propres (les fonds propres représentent — dans la
                comptabilité financière — les dettes de l'entreprise envers le
                propriétaire du capital)
              </li>
              <li>
                Le compte privé &gt; pour la comptabilisation des prélèvements
                ou des apports de l'entrepreneur
              </li>
              <li>
                Le compte de bilan d'ouverture &gt; un compte auxiliaire pour
                l'ouverture d'un compte de bilan
              </li>
            </ul>
          </div>
          <div className="bluesection_tva">
            <h2>La comptabilité financière dans Faji</h2>
            <p>
              Un logiciel de comptabilité financière comme Faji peut vous aider
              à tenir votre comptabilité de manière durable. Vos écritures
              peuvent être facilement saisies en ligne et visualisées de manière
              claire. Grâce à l'application mobile Faji Go, vous pouvez même
              scanner et enregistrer des documents lorsque vous êtes en
              déplacement. Le logiciel comptabilise automatiquement les factures
              côté débiteurs et les factures fournisseurs côté créanciers.
              L'établissement du bilan et du compte de résultats s'effectue en
              un clic, et le décompte de la TVA, conformément aux règles de
              l'AFC, se fait lui aussi sans difficulté. <br />
              <br /> La comptabilité de Faji faisant partie intégrante de notre
              logiciel de gestion très complet, vous bénéficiez d'autres
              possibilités de synergie. Du traitement des commandes aux
              opérations bancaires avec rapprochement automatisé des paiements,
              tout est à votre disposition dans un seul programme.
            </p>
          </div>
          <div className="image_cofi">
            <img src={laptop} alt="img" />
            <p>
              Ill.: Vos finances sous contrôle grâce au tableau de bord Faji.
            </p>
          </div>
          <div className="tva_cards">
            <h2>Questions fréquentes sur la TVA</h2>
            <ToggleLine
              title="Quelle est la différence entre la comptabilité et la comptabilité financière?"
              details="La comptabilité est le terme générique qui désigne l'enregistrement de toutes les opérations commerciales d'une entreprise en valeurs chiffrées. La comptabilité financière (CoFi) est un volet de la comptabilité. Sa fonction est d'enregistrer toutes les opérations de l'entreprise qui donnent lieu à un flux de paiement et qui sont nécessaires à l'établissement du bilan et du compte de résultat. Cela comprend notamment les charges (dépenses) et les produits (recettes)."
            />
            <ToggleLine
              title="Quelle est la différence entre la comptabilité financière (CoFi) et la comptabilité analytique d’exploitation (CAE)?"
              details="La principale différence entre la comptabilité financière (CoFi) et la comptabilité analytique d'exploitation (CAE) réside dans leurs objectifs et utilisateurs respectifs. La comptabilité financière est destinée aux parties prenantes externes et présente la situation financière globale d'une entreprise, tandis que la comptabilité analytique appuie le contrôle interne et la prise de décision en analysant les structures de coûts et en fournissant des informations pour les dirigeants."
            />
            <ToggleLine
              title="Est-il obligatoire de tenir une comptabilité financière en Suisse?"
              details="Selon le Code des obligations, la comptabilité courante comprend un inventaire, un bilan complet et un compte de résultat – tous trois des éléments de la comptabilité financière. L'obligation de tenir une comptabilité s'applique aux personnes morales (SA, Sàrl, sociétés en commandite par actions, coopératives, associations et fondations) ainsi qu'aux entreprises individuelles et aux sociétés de personnes (sociétés en nom collectif et en commandite) ayant réalisé un chiffre d'affaires d'au moins CHF 500'000 au cours de leur dernier exercice."
            />
            <ToggleLine
              title="En quoi consiste le principe de la comptabilité en partie double?"
              details="Le principe de la comptabilité en partie double est une méthode de comptabilité dans laquelle chaque transaction est enregistrée simultanément dans au moins deux comptes. Le compte indique quel mouvement a eu lieu, tandis que le compte de contrepartie indique pour quoi l'argent a été utilisé. Ce principe repose sur le fait que chaque transaction a un impact à la fois sur l'actif et sur le passif du bilan."
            />
            <ToggleLine
              title="Quels sont les délais pour le décompte de la TVA?"
              details="Normalement, le décompte de la TVA doit être effectué dans les 60 jours suivant la fin de la période de décompte concernée. Le formulaire correspondant doit être remis à l'AFC de manière spontanée. Toutefois, il est souvent possible de prolonger les délais pour la remise des décomptes."
            />
            <ToggleLine
              title="Que se passe-t-il en cas de cessation d'activité de mon entreprise?"
              details="Si une entreprise cesse complètement ses activités, elle doit demander sa radiation de la TVA. Cette demande doit être adressée à l'AFC par écrit dans les 30 jours suivant la cessation des activités."
            />
            <ToggleLine
              title="Comment éviter les erreurs en comptabilité financière?"
              details="Il est essentiel d'éviter les erreurs en comptabilité financière afin d'obtenir des informations exactes et fiables. Voici quelques-unes des méthodes éprouvées pour réduire le risque d'erreurs: La formation et l'expertise Des principes   comptables clairs et cohérents Une documentation rigoureuse La vérification et le rapprochement La séparation des tâches L'utilisation d'un logiciel de comptabilité Une coordination régulière avec des sources externes Un audit externe"
            />
          </div>
          <div className="test_text">
            <h2>
              Testez Faji gratuitement et sans engagement pendant 30 jours
            </h2>
            <h3>
              Jugez par vous-même en testant toutes les fonctionnalités de Faji,
              l'outil de gestion idéal des PME.
            </h3>
            <Link to="/trial">Testez gratuitement</Link>{" "}
            <p>
              Avez-vous encore des questions ? Appelez-nous : +216 71 808 862{" "}
            </p>
            <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
          </div>
        </div>
      </div>{" "}
      <BTTButton />
      <Footer />
    </>
  );
};

export default CoFi;

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
