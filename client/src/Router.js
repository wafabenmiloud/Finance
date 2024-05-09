import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import AdvantagesScreen from './screens/Advantages/Advantages';
import Functionalities from "./screens/Functionalities/Functionalities";
import Support from './screens/Support/Support';
import PricingScreen from './screens/Pricing/Pricing';
import SignUp from './screens/Sign/SignUp';
import SignIn from './screens/Sign/SignIn';
import TrialScreen from './screens/Trial_screen/Trial';
import AppMarket from './screens/AppMarket/AppMarket';
import Comptables from './screens/Comptables/Comptables';
import TrouverComptable from './screens/Trouver_comptable/TrouverComptable';
import Sales from './screens/Sales/Sales';
import Campus from './screens/Campus/Campus';
import Banking from './screens/Banking/Banking';
import ContactManagement from './screens/Contact_management/Contact_management';
import Accounting from './screens/Accounting/Accounting';
import Qui from './screens/qui_somme_nous/Qui';
import Contact from './screens/contact/Contact';
import SalesAccounting from './screens/Sales_accounting/SalesAccounting';
import TimeMg from './screens/time_management/Time_mg';
import FajiCommerce from './screens/Faji_Commerce/Faji_commerce';
import ShowcaseFunctionalities from './screens/Showcase_functionalities/ShowcaseFunctionalities';
import JobList from './screens/Job_list/JobList';
import StockMg from './screens/stock_management/Stock_mg';
import Renseignements from './screens/renseignements/Renseignements';
import ProjectsMg from './screens/projects_management/Projects_mg';
import LoginSignup from './screens/Login_Signup/LoginSignup';
import FajiGo from './screens/faji_go/FajiGo';
import Demarrage from './screens/demarrage/Demarrage';
import Aide from './screens/aide/Aide';
import TimeLine from './screens/Time_line/TimeLine';
import Academy from './screens/academy/Academy';
import ProductsUpdates from './screens/ProductsUpdates/ProductsUpdates';
import Customer from './screens/customer/Customer';
import Glossaire from './screens/glossaire/Glossaire';
import NewsletterSubscribe from './screens/Newsletter_subscribe/NewsletterSubscribe';
import Api from './screens/api_page/Api';
import Activities from './screens/activities/Activities';
import JobDetails from './screens/Job_details/JobDetails';
import NosDirectives from './screens/Nos_directives/NosDirectives';
import ConfPolicy from './screens/Conf_policy/ConfPolicy';
import Artisanat from './screens/artisanat/Artisanat';
import Commerce from './screens/commerce/Commerce';
import LegalInformation from './screens/Legal_information/LegalInformation';
import Architect from './screens/architectes/Architect';
import Immobiliere from './screens/Immobiliere/Immobiliere';
import Bvr from './screens/Bvr/Bvr';
import Facturation from './screens/Facturation/Facturation';
import Agences from './screens/agences/Agences';
import OnlineAccounting from './screens/Online_accounting/OnlineAccounting';
import Nettoyage from './screens/nettoyage/Nettoyage';
import SwissTVA from './screens/Swiss_tva/SwissTVA';
import Emploi from './screens/Emploi/Emploi';
import IsoNorms from './screens/Iso_norms/IsoNorms';
import Cloud from './screens/cloud_securite/Cloud';
import Chaos from './screens/chaos/Chaos';
import JournalExplaination from './screens/Journal_explaination/JournalExplaination';
import CoFi from './screens/CoFi/CoFi';
import Automation from './screens/automation/Automation';
import InvoicingSoftware from './screens/Invoicing_software/InvoicingSoftware';
import Facture from './screens/facture/Facture';
import Offers from './screens/Offers/Offers';
//dashboard
import HomeDash from './screens/Home__dash/Home';
import Settings from './screens/Settings/Settings';
import DataImport from './screens/Data_importation/DataImport';
import ContactTous from './screens/Contact_tous/ContactTous';
import MiseEnPage from './screens/Mise_en_page/MiseEnPage';
import VosEntreprise from './screens/Vos_entreprise/VosEntreprise';
import PwChange from './screens/Password_change/PwChange';
import ShowDetails from './screens/Show_details/ShowDetails';
import EditProfile from './screens/Edit_profile/EditProfile';
import Ventes from './screens/Ventes/Ventes';
import Security from './screens/Security/Security';
import Authenticator from './screens/Authenticator/Authenticator';
import Credits from './screens/Credits/Credits';
import AnalyseVente from './screens/analyse_ventes/AnalyseVente';
import AnalyseVente2 from './screens/analyse_ventes/AnalyseVente2';
import Offres from './screens/Offres/Offres';
import VentesComm from './screens/Ventes_comm/VentesComm';
import CommanderFaji1 from './screens/Commander_Faji1/Commander_faji1';
import Commander2 from './screens/Commander_faji2/Commander2';
import Commander3 from './screens/Commander_Faji3/Commander3';
import Produits from './screens/Produits/Produits';
import ProduitsES from './screens/Produits_E_S/ProduitsES';
import ProduitsNiveaux from './screens/Produits_Niveaux/ProduitsNiveaux';
import VueParametres from './screens/Vue_parametres/Vue_parametres';
import ProduitForm from './screens/Produits/ProduitForm';
import VueParametersEntreprise from './screens/Vue_parameters_entreprise/Vue_parameters_entreprise';
import VueEntreprise from './screens/Vue_entreprise/Vue_entreprise';
import AchatComm from './screens/Achat_Comm/AchatComm';
import AchatDep from './screens/Achat_Dep/AchatDep';
import AchatFact from './screens/Achat_Fact/AchatFact';
import VueDonneesDeBase from './screens/Vue_donnees_de_base/Vue_donnees_de_base';
import BankingDash from './screens/Banking_dash/Banking';
import Comptabilite from './screens/Comptabilite/Comptabilite';
import DownloadLogo from './screens/Download_logo/Download_logo';
import EcritureManuelle from './screens/EcritureManuelle/EcritureManuelle';
import FeuilleDeCompte from './screens/FeuilleDeCompte/FeuilleDeCompte';
import CommercialActivity from './screens/Commercial_activity/Commercial_activity';
import Projets from './screens/Projets/Projets';
import Projets2 from './screens/Projets2/Projets2';
import Tasks from './screens/Taches/Tasks';
import Boite from './screens/Boite_reception/Boite';
import TaskForm from './screens/Taches/TaskForm';
import Salaires from './screens/Salaires/Salaires';
import GroupeProduit from './screens/vue_groupe_produits/GroupeProduit';
import VueStockage from './screens/vue_stockage/VueStockage';
import VueEmplacement from './screens/vue_emplacement/VueEmplacement';
import VueProjet from './screens/vue_projets/VueProjet';
import VueStatut from './screens/vue_statut/VueStatut';
import VueCategorie from './screens/vue_categorie/VueCategorie';
import VueFormule from './screens/vue_formule/VueFormule';
import VueTitre from './screens/vue_titre/VueTitre';
import VueSecteur from './screens/vue_secteur/VueSecteur';
import VueUnite from './screens/vue_unite/VueUnite';
import VueCentreEnvoi from './screens/vue_parametres_centre_envoi/VueCentreEnvoi';
import VueApps from './screens/vue_parametres_apps/VueApps';
import VueModifier from './screens/vue_modifier/VueModifier';
import VuePackages from './screens/vue_parametres_packages/VuePackages';
import VueApi from './screens/vue_parametres_api/VueApi';
import VueComptabilite from './screens/vue_parametres_comptabilite/VueComptabilite';
import VueAppsApi from './screens/vue_parametres_appsapi/VueAppsApi';
import VueFonctions from './screens/Vue_fonctions/VueFonctions';
import Employee from './screens/Employee/Employee';
import NewEmployee from './screens/NewEmployee/NewEmployee';
import Entreprise from './screens/Entreprise/Entreprise';
import Documents from './screens/Documents/Documents';
import Notifications from './screens/Notifications/Notifications';
import AuthContext from "./context/AuthContext";
function Router() {
    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/advantages" element={<AdvantagesScreen />} />
                <Route path="/functions" element={<Functionalities />} />
                <Route path="/support" element={<Support />} />
                <Route path="/pricing" element={<PricingScreen />} />
                <Route path="/trial" element={<TrialScreen />} />
                <Route path="/market" element={<AppMarket />} />
                <Route path="/comptables" element={<Comptables />} />
                <Route path="/comptable" element={<TrouverComptable />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/banking" element={<Banking />} />
                <Route path="/contactManagement" element={<ContactManagement />} />
                <Route path="/accounting" element={<Accounting />} />
                <Route path="/quisommesnous" element={<Qui />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/salesaccounting" element={<SalesAccounting />} />
                <Route path="/time" element={<TimeMg />} />
                <Route path="/fajicommerce" element={<FajiCommerce />} />
                <Route path="/showcase" element={<ShowcaseFunctionalities />} />
                <Route path="/joblist" element={<JobList />} />
                <Route path="/stock" element={<StockMg />} />
                <Route path="/project" element={<ProjectsMg />} />
                <Route path="/renseignements" element={<Renseignements />} />
                <Route path="/loginjob" element={<LoginSignup />} />
                <Route path="/fajigo" element={<FajiGo />} />
                <Route path="/productsupdates" element={<ProductsUpdates />} />
                <Route path="/demarrage" element={<Demarrage />} />
                <Route path="/aide" element={<Aide />} />
                <Route path="/timeLine" element={<TimeLine />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/glossaire" element={<Glossaire />} />
                <Route path="/newslettersubscribe" element={<NewsletterSubscribe />} />
                <Route path="/api" element={<Api />} />
                <Route path="/activity" element={<Activities />} />
                <Route path="/jobdetails" element={<JobDetails />} />
                <Route path="/nosdirectives" element={<NosDirectives />} />
                <Route path="/confpolicy" element={<ConfPolicy />} />
                <Route path="/artisanat" element={<Artisanat />} />
                <Route path="/commerce" element={<Commerce />} />
                <Route path="/legalinformation" element={<LegalInformation />} />
                <Route path="/architect" element={<Architect />} />
                <Route path="/immobiliere" element={<Immobiliere />} />
                <Route path="/bvr" element={<Bvr />} />
                <Route path="/facturation" element={<Facturation />} />
                <Route path="/agences" element={<Agences />} />
                <Route path="/onlineaccounting" element={<OnlineAccounting />} />
                <Route path="/nettoyage" element={<Nettoyage />} />
                <Route path="/swisstva" element={<SwissTVA />} />
                <Route path="/emploi" element={<Emploi />} />
                <Route path="/isonorms" element={<IsoNorms />} />
                <Route path="/cloud" element={<Cloud />} />
                <Route path="/chaos" element={<Chaos />} />
                <Route path="/journalexplaination" element={<JournalExplaination />} />
                <Route path="/auto" element={<Automation />} />
                <Route path="/cofi" element={<CoFi />} />
                <Route path="/invoicesoftware" element={<InvoicingSoftware />} />
                <Route path="/facture" element={<Facture />} />
                <Route path="/offers" element={<Offers />} />  <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                {!loggedIn && (
                    <>

                    </>
                )}  
                <Route path="/dash" element={<VosEntreprise />} />
                <Route path="/userdash" element={<HomeDash />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dataimport" element={<DataImport />} />
                <Route path="/contacttous" element={<ContactTous />} />
                <Route path="/miseenpage" element={<MiseEnPage />} />
                <Route path="/passwordedit" element={<PwChange />} />
                <Route path="/profileedit" element={<EditProfile />} />
                <Route path="/ventes" element={<Ventes />} />
                <Route path="/security" element={<Security />} />
                <Route path="/authenticator" element={<Authenticator />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/analysevente" element={<AnalyseVente />} />
                <Route path="/analysevente2" element={<AnalyseVente2 />} />
                <Route path="/offres" element={<Offres />} />
                <Route path="/ventescomm" element={<VentesComm />} />
                <Route path="/command1" element={<CommanderFaji1 />} />
                <Route path="/commander2" element={<Commander2 />} />
                <Route path="/commander3" element={<Commander3 />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/produits2" element={<ProduitsES />} />
                <Route path="/produits3" element={<ProduitsNiveaux />} />
                <Route path="/produitform" element={<ProduitForm />} />
                <Route path="/achatcomm" element={<AchatComm />} />
                <Route path="/achatdep" element={<AchatDep />} />
                <Route path="/achatfact" element={<AchatFact />} />
                <Route path="/bankingdash" element={<BankingDash />} />
                <Route path="/comptabilite" element={<Comptabilite />} />
                <Route path="/ecrman" element={<EcritureManuelle />} />
                <Route path="/feuilledecompte" element={<FeuilleDeCompte />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets2" element={<Projets2 />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/boite" element={<Boite />} />
                <Route path="/taskform" element={<TaskForm />} />
                <Route path="/salaires" element={<Salaires />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/entreprise" element={<Entreprise />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/notif" element={<Notifications />} />
                <Route path="/newemployee" element={<NewEmployee />} />
                <Route path="/vuecentreenvoi" element={<VueCentreEnvoi />} />
                <Route path="/vuedonneesdebase" element={<VueDonneesDeBase />} />
                <Route path="/vueentreprise" element={<VueEntreprise />} />
                <Route path="/vueappsapi" element={<VueAppsApi />} />
                <Route path="/vueapi" element={<VueApi />} />
                <Route path="/vueapps" element={<VueApps />} />
                <Route path="/vuecompt" element={<VueComptabilite />} />
                <Route path="/vuepackages" element={<VuePackages />} />
                <Route path="/vuefonctions" element={<VueFonctions />} />
                <Route path="/vueparametersentreprise" element={<VueParametersEntreprise />} />
                <Route path="/downloadlogo" element={<DownloadLogo />} />
                <Route path="/vueunite" element={<VueUnite />} />
                <Route path="/commercialactivity" element={<CommercialActivity />} />
                <Route path="/vuecategorie" element={<VueCategorie />} />
                <Route path="/vuetitre" element={<VueTitre />} />
                <Route path="/vueformule" element={<VueFormule />} />
                <Route path="/vuesecteur" element={<VueSecteur />} />
                <Route path="/vuestockage" element={<VueStockage />} />
                <Route path="/vueemplacement" element={<VueEmplacement />} />
                <Route path="/vuegroupeproduit" element={<GroupeProduit />} />
                <Route path="/vueprojet" element={<VueProjet />} />
                <Route path="/vuestatut" element={<VueStatut />} />
                <Route path="/vuemodifier" element={<VueModifier />} />
                <Route path="/showdetails" element={<ShowDetails />} />
                <Route path="/vueparameters" element={<VueParametres />} />
                {loggedIn && (
                    <>

                    </>
                )}



            </Routes>
        </BrowserRouter>
    );
}
export default Router;
