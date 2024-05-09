import React from "react";
import "./Glossaire.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Trial from "../../components/trial/Trial";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Glossaire() {
  return (
    <>
      <Navbar />
      <div className="glossaire_title">
        <h2>
          Histoires de réussites<span> avec Faji</span>
        </h2>
        <p>
          Pour plus de 60'000 entreprises, Faji est l'outil idéal pour leur
          gestion. Les clients racontent leurs succès avec Faji.
        </p>
      </div>
      <div className="glossaire_cards">
        <div className="glossaire_card">
          <Alpha text="A" />
          <div className="glossire_card_row2">
            <Section
              title="Achalandage"
              body="L'achalandage signifie qu'une partie s'accommode volontairement de l'autre. Il s'agit d'une faveur, car il n'y a aucune obligation légale de le faire. Souvent, l'achalandage est utilisé dans le commerce de détail, lorsque la garantie a expiré et que le détaillant remplace tout de même le produit. Il existe aussi de l'achalandage entre les entreprises, lorsqu'elles se fournissent gratuitement des services les unes aux autres pour renforcer leurs liens commerciaux. Dans la plupart des cas, l'achalandage est accordé pour son propre bénéfice — comme par exemple l'augmentation de la satisfaction des clients ou le renforcement des liens avec les partenaires commerciaux."
            />
            <Section
              title="Actif circulant"
              body="L'actif circulant (ou les actifs circulants) fait partie des actifs, du capital. Il comprend la trésorerie (c'est-à-dire des éléments tels que les dépôts en espèces, postaux ou bancaires), vos débiteurs (créances) et les stocks. Tous les biens de l'actif circulant sont ventilés en fonction de leur degré de liquidité: plus vite vous réussissez à transformer un compte spécifique en argent «réel», plus il sera liquide. Le compte Caisse se trouve par conséquent au sommet parce qu'il présente le plus grand degré de liquidité, c'est-à-dire que l'argent qui s'y trouve sera disponible de la manière la plus rapide qui soit, par comparaison aux autres comptes. Les actifs circulants sont répertoriés tout en haut, du côté actif du bilan (au-dessus des immobilisations)."
            />
            <Section
              title="Actifs"
              body="Que devons-nous comprendre par les actifs ou capitaux? Ces deux termes décrivent l'actif de l'entreprise: les actifs regroupent l'ensemble des avoirs et vous indiquent comment vous avez placé votre argent. Que ce soit sur un compte bancaire (banque), dans des entrepôts (stock de marchandises), dans le mobilier de bureau (meubles) ou encore dans des immeubles (immobilier). Le bilan présente l'actif sur le côté gauche (ou colonne de gauche). Celui-ci est lui-même subdivisé en immobilisations. Les actifs circulants sont ventilés en fonction du degré de liquidité et les immobilisations en fonction du degré de mobilité. Les actifs forment ainsi la contrepartie des passifs et des engagements - du capital de l'entreprise. En savoir plus sur les actifs"
            />
            <Section
              title="Actifs transitoires"
              body="Les actifs transitoires sont des écritures de transition effectuées à la fin de l'exercice. Le compte de régularisation des actifs englobe la délimitation périodique des produits du précédent exercice pour lesquels aucun paiement n'a encore été comptabilisé au moment de la clôture de l'exercice."
            />
            <Section
              title="Administration"
              body="Le terme Administration à sens économique très étendu: l'administration assume toutes les tâches relatives à l'organisation ainsi qu'à l'exécution des tâches opérationnelles en entreprise. Elle assure l'ordre, optimise les processus internes et structure le travail de bureau au quotidien. Les missions confiées à l'administration varient selon le type d'entreprise. Des exemples de ce en quoi peuvent consister les tâches de l'administration sont la comptabilité, les commandes ou les travaux de correspondance d'une façon générale."
            />
            <Section
              title="Adresse de facturation"
              body="L'adresse de facturation est indispensable pour adresser une facture complète. Il s'agit de l'adresse du destinataire de la facture, c'est-à-dire l'adresse à laquelle la facture est envoyée. L'adresse de facturation est constituée du nom du client ou de l'entreprise, de la rue, du code postal, du lieu de résidence et, le cas échéant, du pays."
            />
            <Section
              title="Affacturage"
              body="L'affacturage est une méthode par laquelle les entreprises peuvent améliorer leurs liquidités à court terme et éviter d'avoir des difficultés de paiement. Pour ce faire, la société vend ses créances impayées à une société d'affacturage, qui paie les factures. Outre les intérêts, une redevance doit également être payée pour ce service. Il s'agit d'une méthode courante, en particulier pour les petites et moyennes entreprises, qui doivent souvent attendre longtemps pour que leurs clients paient leurs factures."
            />
            <Section
              title="Amortissements"
              body="Les machines et outillage, le mobilier et les véhicules perdent de leur valeur au fur et à mesure de leur utilisation. Ces pertes de valeur doivent subir un amortissement afin de bien représenter la valeur de l'actif au bilan. L'importance de l'amortissement d'un bien dépend de la durée de vie et de la durée d'utilisation du poste d'actif correspondant. Une machine doit, par exemple, être amortie plus rapidement qu'un bien immobilier. La valeur est corrigée soit par la méthode linéaire (à savoir, toujours un même montant fixe), soit par la méthode dégressive (toujours le même pourcentage de la valeur comptable résiduelle). Il est également possible de pratiquer un amortissement direct ou indirect.La technique de l'amortissement direct comptabilisera directement la réduction de valeur sur le compte d'actif correspondant. Seule la valeur comptable sera ainsi visible dans le bilan.La technique de l'amortissement indirect comptabilisera indirectement la réduction de valeur, donc sur le compte de correction de valeur correspondant. La valeur d'acquisition sera visible dans le bilan alors que le total des amortissements sera visible sur le compte de correction de valeur, la différence donnant la valeur comptable. Vous pouvez en savoir plus ici."
            />
            <Section
              title="Avis de paiement"
              body="Un avis de paiement est émis si une échéance de paiement, mesurée à l'entrée de ce paiement, n'a pas été respectée, et que le débiteur doit être mis en demeure. Les étapes suivant l'avis de paiement sont un premier et un second rappel assortis de menaces de poursuites. Un rappel de paiement amical est cependant souvent suffisant pour obtenir le montant impayé. Vous pouvez en savoir plus sur l'avis de paiement ici."
            />
            <Section
              title="Avoir"
              body="L'avoir, aussi appelé note de crédit, est une contre-facture. Les notes de crédit sont utilisées, par exemple, dans les situations suivantes : en cas de marchandises défectueuses, en tant que correction de facture, sous forme de rabais et de remise et en remplacement de facture."
            />
            <Section
              title="Avoirs"
              body="Les avoirs (ou les crédits) sont un terme de comptabilité et décrivent le côté droit (avoirs) d'un compte en comptabilité. Le terme avoirs est ainsi le contraire du terme dépenses, c'est-à-dire le côté gauche d'un compte."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="B" />
          <div className="glossire_card_row2">
            <Section
              title="Bénéfice brut"
              body="Le bénéfice brut, est la somme obtenue lorsque le coût de fabrication et d'achat est soustrait des ventes. Il est important que seuls les coûts variables soient soustraits dans le calcul. Les coûts fixes tels que le loyer, l'électricité, Internet et les salaires des employés sont laissés de côté."
            />
            <Section
              title="Bilan"
              body="Le bilan répertorie le patrimoine (actifs) et les capitaux (passifs) d'une entreprise et les présente en vis-à-vis l'un de l'autre. Le bilan permet ainsi de voir comment vous avez investi votre argent et de comprendre quelles sont les sources de financement. Il présente en quelque sorte une photo instantanée de la situation économique de l'entreprise à une date précise. Le bilan peut ainsi changer jour après jour. Le 31 décembre est une date de clôture de l'exercice fréquemment utilisée, qui va de pair avec les comptes annuels."
            />
            <Section
              title="Bilan de clôture"
              body="À la fin de l'exercice, chaque entreprise voudrait comprendre comment ses affaires ont réellement marché : a-t-elle obtenu un certain succès au cours de l'année ou le contraire? Non seulement l'entreprise elle-même souhaite avoir des informations concernant ses finances, mais d'autres parties, telles que les actionnaires en tant qu'investisseurs en fonds propres, ou encore l'État à des fins de calcul de l'impôt. C'est pour cela que le bilan de clôture est établi. L'exercice est ainsi clôturé et le bénéfice ou la perte généré(e) est déterminé(e)."
            />
            <Section
              title="Bilan d'ouverture"
              body="L'entrepreneur doit dresser deux bilans par exercice. En effet, la réussite de l'entreprise (bénéfice) se définit comme la somme des avoirs patrimoniaux, diminuée de celle des engagements, dont dispose l'entreprise à la fin de l'exercice fiscal: un bilan de démarrage (bilan d'ouverture) et un bilan de clôture. Ce principe s'applique non seulement aux normes comptables locales, mais également aux normes comptables internationales."
            />
            <Section
              title="Bon de préparation"
              body="Les bons de préparation sont un instrument auxiliaire dans la gestion des marchandises. Ils reprennent des informations sur le contenu et la gestion des livraisons à prélever dans le stock. Par exemple, le numéro des articles commandés, les informations sur leur emplacement dans les stocks ou leur adresse de livraison sont ainsi répertoriés. Le personnel de l'entrepôt peut, à l'aide dudit ordre de paiement, préparer le colis à envoyer au client. En savoir plus sur les bons de préparaion ici."
            />
            <Section
              title="Bulletin de livraison"
              body="Le bulletin de livraison (bon de livraison) est une lettre commerciale dont le contenu et la forme ne sont régis par aucune législation particulière. Aujourd'hui, en plus du bulletin de livraison sous forme papier utilisé de façon traditionnelle et régulière depuis fort longtemps, le bulletin d'accompagnement électronique présente aussi une certaine utilité. Les bons de livraison peuvent par exemple servir à vérifier si les produits mentionnés par l'expéditeur se trouvent effectivement dans l'envoi."
            />
            <Section
              title="Bulletin de versement"
              body="Un paiement peut être effectué sur un compte bancaire en espèces ou par virement bancaire (ou postal) grâce à un bulletin de versement (BdV). Les bulletins de versement peuvent être utilisés indépendamment du fait qu'une personne détienne un compte bancaire propre, utilise l'e-banking ou dispose uniquement d'espèces. Une distinction est faite entre les bulletins de versement rouges (sans numéro de référence) et les bulletins de versement orange (avec numéro de référence). Plus d'informations sur les bulletins de versement ici."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="C" />
          <div className="glossire_card_row2">
            <Section
              title="Cadre comptable"
              body="Un cadre comptable énonce une liste détaillée de tous les comptes de l'entreprise devant être tenus conformément à certaines dispositions. Il permet d'avoir une meilleure compréhension des différents dépôts et retraits, ainsi que des divers sources de coûts. Il est généralement très global et seules quelques entreprises utilisent tous les comptes qu'il répertorie. C'est pourquoi chaque entreprise élabore son propre plan comptable en partant du cadre comptable. Un cadre comptable PME suisse est valable pour les PME suisses. Il se subdivise en huit catégories."
            />
            <Section
              title="Capitaux étrangers (CE)"
              body="Les capitaux étrangers, ou fonds de tiers, font partie du passif du capital d'une entreprise. Ils apparaissent ainsi au côté droit du bilan (le côté passif), avant le capital propre. Les capitaux étrangers font référence aux dettes que l'entreprise a contractées auprès de tierces personnes et sont subdivisés en fonction de leur échéance - c'est-à-dire de la date à laquelle leur paiement est échu. On distingue les fonds de tiers à court et à long terme. On distingue les fonds à court terme comme les créditeurs (par exemple les obligations envers les fournisseurs) qui doivent être honorés au plus vite, des prêts et les crédits hypothécaires, qui eux correspondent aux fonds de tiers à long terme."
            />
            <Section
              title="Capitaux propres (CP)"
              body="Les capitaux propres (CP) font partie du passif, ou du capital, d'une entreprise. Comme leur nom l'indique, ils incluent la dette de la société envers ses propriétaires. Dans le bilan, les capitaux propres sont enregistrés sur le côté droit, le côté passif, en tant que capitaux étrangers. Le capital social apparaît en premier dans la liste des capitaux propres (les capitaux payés par les divers propriétaires ou le capital social) suivi par les augmentations de capital (comme les réserves) pour finir par les bénéfices encore non distribués."
            />
            <Section
              title="Certificat de salaire"
              body="Le certificat de salaire est le document le plus important que vous devez joindre à votre déclaration de revenus. Il s'agit d'un formulaire dans lequel sont indiqués tous les avantages (c'est-à-dire les éléments de salaire et la rémunération) qui ont été versés à vos employés dans l'année. Les employeurs sont tenus de remettre un certificat de salaire à chaque salarié au début de l'année civile en janvier. Le formulaire officiel doit être utilisé à cet effet."
            />
            <Section
              title="Clôture trimestrielle"
              body="La clôture trimestrielle est une sorte de compte récapitulatif intermédiaire de la situation économique et financière de l'entreprise. En effet, la clôture «réelle» de l'exercice (comptes annuels) n'a lieu qu'une seule fois par an. Les parties intéressées souhaitent quant à elles également être informées de l'évolution effective des entreprises au cours de l'année. Une clôture trimestrielle offre par ailleurs la possibilité d'anticiper d'éventuels problèmes et d'agir en conséquence."
            />
            <Section
              title="Comptabilité"
              body="Toutes les opérations d'une entreprise ayant un impact économique sont saisies dans les registres comptables de cette dernière. Les comptes dans lesquels sont saisies les entrées et sorties sont la base de ces registres comptables. Les principes de la comptabilité à double entrée, en vertu de laquelle toute transaction doit être saisie autant du côté dépenses que du côté crédits, sont applicables en comptabilité.

Le système comptable fait partie de la gestion d'entreprise (OFAE) et couvre l'ensemble des opérations nécessaires à une saine gestion de l'entreprise, non seulement du point de vue organisationnel, mais surtout du point de vue financier. La comptabilité peut être subdivisée en quatre parties: la comptabilisation, le calcul, les statistiques et la planification budgétaire. Les domaines en détail."
            />
            <Section
              title="Comptabilité analytique d'exploitation - COEX"
              body="La comptabilité analytique d'exploitation (COEX) est, à côté de la comptabilité financière (COFI), l'un des deux principaux volets de la comptabilité."
            />
            <Section
              title="Comptabilité de règlement"
              body="La facturation de la taxe sur la valeur ajoutée selon un règlement convenu est la procédure standard de l'Administration fédérale des contributions (AFC). La taxe sur la valeur ajoutée est ainsi due dès que la facture a été soumise au client. En tant qu'entrepreneur, vous devrez par conséquent acquitter immédiatement cette TVA même si votre client ne devait la régler que le trimestre suivant. Il en serait par contre autrement dans le cas du décompte TVA après encaissement de la contre-valeur."
            />
            <Section
              title="Comptabilité débiteurs"
              body="La tâche principale de la comptabilité débiteurs est de surveiller et de comptabiliser les livraisons ou prestations de services aux clients respectifs et les paiements qui y sont associés. La comptabilité débiteurs fait partie de la  en tant que livre annexe. Elle fait ainsi partie du grand livre des comptes d'une entreprise et fournit les indicateurs importants permettant de mesurer la réussite économique d'une entreprise sur le marché. En savoir plus sur les comptes débiteurs."
            />
            <Section
              title="Comptabilité des créanciers"
              body="La comptabilité des créanciers est le corollaire de la comptabilité des débiteurs et vise toutes les opérations de paiement entre une entreprise et ses créditeurs. Les produits ou services sont dans ce cas de figure fournis ou exécutés de façon anticipée. Le créditeur établira ainsi une facture qui sera par la suite transmise à l'entreprise correspondante. Le service comptable de ladite entreprise saisira les factures et les archivera. Cela permet à l'entreprise de mieux appréhender quels sont les paiements encore en suspens et pour quelle date ils doivent être effectués."
            />
            <Section
              title="Comptabilité d'association"
              body="Les associations sont, selon l'article 60 §1 du Code civil suisse, des organes corporatifs. Le but de ses membres est de se consacrer à une activité non lucrative. Bien que leur but ne soit pas de réaliser un profit, l'exercice des activités de l'association comporte fondamentalement différentes obligations financières. Ces organes corporatifs peuvent ainsi générer des recettes et des dépenses de même que disposer d'un patrimoine. Il y a donc intérêt à ce que les sommes d'argent correspondantes soient comptabilisées de façon transparente et appropriée. C'est la raison pour laquelle la tenue d'une comptabilité est tout aussi utile à une association que dans le cas d'une petite entreprise."
            />
            <Section
              title="Comptabilité en partie double"
              body="Que signifie l'expression comptabilité en partie double? On parle de comptabilité en partie double quand une transaction est enregistrée deux fois. Deux comptes sont par conséquent utilisés pour chaque transaction. Voici un exemple d'une comptabilité en partie double: vous achetez un bien et le payez en espèces, vous avez ainsi plus de stocks (dépenses) et moins d'argent dans le compte caisse (crédits). Dans le jargon de la comptabilité, le débit est enregistré au crédit.

Mais qu'apporte la comptabilité en partie double? Vous pouvez, grâce à elle, élaborer le bilan et le compte de résultat. Cela signifie que vous voyez d'où vient votre argent et comment vous l'avez investi, parce que les comptes d'actif et les comptes de passif se retrouvent en vis-à-vis dans le bilan. Le compte de résultat (CR) vous permet de comprendre si vous avez réalisé des gains ou des pertes en comparant vos revenus à vos dépenses."
            />
            <Section
              title="Comptabilité financière"
              body="La comptabilité financière (COFi) est, avec la comptabilité d'entreprise, un des principaux éléments de la comptabilité. Selon l'article 958 §4 du Code des obligations suisse, toute personne astreinte à tenir une comptabilité doit également tenir un grand livre des comptes, y compris une comptabilité financière. Elle comprend les secteurs suivants : l'enregistrement des transactions commerciales courantes (à savoir toutes les transactions qui impliquent les finances de votre entreprise), le compte de résultat et le bilan. En savoir plus sur la comptabilité financière"
            />
            <Section
              title="Comptabilité salariale"
              body="La comptabilité salariale est un sous-domaine de la comptabilité, qui traite de la comptabilité des salaires. La comptabilité salariale calcule les salaires mensuels de chaque employé et organise leur paiement. En outre, la comptabilité des salaires établit le décompte annuel de l'impôt sur les salaires, qui contient les salaires, ainsi que les cotisations sociales à payer et l'impôt sur les salaires."
            />
            <Section
              title="Comptabilité simplifiée"
              body="Depuis 2013, les petites entreprises suisses sont autorisées à effectuer une comptabilité simplifiée, également connue sous le nom de loi Milchbüechli. Avec cette comptabilité simplifiée, seuls les actifs, les revenus et les dépenses sont comptabilisés. Cette réglementation simplifiée s'applique exclusivement aux entreprises qui ne sont pas AG ou GmbH et dont le chiffre d'affaires annuel est inférieur à CHF 100'000."
            />
            <Section
              title="Comptables"
              body="Les professionnels ont pour tâche d'enregistrer toutes les transactions d'une entreprise. Cette saisie est la base de la prise de décisions de l'entreprise, de son imposition mais également de son avenir. Les grandes entreprises ventilent la comptabilité générale en plusieurs sous-ensembles spécialisés. De tels sous-ensembles sont, par exemple, la comptabilité des immobilisations, la comptabilité des salaires, la comptabilité financière ou encore la comptabilité des débiteurs (clients) et des créditeurs (fournisseurs)."
            />
            <Section
              title="Compte de résultat"
              body="Le compte de résultat (CR) vous permet de comprendre si vous avez réalisé des gains ou des pertes, en comparant vos revenus à vos dépenses. Vous aurez réalisé un profit si vos revenus sont supérieurs à vos dépenses ou subi des pertes dans le cas contraire."
            />
            <Section
              title="Compte récapitulatif intermédiaire"
              body="Un compte récapitulatif est destiné à refléter la situation économique et le succès d'une entreprise. Si ce compte devait ne pas être clos à la fin d'un exercice (comptes annuels), mais en cours d'exercice, il porterait le nom de compte récapitulatif intermédiaire. Les comptes récapitulatifs intermédiaires comme les comptes trimestriels ont toute leur importance, car ils vous permettent d'évaluer rapidement si votre entreprise respecte son budget ou pas. En travaillant avec un logiciel de comptabilité tel que Faji, vous pouvez créer un bilan ou un compte de résultat en un seul clic, quand vous le souhaitez."
            />
            <Section
              title="Comptes annuels"
              body="En comptabilité, les comptes annuels décrivent les décomptes finaux de l'exercice. Le résultat final à la clôture d'un exercice se compose au moins du bilan, du compte de résultat (clôture de la comptabilité) et de l'annexe. Le délai pour la remise des comptes annuels est de six mois après la clôture de l'exercice. On parlerait de décompte intermédiaire si un décompte final devait être réalisé au cours de l'année, c'est-à-dire en cours d'exercice.

L'objectif des comptes annuels est de fournir des informations vérifiées sur la situation économique et les résultats de l'entreprise. Le propriétaire et les tiers peuvent ainsi se faire une idée exacte et fiable de la situation de l'entreprise. Plus d'informations."
            />
            <Section
              title="Consolidation"
              body="La consolidation fait référence à la conversion d'une dette à court terme en une dette à long terme, ou à l'atteinte de la stabilité d'une entreprise. Dans la pratique, cela se passe de telle sorte que les filiales d'un groupe n'établissent plus de comptes annuels séparés, mais qu'un bilan commun est établi au sein du groupe pour la comptabilité financière. Lors de la consolidation, les domaines individuels sont donc combinés."
            />
            <Section
              title="Correction de valeur"
              body="La correction de valeur est un amortissement indirect d'éléments du côté des actifs du bilan. Les réductions de valeur ne sont pas directement comptabilisées dans le compte des actifs, mais indirectement, via le compte de correction de valeur correspondant. Sont ainsi visibles dans le bilan, la valeur d'acquisition, le total des amortissements cumulés (sur le compte de correction de valeur) ainsi que la différence de valeur comptable."
            />
            <Section
              title="Créditeurs"
              body="Le terme «créditeurs» fait essentiellement référence aux engagements ou aux dettes envers vos fournisseurs, par exemple suite à un achat sur facture. Ce sont dans la plupart des cas des engagements envers les fournisseurs (créditeurs fournisseurs). En comptabilité, le compte des créditeurs fait partie du passif, plus exactement des capitaux étrangers à court terme.

La différence entre les débiteurs et les créditeurs : en vis-à-vis des créditeurs se trouvent les débiteurs (créances), qui constituent un avoir sur vos partenaires d'affaires. Il s'agit par conséquent de créances sur vos clients et autres acquéreurs. Ces créances résultent en général de livraisons de biens et/ou de prestations de services que votre entreprise leur a fournies. En savoir plus sur les créditeurs"
            />
            <Section
              title="CRM - Customer Relationship Management"
              body="CRM signifie Customer Relationship Management et se traduit par la gestion de la relation client ou encore le service à la clientèle. Pour une entreprise, il s'agit d'une approche stratégique centrée non pas sur le produit, mais sur le client lui-même. Le principe est d'entretenir des liens avec le client et de l'accompagner lors de diverses démarches pour être en mesure, non seulement de lui proposer des produits qui lui sont adaptés, mais également de le fidéliser à l'entreprise."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="D" />
          <div className="glossire_card_row2">
            <Section
              title="Débiteurs"
              body="Les débiteurs sont des créances résultant des prestations de votre entreprise - par exemple, une livraison à l'un de vos clients. Les débiteurs vous permettent d'avoir un aperçu des montants que vos clients vous doivent encore. Le compte débiteurs est donc en équilibre avec vos parties prenantes. On parle de clients débiteurs en cas de réclamations contre les clients et d'autres débiteurs pour les autres parties prenantes. Le compte «Créances des biens et services» fait partie des actifs et plus précisément des actifs circulants. Plus d'informations sur les débiteurs

En vis-à-vis des débiteurs (crédit) se trouvent les créditeurs (fournisseurs). Ils décrivent les engagements et obligations de votre entreprise résultant des livraisons et prestations qui vous ont été faites."
            />
            <Section
              title="Décompte de TVA"
              body="Deux méthodes de décompte sont à votre disposition lorsque vous êtes assujetti à la TVA : le décompte effectif et le décompte de TVA avec taux de la dette fiscale nette. Le niveau d'imposition effectif est souvent considéré comme la norme. Avec cette méthode, vous déclarez en tant qu'entrepreneur le chiffre d'affaires que vous avez réalisé et l'impôt préalable correspondant. Chaque trimestre, vous devez soumettre un décompte à l'Administration fédérale des contributions (AFC).

Beaucoup de PME se basent sur la méthode du décompte de TVA avec taux de la dette fiscale nette plutôt que sur le décompte effectif. Cette méthode réduit en effet la charge administrative : d'une part, les PME peuvent se contenter de faire un décompte de taxe sur la valeur ajoutée seulement tous les six mois (plutôt que trimestriellement), et d'autre part, elles sont libérées de la détermination de l'impôt préalable.

Lors du décompte et à l'aide des taux de la dette fiscale nette (TDFN), vous multipliez votre chiffre d'affaires (en y incluant la TVA des factures adressées à vos clients) par le taux de la dette fiscale nette pour obtenir le montant de l'impôt (Art. 37 OTVA). Le taux d'imposition est déterminé par l'Administration fédérale des contributions (AFC) et dépend du secteur d'activité. L'impôt préalable est, grâce à la TDFN, payé de façon forfaitaire et ne doit pas être calculé. Le choix de la méthode de décompte de la TVA dépend du chiffre d'affaires imposable et est lié à un montant maximum d'impôt annuel dû. Plus d'informations

En utilisant le logiciel de comptabilité Faji, vous obtiendrez automatiquement le formulaire de TVA correspondant aux exigences formelles de l'Administration fédérale des contributions (AFC), et ce, quelle que soit la méthode de décompte que vous aurez choisie. Le formulaire Faji contient toutes les informations et chiffres (avec les taux de TVA appropriés), comme par exemple le chiffre d'affaires total des différents taux. Vous pouvez simplement transférer les chiffres."
            />
            <Section
              title="Dépenses"
              body="Toute prestation de service implique des charges. Celles-ci peuvent correspondre aux frais de main-d'œuvre (coûts salariaux), de publicité ou encore aux pertes de valeur des biens (amortissement). Les dépenses forment, en parallèle du rendement, le deuxième élément principal du compte de résultat et apparaissent comme une valeur consommée dans la comptabilité. Cela conduit par conséquent à une sortie d'actifs ou à une augmentation des passifs."
            />
            <Section
              title="Dépenses (débit)"
              body="Les dépenses (débit) sont le corollaire des recettes et décrivent le côté gauche d'un compte en comptabilité, c'est-à-dire le côté gauche de la «Forme en T»."
            />
            <Section
              title="Dette fiscale nette"
              body="Il existe en Suisse deux méthodes pour calculer la taxe sur la valeur ajoutée. L'Administration fédérale des contributions (AFC) autorise l'utilisation de deux méthodes : le décompte effectif ou le décompte de TVA avec taux de la dette fiscale nette. Celles-ci dépendent du secteur d'activité et peuvent varier considérablement.

Avec le second système, le chiffre d'affaires (en y incluant la TVA des factures adressées à vos clients) est multiplié par le taux de la dette fiscale nette pour obtenir le montant de l'impôt (Art. 37 OTVA). L'avantage de cet impôt préalable est qu'il ne doit pas être calculé, étant donné qu'il est payé de façon forfaitaire. En outre, la dette fiscale nette réduit au minimum les charges administratives : on ne doit la calculer que tous les six mois, contrairement au calcul trimestriel imposé par la méthode du décompte effectif."
            />
            <Section
              title="Devis"
              body="Avec le devis, l'entrepreneur calcule à l'avance les coûts prévus pour les travaux à effectuer. Cela permet au client de comparer différents fournisseurs et d'estimer à l'avance les coûts encourus pour une commande. Il s'agit d'une proposition de prix sans engagement. Contrairement à l'offre et à la facture finale, le devis sans engagement peut contenir des prix estimés — cependant la facture finale ne peut généralement dépasser les coûts que de 10% maximum."
            />
            <Section
              title="DTA"
              body="La procédure DTA (procédure d'échange de supports de données) est utilisée pour l'échange sécurisé de données de paiement entre l'entreprise et la banque. Elle permet le transfert de transactions telles que les paiements BVR ou encore les virements bancaires en francs ou en devises étrangères. Le fichier DTA est créé dans le logiciel de comptabilité de l'entreprise et peut être transmis directement à l'e-banking via l'interface correspondante. En savoir plus sur la structure du format DTA"
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="E" />
          <div className="glossire_card_row2">
            <Section
              title="EBIT"
              body="L'EBIT, également connu sous le nom de bénéfice d'exploitation, est un acronyme qui signifie «Earnings Before Interest and Taxes». Il décrit le résultat d'exploitation avant déduction des impôts et des intérêts. L'EBIT est un chiffre clé de la comptabilité et fournit des informations importantes sur le succès d'une entreprise dans le domaine opérationnel"
            />
            <Section
              title="EBITDA"
              body="EBITDA est un acronyme qui signifie «Earnings Before Interest and Taxes, Depreciation and Amortization». L'EBITDA est un terme qui désigne le résultat d'exploitation avant déduction des impôts, des intérêts et de l'amortissement des immobilisations corporelles et incorporelles. Le ratio qui résulte du calcul de l'EBITDA est utilisé pour évaluer la rentabilité et la solvabilité d'une entreprise et pour simplifier la comparaison internationale."
            />
            <Section
              title="Encaissement de la contre-valeur"
              body="Dans le cas de la facturation de la TVA après encaissement de la contre-valeur, la taxe sur la valeur ajoutée ne sera due qu'après obtention du règlement de la facture par le client. Contrairement à la procédure standard identifiée par l'Administration fédérale des contributions ' la facturation de la TVA selon un règlement convenu ' vous ne devrez pas préfinancer la TVA avant qu'elle ne vous soit réglée. Le recours à la méthode de règlement sélectionnée doit être communiqué par écrit à l'Administration fédérale des contributions (AFC)."
            />
            <Section
              title="Enregistrement du temps de travail"
              body="L'enregistrement du temps de travail permet de répertorier précisément l'heure à laquelle le travail est effectué. Cela donne non seulement un aperçu du temps de travail effectué, mais contribue également à garantir que les heures de travail maximales légales sont respectées. Selon la législation du travail, l'enregistrement des heures de travail est obligatoire. Si ces règles ne sont pas respectées, des poursuites pénales peuvent être engagées contre l'employeur."
            />
            <Section
              title="Entrepreneur"
              body="Un entrepreneur est la personne qui planifie la fondation de l'entreprise respective, met en œuvre cette fondation avec succès et gère ensuite l'entreprise seule ou avec d'autres personnes. Contrairement à un dirigeant, l'entrepreneur investit dans l'entreprise. Une distinction est faite entre les commerçants individuels, les co-entrepreneurs et ' dans certaines circonstances ' les actionnaires."
            />
            <Section
              title="ERP"
              body="ERP signifie Enterprise Resource Planning et désigne la planification et la coordination des ressources telles que le matériel, le personnel, le capital ou les ressources au sein d'une entreprise. Une telle planification vise le déploiement rapide et approprié de toutes les ressources afin de s'assurer d'une création de valeur efficace. Plus d'informations sur l'ERP"
            />
            <Section
              title="Escompte"
              body="Les escomptes sont des réductions (en pourcents) sur le montant du paiement, qui sont convenus ou offerts à condition d'être payés dans des délais déterminés. Des escomptes peuvent être applicables dans la vente en cas d'achats importants payés immédiatement en espèces. L'octroi de remises lors de paiements commerciaux n'est par ailleurs pas rare. Le débiteur peut ainsi décider s'il préfère payer sous X jours et bénéficier d'un escompte de Y% ou de manière standard dans les 30 jours sans escompte. Les escomptes différenciés, c'est-à-dire les escomptes variant en fonction de l'augmentation du délai de paiement, sont également communs (par exemple 5% pour un règlement en espèces, 2% pour un paiement dans les 10 jours, 1% pour un paiement dans les 20 jours). Vous trouverez ici une explication détaillée des escomptes."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="F" />
          <div className="glossire_card_row2">
            <Section
              title="Facture"
              body="La facture, également appelée document de facturation, est un document commercial. Celui-ci est délivré par le vendeur à l'acheteur. Une facture se rapporte toujours à une transaction entre vendeur et acheteur et donne des informations détaillées sur les produits ou services fournis, ainsi que leur quantité et le prix qui a été convenu pour ceux-ci."
            />
            <Section
              title="Facture d'annulation"
              body="La facture d'annulation est une correction de facture requise lorsqu'une facture déjà émise contient des erreurs et doit être corrigée. Cela se fait en annulant la facture originale et en la remplaçant par la nouvelle facture valide."
            />
            <Section
              title="Facture proforma"
              body="La facture proforma est un reçu et non une vraie facture. Elle est délivrée uniquement pour la forme, ne nécessite pas de transaction financière et n'a donc pas à être payée ni comptabilisée. Dans la plupart des cas, une facture proforma est utilisée lorsque des marchandises sans valeur commerciale, telles que des pièces de rechange gratuites ou des échantillons, sont envoyées vers d'autres pays européens. En effet, il est obligatoire de déclarer la valeur des marchandises qui passent par les douanes, même lorsque celles-ci ne nécessitent pas de paiement de la part du destinataire."
            />
            <Section
              title="Facture QR"
              body="La facture QR se compose de la facture et d'une section de paiement avec un code QR suisse ' lisible avec un smartphone ou un lecteur QR. Le code QR contient toutes les informations sur le produit et le prix, ainsi que les informations de paiement. Les factures QR peuvent être payées simplement en scannant le code QR et toutes les données sont envoyées automatiquement à la banque, ce qui réduit le risque d'erreurs."
            />
            <Section
              title="Fiche de salaire"
              body="La fiche de salaire, également appelée bulletin de salaire ou encore fiche de paie, est un document texte qui détaille la composition des salaires au cours d'une période comptable spécifique. Les majorations, indemnités, retenues, avances, acomptes et autres éléments liés à la période en question figurent sur la fiche de salaire. Le salarié la reçoit de la part de son employeur généralement une fois par mois."
            />
            <Section
              title="Freelancer"
              body="Un Freelancer, également appelé salarié indépendant, est une personne qui travaille pour un ou plusieurs clients sans conclure de contrat de travail à durée indéterminée. Il s'agit d'un indépendant ou d'un artisan qui travaille à la commande et pour son propre compte. Ainsi, le freelancer est un entrepreneur qui peut aussi embaucher son propre personnel."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="G" />
          <div className="glossire_card_row2">
            <Section
              title="Gestion des adresses"
              body="Au sein d'une entreprise, la gestion des adresses joue un rôle important en traitant les coordonnées des partenaires de cette entreprise. La Gestion des adresses inclut notamment le traitement et la mise à jour des adresses et interlocuteurs existants ou la suppression des doublons (données similaires enregistrées de façon multiple). Une telle base de données, complète et à jour, est un élément essentiel dans l'optique d'une communication efficace et réussie."
            />
            <Section
              title="Gestion des clients"
              body="Les entreprises organisent, par le biais de la gestion des clients, leurs relations avec les clients existants et potentiels. La fidélisation des clients et le maintien de relations systématiques sont centraux pour la réussite d'une entreprise. Les relations d'affaires et le réseau personnel forment la base de nombreuses futures transactions. Ils sont par conséquent essentiels, et pas seulement pour le traitement des commandes. Ainsi, la gestion des contacts joue un rôle clé dans la gestion des relations clients (CRM)."
            />
            <Section
              title="Gestion des stocks"
              body="La gestion des stocks fait partie de la gestion des marchandises et se charge non seulement de la gestion des stocks de produits, mais également de la comptabilisation de tous les entrées et sorties, fournissant ainsi d'importantes informations aux départements Achats et Distribution. Grâce à ce système de gestion, le département des Achats peut identifier à temps les produits qui doivent être commandés et en quelle quantité. Le département Distribution dispose, quant à lui, d'une meilleure visibilité sur les stocks et peut, même en cas de stocks limités, indiquer au client une date de livraison précise."
            />
            <Section
              title="Grand livre des comptes"
              body="Le grand livre représente la totalité des comptes qu'utilisent les entreprises pour comptabiliser leurs transactions. Certains de ces comptes sont particulièrement intéressants pour la gestion de votre entreprise. Par exemple, le compte collectif des débiteurs est tenu de façon détaillée dans un livre annexe. Les informations contenues dans ces comptes vous permettent de comprendre en détail les données numériques ainsi que les changements significatifs de la comptabilité principale. En dernier lieu, les résultats des livres annexes sont retransmis à la comptabilité principale correspondante."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="H" />
          <div className="glossire_card_row2">
            <Section
              title="Heures supplémentaires et travail supplémentaire"
              body="Les termes heures supplémentaires et travail supplémentaire ne peuvent pas toujours être clairement séparés. Fondamentalement, les heures supplémentaires sont les heures travaillées au-delà du temps de travail contractuel, et le travail supplémentaire représente les heures travaillées au-delà du temps de travail maximum légal. Le temps de travail maximum légal est de 45 à 50 heures. Les heures supplémentaires et le travail supplémentaire effectués sont compensés par un supplément de salaire de 25% sur les heures respectives ou par l'octroi d'heures de temps libre correspondantes."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="I" />
          <div className="glossire_card_row2">
            <Section
              title="Immobilisations"
              body="Les immobilisations font partie de l'actif. Elles comprennent les postes d'actif tels que les véhicules, les biens mobiliers (meubles), les machines ou l'immobilier et se divisent en fonction du degré de mobilité. Les véhicules figurent ainsi tout en haut de la liste et les immeubles tout en bas. Les immobilisations sont inscrites du côté actif du bilan au titre de l'actif circulant."
            />
            <Section
              title="Impôt anticipé"
              body="L'impôt anticipé est un impôt prélevé sur le revenu des salariés qui ne disposent pas d'un permis d'établissement et n'ont donc pas de domicile fiscal en Suisse. L'employeur de salariés étrangers est légalement tenu de prélever un impôt anticipé sur leur salaire et de le verser à l'administration fiscale suisse. Les salariés étrangers sont également tenus de payer des impôts en Suisse."
            />
            <Section
              title="Indépendance"
              body="Le travail indépendant est un modèle d'emploi dans lequel une personne travaille à son propre compte. Elle opère donc sous son propre nom. L'activité indépendante s'exerce soit en tant qu'entreprise individuelle, soit avec sa propre société, soit dans le cadre d'une société. Le travail indépendant comporte de nombreux risques financiers. C'est pourquoi le pas vers le travail indépendant doit être soigneusement envisagé à l'aide d'un plan d'affaires."
            />
            <Section
              title="Indicateurs financiers"
              body="Une entreprise peut évaluer sa situation financière grâce à des indicateurs financiers. Ces chiffres-clés sont utilisés pour déterminer des objectifs, prendre des décisions et déterminer les mesures nécessaires."
            />
            <Section
              title="ISO 20022"
              body="La norme ISO 20022, également appelée norme UNIFI (Universal financial industry message scheme), est une norme internationale pour l'échange de données informatisées dans le secteur financier. Elle sert de dénominateur commun dans l'harmonisation des différentes organisations normatives. L'interopérabilité qui résulte de l'application de cette norme garantit une communication sans accroc des informations. Ce langage commun se décline au format XML (Extensible Markup Language) et utilise des mots courts comme pacs, pain ou camt."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="J" />
          <div className="glossire_card_row2">
            <Section
              title="Journal de comptabilisation"
              body="Le journal, également appelé journal de comptabilisation, fait partie du grand livre et enregistre les écritures comptables. Toutes les transactions commerciales sont enregistrées de façon chronologique et divisées par exercices. Les pièces justificatives relatives aux transactions, comme les factures entrantes et sortantes, les reçus ou les relevés bancaires, y sont enregistrées. Plus d'informations"
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="L" />
          <div className="glossire_card_row2">
            <Section
              title="Livre de caisse"
              body="Le livre de caisse répertorie de façon chronologique toutes les entrées (c'est-à-dire tous les dépôts en espèces) et toutes les sorties de fonds (c'est-à-dire tous les prélèvements en espèces). Doivent donc y figurer:

La transaction ou le texte de comptabilisation (c'est-à-dire la nature du dépôt ou du retrait, fait par ou pour qui)
Le numéro de la pièce justificative (de la quittance) correspondante
Le taux en pourcentage et le montant de la taxe sur la valeur ajoutée (TVA) correspondante (si disponibles)
Les sommes totales payées ou perçues dans le cadre de la transaction
La date de l'opération
Le solde de caisse actualisé de façon quotidienne

Ce solde sera par la suite enregistré dans la comptabilité dans le compte d'actifs circulants. Des détails quant au sujet du livre de caisse."
            />
            <Section
              title="Logiciel Cloud"
              body="Grâce au Cloud, les données ne sont désormais plus stockées sur votre lieu de travail, mais dans un centre de données externe sécurisé. Vos données sont disponibles en ligne et consultables partout et en tout temps. Le Cloud computing organise par la suite l'utilisation de ces applications en ligne, c'est-à-dire les logiciels Cloud. Ces logiciels Cloud sont également appelés Software-as-a-Service, SaaS."
            />
            <Section
              title="Logiciel de comptabilité"
              body="Une entreprise peut économiser beaucoup de temps et d'argent grâce à l'utilisation d'un logiciel de comptabilité adapté. Un bon logiciel couvre et facilite tous les processus liés à l'administration et la comptabilité. Dans le meilleur des cas, il les automatise. Sont indispensables à un bon programme de comptabilité:

Le bilan
Le compte de résultat
Le journal (y compris la tenue du journal)
L'état des recettes et des dépenses
Les outils de facturation
Les possibilités de comptabilisation manuelle
Le plan comptable
Les différentes façons d'établir le décompte de la TVA"
            />
            <Section
              title="Logiciel de facturation"
              body="Un logiciel de facturation aide les entrepreneurs à simplifier et à accélérer les processus de facturation tels que l'émission, la prise en compte de la facture ou encore l'envoi. L'affichage du statut d'une facture (ouverte, payée, en défaut) permet par exemple d'accélérer (ou même d'automatiser) l'introduction et l'exécution des procédures de rappels, accélérant ainsi le paiement desdites factures."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="M" />
          <div className="glossire_card_row2">
            <Section
              title="Marge brute"
              body="La marge brute, également appelée marge bénéficiaire brute, est le bénéfice d'une entreprise avant déduction des impôts. Elle est calculée à partir du bénéfice brut et du chiffre d'affaires. Il s'agit d'une mesure importante car la marge brute peut indiquer si une entreprise peut réaliser un profit en couvrant tous ses coûts. Elle sert donc à évaluer la rentabilité de l'entreprise et est généralement exprimée en pourcentage."
            />
            <Section
              title="MT940"
              body="Le fichier MT940 (Message Type) correspond à un relevé bancaire sous forme électronique. Il contient toutes les informations pertinentes sur les transactions bancaires effectuées au format standard SWIFT pour la transmission électronique des données de relevé bancaire. Un tel fichier peut être demandé auprès de la plupart des banques suisses ou directement téléchargé via votre banque en ligne. Plus d'informations"
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="N" />
          <div className="glossire_card_row2">
            <Section
              title="Numéro de facture"
              body="Le numéro de facture est indispensable pour adresser une facture complète. Il est utilisé pour attribuer clairement un paiement ou une réservation. Il se compose soit de chiffres, soit d'une combinaison de lettres, de chiffres et de tirets, et doit suivre un système compréhensible. Il est important que ce numéro de facture soit unique dans le système de l'émetteur de la facture. Il ne doit donc pas être attribué deux fois."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="O" />
          <div className="glossire_card_row2">
            <Section
              title="Obligation de tenue d'une comptabilité"
              body="Le Code des obligations suisse déclare que « les entreprises individuelles et les sociétés de personnes qui ont réalisé un chiffre d'affaires supérieur à 500 000 francs suisses lors du dernier exercice » (cf. CO Art. 957 §1) sont soumises à l'obligation de tenir une comptabilité. Les personnes morales (c'est-à-dire les SA et SARL) sont par ailleurs soumises à l'obligation de tenir une comptabilité et de remettre des comptes annuels.

Les entreprises ayant un chiffre d'affaires inférieur peuvent tenir une comptabilité simplifiée. Elles peuvent se limiter au simple calcul des recettes et des dépenses (par exemple via un livre de caisse, ou encore un calcul sommaire)."
            />
            <Section
              title="Offres"
              body="D'un point de vue commercial, une offre, également appelée proposition, fait partie du processus d'acquisition. Une demande émanant d'un client potentiel précède en général l'offre, qui vient en réaction. Le fournisseur y détermine les conditions en vertu desquelles il est disposé à livrer la marchandise ou encore à fournir le service requis. Plus d'infos sur l'offre"
            />
            <Section
              title="Outils bureautiques"
              body="L'administration des entreprises utilise des outils ou applications bureautiques. Ils permettent en effet de normaliser et de simplifier les processus administratifs. Un bon outil bureautique couvre au moins les domaines suivants:

Traitement de texte
Logiciel de comptabilité
Programme de facturation
Logiciel de gestion des clients
Gestion des stocks"
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="P" />
          <div className="glossire_card_row2">
            <Section
              title="pain.001"
              body="Pain.001 est un format de paiement basé sur XML (= Extensible Markup Language) de la norme ISO 20022 et remplace le format utilisé jusqu'à présent (le format DTA). La mise en place et l'application de la norme ISO 20022 ont pour objectif l'harmonisation des paiements nationaux et internationaux. En savoir plus à ce sujet"
            />
            <Section
              title="Paperasse"
              body="La gestion des documents traditionnels est considérée, par certains employés de bureau ayant de l'expérience en informatique, comme de la « paperasse ». Le papier doit en effet être transmis manuellement aux lecteurs respectifs, souvent en plusieurs exemplaires, pour être par la suite archivé. Cette procédure n'est guère écologique et implique des coûts de traitement élevés. C'est la raison pour laquelle les bureaux sans papier sont de plus en plus nombreux. Ce type de bureau n'utilise plus, ou du moins de façon minimale, le papier. L'échange de fichiers électroniques remplace le circuit de papier linéaire à l'aide des réseaux de données, des programmes, de l'archivage intelligent et de l'utilisation de périphériques mobiles."
            />
            <Section
              title="Parties prenantes"
              body="Le terme partie prenante fait référence aux représentants de projets ou d'entreprises. Les parties prenantes ont un grand intérêt à ce qu'un projet ou une entreprise réussisse et sont activement ou inactivement impliquées dans les processus concernés. Les parties prenantes internes sont, par exemple, les employés, la direction et le propriétaire, tandis que les fournisseurs, les actionnaires, l'État, les clients, les banques et les investisseurs sont des parties prenantes externes."
            />
            <Section
              title="Passifs"
              body="Les passifs (ou le passif) décrivent les capitaux propres de l'entreprise. Ils sont reportés sur le côté droit (colonne de droite), le côté passif. Ce dernier est lui-même subdivisé en capitaux étrangers et en capitaux propres. Plus d'informations"
            />
            <Section
              title="Passifs transitoires"
              body="Les passifs transitoires sont des écritures de transition effectuées à la fin de l'exercice. Le compte de régularisation des passifs englobe la délimitation périodique des charges du précédent exercice, pour lesquelles aucune facture n'a encore été comptabilisée au moment de la clôture de l'exercice. En général, seule une estimation du montant des factures manquantes est possible."
            />
            <Section
              title="Plan comptable"
              body="Un plan comptable est la liste de tous les comptes de la comptabilité de l'entreprise. Il est spécifiquement adapté aux besoins de la société et dérive du plan comptable général. Il existe des plans comptables pour les différentes formes juridiques d'entreprises: entreprise individuelle, SARL, SA, Fondation ou société de personnes."
            />
            <Section
              title="Principes régissant l'établissement régulier de la comptabilité"
              body="Les mêmes principes légalement prescrits en matière de comptabilité s'appliquent à toute personne soumise à l'obligation de tenir une comptabilité. Ces principes sont décrits dans les principes régissant l'établissement des comptes (GoB). Votre comptabilité doit s'y conformer (CO art. 957a §2):

                L'enregistrement complet, fidèle et systématique des transactions et éléments commerciaux (saisir toute chose importante correctement et de la même façon)
                La preuve comptable pour chaque processus comptable (aucune comptabilisation sans reçu)
                Clarté (des textes de comptabilisation judicieux: qu'avez-vous vendu à qui?, etc.)
                Conformité (adaptation au type et à la taille de l'entreprise)
                Traçabilité (par exemple, pour la révision)"
            />
            <Section
              title="Profits"
              body="Les produits apparaissent à côté des charges du deuxième élément principal du compte de résultat. Ils résultent de la vente de services, ce qui entraîne une augmentation de la valeur de votre entreprise."
            />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="R" />
          <div className="glossire_card_row2">
            <Section title="Rappels de paiement" body="Le rappel de paiement est l'étape suivant celle de l'avis de paiement. Il est temps de passer au rappel de paiement si le montant dû n'a pas encore été réglé d'après l'avis de paiement. Ainsi, le débiteur sera une nouvelle fois mis au courant de la somme à payer et un nouveau délai de paiement sera fixé. Un deuxième rappel sera envoyé dans le cas où le débiteur devait à nouveau laisser passer ce délai, assorti d'une menace d'action en justice. En savoir plus ici au sujet du rappel de paiement." />
            <Section title="Reçu" body="Un reçu est un document qui sert de preuve pour une transaction qui a été effectuée. Les reçus comprennent les tickets de caisse, les reçus, les factures, les relevés de carte de crédit, les fiches de salaire et les notes de crédit. Conformément à la loi, aucun enregistrement de pièce comptable ne peut être effectué sans justificatif et le délai de conservation des justificatifs est de dix ans." />
            <Section title="Revenu annexe" body="Les employés à temps partiel ou les travailleurs indépendants exerçant une activité professionnelle annexe à leur emploi principal - afin par exemple, de compléter leurs revenus - sont considérés comme percevant un revenu annexe. Il faut par conséquent avoir un revenu principal pour avoir un revenu annexe. Ce type de revenu annexe peut également être perçu en exerçant une activité principale ne générant aucun revenu, comme par exemple celle de femme au foyer. Même les étudiants peuvent exercer une activité complémentaire dans le cadre d'une activité à temps partiel. L'activité complémentaire donnant naissance au revenu annexe est la plupart du temps exercée auprès d'un employeur différent et dans un domaine d'activité différent." />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="S" />
          <div className="glossire_card_row2">
            <Section title="Software-as-a-Service" body="L'utilisation du software-as-a-service (SaaS) fait en sorte, grâce à son ancrage dans le Cloud, que les données ne soient plus stockées localement (sur le lieu de travail), mais dans un centre de données externe. Le logiciel est utilisé via un navigateur. Ceci offre aux fournisseurs et aux utilisateurs certains avantages opérationnels et des réductions de coûts, tels que la maintenance centralisée, la réduction des spécificités locales, le calcul prévisionnel exact des coûts et la modularité (évolutivité) générale des systèmes." />
            <Section title="Solopreneur" body="Le terme solopreneur décrit un entrepreneur indépendant sans employés dont les relations d'affaires se déroulent principalement en ligne. Il est donc responsable de tous les processus d'entrepreneuriat, tels que le marketing, les ventes et la facturation. De plus, il peut choisir son lieu de travail de manière flexible, car il n'a généralement pas besoin de locaux commerciaux." />
           
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="T" />
          <div className="glossire_card_row2">
            <Section title="Tarif dégressif" body="Le prix de vente d'un produit est déterminé par les entreprises en fonction de différents critères. On dit que l'on échelonne les unités subdivisées d'une plus grande quantité. Les concepts de prix échelonnés ou de barèmes de prix en découlent. Les prix échelonnés sont la plupart du temps utilisés pour déterminer des rabais quantitatifs. Les prix échelonnés peuvent également dépendre des tailles, de la qualités des équipements et autres variables. En savoir plus à ce sujet." />
            <Section title="Tarif horaire" body="La valeur réelle du travail réalisé par une entreprise est déterminée par son taux horaire. Il établit le prix que le client paie pour le service exécuté. Le taux horaire d'une entreprise à but lucratif doit être déterminé en tenant compte de différents facteurs. En effet, il doit à la fois couvrir les frais et générer un certain profit. Les deux questions suivantes sont donc décisives: «En tant qu'entreprise, combien me coûte la réalisation de ce travail?» et «Quel est le profit que j'aimerais pouvoir tirer de mon travail?». Ces deux facteurs, le coût, ainsi que le bénéfice dégagé, guident l'entreprise dans la détermination du prix qu'elle doit demander en contrepartie de ses services." />
            <Section title="Taxe sur la valeur ajoutée (TVA)" body="La TVA est un impôt indirect sur la consommation perçu par le gouvernement fédéral. On dit «indirectement», parce qu'elle est payée sur un produit ou un service acheté. Est assujettie à la TVA toute entité ayant un chiffre d'affaires supérieur à 100'000 CHF par an. Les entreprises ayant un chiffre d'affaires inférieur sont exemptées de cette obligation. Le taux d'imposition normal est de 8% du chiffre d'affaires. Cela vaut pour la plupart des biens et services même si un taux réduit de TVA est applicable, par exemple pour la nourriture, les journaux ou encore les médicaments. En savoir plus sur la TVA" />
            <Section title="Temps de pause" body="Selon la loi, il existe une règle de pause fixe qui doit être respectée au travail. 5,5 à 7 heures de travail nécessitent une pause d'au moins 15 minutes, à partir de 7 heures de travail, une pause de 30 minutes doit être prise et pour 9 heures de travail ou plus, une pause d'1 heure est obligatoire. Les temps de pause ne sont généralement pas considérés comme du temps de travail, c'est pourquoi l'employeur n'est pas obligé de payer les pauses." />
            <Section title="Temps de travail" body="Le temps de travail, également appelé temps de travail planifié, est le temps pendant lequel un salarié effectue des prestations pour son employeur. En règle générale, la durée du temps de travail est précisée dans le contrat de travail. La durée maximale de travail journalière et la durée maximale de travail hebdomadaire, ainsi que les périodes de repos nécessaires sont régies par la loi suisse sur le travail." />
            <Section title="Tenue du journal" body="Chaque entreprise doit tenir une comptabilité correcte incluant différents éléments tels que le registre foncier, la comptabilité principale, le grand livre et divers livres annexes. Le registre foncier, également dénommé journal, doit être tenu en respectant certaines prescriptions, afin que les données soient transmises de façon pertinente à la comptabilité principale (dans le grand livre). L'entrepreneur conservait autrefois ces écrits dans un livre en papier. Ce principe n'est toutefois guère utilisé de nos jours. En effet, une comptabilité électronique s'avère être bien plus efficace. Voir ici comment un journal peut être tenu de façon pertinente." />
            <Section title="Traitement des commandes" body="Peu importe qu'il s'agisse d'une PME, d'une multinationale ou d'une start-up: il est vital pour chaque type d'entreprise de traiter les commandes de façon rapide et efficace. En anglais, on parle de Quote to Order (QTO) en référence au processus partant de l'établissement de l'offre jusqu'au traitement des commandes. Le traitement des commandes en détails" />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="V" />
          <div className="glossire_card_row2">
            <Section title="Validation" body="La validation (ou le récapitulatif) de la TVA correspond à l'examen de son décompte. Autrement dit, la validation de la TVA ou son récapitulatif, est une procédure de vérification qui permet de s'assurer que le formulaire de TVA a été correctement rempli." />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="X" />
          <div className="glossire_card_row2">
            <Section title="XBRL" body="XBRL est l'abréviation de «eXtensible Business reporting language». C'est une norme internationalement reconnue pour la transmission numérique d'informations commerciales. Il s'agit d'un langage gratuit mis à disposition par l'association caritative XBRL International. Toute personne y a librement accès. Cette norme est utilisée dans plus de 50 pays et son objectif est de rationaliser le rapport d'activités (Business Reporting) des entreprises." />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="Y" />
          <div className="glossire_card_row2">
            <Section title="Year To Date" body="Year to date (YTD) fait référence à la période allant du premier jour de l'exercice en cours à la date actuelle. Les informations YTD sont utiles pour l'analyse des tendances et la comparaison des données et des indicateurs de performances." />
          </div>
        </div>
        <div className="glossaire_card">
          <Alpha text="Z" />
          <div className="glossire_card_row2">
            <Section title="ZUGFeRD" body="ZUGFeRD est l'abréviation de «Zentraler User Guide des Forums elektronische Rechnung Deutschland», c'est-à-dire «Guide central de l'utilisateur du forum allemand des factures électroniques». Les factures créées en utilisant cette norme associent les avantages des factures papier et de la procédure EDI. Cette forme de facture électronique contient une image de facture visible, à savoir un fichier PDF / A-3, sur lequel toutes les données comptables sont visibles pour le destinataire. Cette norme relative aux factures électroniques développée par FeRD permet par ailleurs l'intégration de toutes les informations de facturation sous la forme d'un fichier XML, informations grâce auxquelles la facture peut être importée automatiquement et évaluée par l'utilisateur." />
          </div>
        </div>
      </div>
      <Trial />
      <section id="contact">
        <h4>
          Avez-vous encore des questions ? Appelez-nous:{" "}
          <span>+216 71 808 862</span>{" "}
        </h4>
        <h4>
          Si vous préférez nous écrire: <span>contact@faji.com.tn</span>
        </h4>
      </section>      <BTTButton/>

      <Footer />
    </>
  );
}

const Section = ({ title, body }) => {
  return (
    <div className="glossaire_paragraph">
      <span> {title} </span>
      <p> {body} </p>
    </div>
  );
};
const Alpha = ({ text }) => {
  return <div className="glossaire_card_row1">{text}</div>;
};
