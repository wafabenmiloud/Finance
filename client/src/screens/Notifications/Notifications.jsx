import React from "react";
import "./Notifications.css";
import Navbar2 from "../../components/navbar2_dash/Navbar2Dash";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import Footer from "../../components/footer_dash/FooterDash";

export default function Notifications() {
  return (
    <>
      <Navbar2 />
      <div className="notif_wrapper">
        <h5>Nouveautés</h5>
        <ToggleLine
          title="LPP et LAA Assurance principale pour la déclaration AVS (25.05.2023)"
          details="Chers utilisateurs,
          Veuillez noter qu'en dessous de 'Entreprise / Assurances / AVS', il y a de nouveaux champs obligatoires pour l'assurance principale LPP et LAA. Nous commençons à collecter ces données car elles sont obligatoires pour les rapports ELM V5, qui seront disponibles au début de l'année 2024.
          Votre équipe Paie"
        />
        <ToggleLine
          title="Données certificat de salaire : Changement d'options pour les voitures de société (18.05.2023)"
          details="Chers utilisateurs,
Veuillez noter que dans les données certificat de salaire, les options du véhicule professionnel ont été modifiées.
Votre équipe Paie"
        />
        <ToggleLine
          title="Degré de parenté avec le propriétaire (entreprises agricoles) (28.03.2023)"
          details="Chers utilisateurs,
Veuillez noter qu'un nouveau paramètre est disponible dans les paramètres de l'entreprise sous 'Données de base' : Entreprise agricole - cette option active au niveau des employés la sélection de la Relation avec le propriétaire. Ces données sont surtout nécessaires dans le contexte des entreprises agricoles. Elles servent à répondre à des questions telles que le salaire global, etc. lors du décompte avec la caisse de compensation et seront transmises électroniquement aux caisses de compensation avec la nouvelle version de la PUCS (fin 2023).
Votre équipe Paie"
        />
        <ToggleLine
          title="Le concubinage doit être activé pour le code tarifaire H, P ou U (09.03.2023)"
          details="Chers utilisateurs,
Veuillez noter que pour les collaborateurs avec le code de tarif H, P ou U, le Concubinage doit être réglé sur 'Non' ou 'Oui' avec les détails du concubinage. Cette modification sera nécessaire pour les futures déclarations d'impôts à la source.
Votre équipe Paie"
        />
        <ToggleLine
          title="Champs obligatoires pour les enfants dans les données de l'employé (19.01.2023)"
          details="Chers utilisateurs,
Veuillez noter que dans les données de l'employé sous 'Enfants', les champs suivants sont désormais obligatoires :
 * Prénom
 * Nom de famille
* Date de naissance

Votre équipe Paie"
        />
        <ToggleLine
          title="Nouvelle année de paie et autres mises à jour (29.11.2022)"
          details="Chers utilisateurs,
nous avons maintenant rendu l'année 2023 disponible pour l'ouverture dans la Payroll.
Les changements:
Assurance-chômage: le pour-cent de solidarité est supprimé au 1er janvier 2023
Nouveaux assureurs ajoutés pour l'envoi ELM
Tenez compte des nouveaux montants limites de la LPP

Nous nous réjouissons de cette nouvelle année,
Votre équipe Paie"
        />
        <ToggleLine
          title="Nouveaux détails obligatoires sur le concubinage (29.09.2022)"
          details="Chers utilisateurs,
veuillez noter que suite à la réglementation Swissdec, il est nécessaire de fournir des informations supplémentaires sur la garde des enfants pour les employés soumis à l'impôt à la source en matière de concubinage. Par conséquent, vous remarquerez que la sauvegarde des changements pour les employés soumis à l'impôt à la source n'est pas possible à moins que cette information ne soit fournie dans la section Impôt à la source des détails de l'employé.
Ceci ne concerne que les employés soumis à l'impôt à la source avec l'option de concubinage activée.
Votre équipe de paie"
        />
        <ToggleLine
          title="Calcul du 13e mois de salaire (12.09.2022)"
          details="Chers utilisateurs,
Veuillez noter que désormais, les absences telles que l'accident, la maladie, la maternité/paternité et le service militaire sont également prises en compte pour le calcul du 13e mois de salaire.
Votre équipe Paie"
        />
        <ToggleLine
          title="Calcul des taux d'imposition à la source pour les autres emplois (31.08.2022)"
          details="Chers utilisateurs,
Veuillez noter que depuis le 31 août, le calcul des taux d'imposition à la source pour les collaborateurs ayant d'autres activités a été modifié. Ainsi, si le taux d'occupation n'est pas indiqué pour l'autre activité, le taux d'occupation total du collaborateur est considéré comme étant de 100% (selon la circulaire 45, 6.4 Revenu déterminant le taux en cas d'une ou plusieurs activités lucratives à temps partiel).
Votre équipe Paie"
        />
        <ToggleLine
          title="Nouvelles données obligatoires sur le partenaire de mariage (04.04.2022)"
          details="Chers utilisateurs,
veuillez noter que, conformément à la réglementation Swissdec, il est obligatoire de fournir des informations sur la résidence du conjoint des employés soumis à l'impôt à la source. Par conséquent, vous remarquerez que la sauvegarde des changements pour les employés qui sont soumis à l'impôt à la source n'est pas possible à moins que cette information ne soit fournie dans la section Impôt à la source des détails de l'employé.
Votre équipe Paie"
        />
        <ToggleLine
          title="Mise à jour des taux d'imposition à la source pour 2022 (04.04.2022)"
          details="Chers utilisateurs,
au début du mois de mars, nous avons mis à jour les taux d'imposition à la source qui seront utilisés tout au long de l'année 2022. Ceci fait suite aux dernières mises à jour de l'ESTV, les taux de certains cantons ayant été mis à jour en janvier et février. Les nouveaux taux seront automatiquement appliqués pour les calculs de l'impôt à la source.
Votre équipe Paie"
        />
        <ToggleLine
          title="Taux de l'impôt sur les nouvelles sources importées (05.01.2022)"
          details="Chers utilisateurs,
Les taux d'imposition à la source pour 2022 ont été mis à jour dans la Paie pour tous les cantons.
En outre, il convient de noter qu'il y a une modification de la part privée de la voiture de société, qui passe de 0,8 % à 0,9 %, ce qui est maintenant également reflété dans Paie.
Votre équipe Paie"
        />
        <ToggleLine
          title="Nouvelle année de paie et autres mises à jour (07.12.2021)"
          details="Chers utilisateurs,
nous avons maintenant rendu l'année 2022 disponible pour l'ouverture dans la Payroll. En outre, le modèle de certificat de salaire a été mis à jour conformément à la réglementation ESTV.
Nous nous réjouissons de cette nouvelle année,
Votre équipe Paie"
        />
        <ToggleLine
          title="Envoi par courriel des fiches de salaire (13.09.2021)"
          details="Chers utilisateurs,
au cours des deux derniers mois, nous avons rendu possible l'envoi par e-mail des fiches de salaire des employés à partir de Faji Payroll.
Cette fonctionnalité est disponible dans la section Documents de la Paie.
Nous espérons que cela vous permettra de gagner un peu de votre temps précieux,
Votre équipe Paie"
        />
        <ToggleLine
          title="Envoi plus efficace des bulletins de paie par courrier électronique (14.05.2021)"
          details="Chers utilisateurs,
Avec les dernières mises à jour de notre logiciel, nous avons rendu possible l'envoi par courrier électronique des bulletins de paie de chaque employé. Il suffit d'aller sur la page de paie individuelle d'un employé et l'option d'envoyer le bulletin de paie par e-mail est maintenant disponible.
En outre, il est maintenant possible de répéter l'envoi par e-mail de tous les bulletins de paie, au cas où vous auriez besoin de le faire après avoir apporté des modifications à plusieurs bulletins de paie.
Votre équipe de gestion des salaires"
        />
        <ToggleLine
          title="En quoi consiste au juste la comptabilité?"
          details="Lorsque vous effectuez votre comptabilité, la première étape consiste à organiser vos pièces comptables. C'est l'un des grands principes comptables: «Pas de comptabilisation sans pièce justificative.» Il faut ensuite comptabiliser l'impôt préalable et l'impôt sur le chiffre d’affaires, ainsi que l'imposition des résultats de l'entreprise. La gestion des actifs et l'inventaire sont également des processus comptables, tout comme la comptabilité analytique."
        />
        <ToggleLine
          title="Kurzarbeit und Jahreslohnausweis (07.01.2021)"
          details="Liebe Payroll-Benutzer,
wie Sie vielleicht wissen, haben wir in der Personalabrechnung eine Lösung für Mitarbeiter in Kurzarbeit vorgeschlagen. Diese Lösung beinhaltet die Verwendung von dedizierten Lohnarten für den Kurzarbeiterabzug - entweder eine neue, dedizierte Lohnart (2076) oder eine Kopie der Lohnart Karenztag (2075).
Im Moment ist jedoch die korrekte Berechnung für den Jahreslohnausweis noch nicht vorhanden, was bedeutet, dass dieser für Mitarbeiter mit Kurzarbeit nicht korrekt wäre.
Wir arbeiten an einer Lösung, die in Kürze zur Verfügung stehen wird. Wir werden Sie auf jeden Fall wieder informieren, sobald die Lösung da ist.
Ihr Team der Lohnbuchhaltung"
        />
        <ToggleLine
          title="Mises à jour des absences pour vacances et mises en page PDF (26.11.2020)"
          details="Chers utilisateurs,Aujourd’hui, nous aimerions vous informer sur deux changements récents dans la gestion des salaires.Tout d’abord, nous avons actualisé le mode de calcul des jours de vacances. Il n’est plus nécessaire de mettre à jour manuellement le nombre de jours de vacances sur le bulletin de paie car les vacances sont disponibles comme motif d’absence. Cela signifie que les vacances doivent être ajoutées au calendrier en allant sur Employés -> Absences et une fois que cela est fait, la valeur actualisée apparaîtra sur le bulletin de paie.De plus, nous avons ajouté de nouvelles mises en page pour le bulletin de paie PDF des employés. Dans les paramètres de l’entreprise, vous pouvez maintenant choisir entre deux nouveaux modèles de mise en page:- Standard - moderne et- Adresse à droite pour la poste/pingenComme toujours, nous espérons que vous trouverez ces changements utiles.Votre équipe de gestion des salaires"
        />
        <ToggleLine
          title="Transférer les heures de travail et enregistrer les jours de congé (10.08.2020)" 
          details="Chers clients,
Depuis la dernière mise à jour, vous pouvez transférer les heures de travail enregistrées depuis un projet Faji ou Clockodo vers votre comptabilité des salaires en un clic. Vous avez la possibilité de transférer les heures individuellement pour chaque mois sous 'Salaires' -> 'Tous les employés'. Le nombre d'heures est alors directement transféré sur les fiches de paie. Pour activer l’intégration Clockodo, allez sous 'Entreprise' -> 'Données de base' -> 'Divers'.
Nous avons par ailleurs mis en place une fonction simple permettant de suivre le nombre de jours de congé de vos employés. Cette information peut désormais figurer sur les fiches de paie. Pour l’activer, allez sous 'Entreprise' -> 'Données de base' -> 'Divers' -> 'Mise en page PDF'.
N’hésitez pas à nous faire part de vos remarques ou suggestions!
L’équipe Payroll"
        />
        <ToggleLine
          title="Vos déclarations d'impôt à la source à partir de la comptabilité des salaires de Faji (02.06.2020)"
          details="La comptabilité des salaires de Faji vous permet désormais de transmettre les données déterminantes pour l’impôt à la source via ELM. Vous pouvez ainsi effectuer le décompte de vos données (déclarations et corrections par exemple) par voie électronique via un processus uniforme et standardisé, sans plus avoir à vous soucier de toute la paperasse."
        />
        <ToggleLine
          title="L'envoi par e-mail des fiches de paie - paramètres supplémentaires (28.05.2020)"
          details="Chers utilisateurs,
Avec les dernières mises à jour de notre système de paie, nous avons ajouté quelques paramètres relatifs à la fonction d'envoi par courrier électronique des bulletins de paie qui peuvent vous être utiles.
Veuillez accéder à la page Entreprise → Données principales → Envoi de bulletins de paie par courriel pour en savoir plus sur la façon dont vous pouvez contrôler les paramètres de cette fonctionnalité.
Votre équipe Payroll"
        />
        <ToggleLine
          title="Autorisation spéciale d'accès au logiciel de paie Faji (15.05.2020)"
          details="Chers utilisateurs,
Lors de la dernière mise à jour de notre logiciel Faji, nous avons ajouté une autorisation spéciale dédiée au paiement des salaires dans la gestion des utilisateurs.
Grâce à cette nouvelle autorisation, vous pouvez désormais décider à quels utilisateurs vous autoriser l'accès au logiciel de paie sans que ceux-ci aient besoin de demander un droit d'accès au super-administrateur.
Veuillez noter que tous les utilisateurs qui étaient auparavant des super-administrateurs doivent désormais disposer de ces deux privilèges. Vous pouvez facilement modifier ce paramètre dans la gestion des utilisateurs de Faji (Paramètres → Plans, add-ons et utilisateurs → Gestion des utilisateurs).
Votre équipe chargée de la paie"
        />
      </div>
      <Footer />
    </>
  );
}
