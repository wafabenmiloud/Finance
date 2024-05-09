import React from "react";
import "./Comptables.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Testimonials from "../../components/testimonials/Testimonials";
import img2 from "../../assets/home_imgs/service2.png";
import img1 from "../../assets/ser2.png";
import { BsCheckLg } from "react-icons/bs";
import icon1 from "../../assets/diag_icon1.svg";
import icon2 from "../../assets/diag_icon2.svg";
import icon3 from "../../assets/diag_icon3.svg";
import icon4 from "../../assets/diag_icon4.svg";
import client1 from "../../assets/comp_client1.png";
import client2 from "../../assets/comp_client2.png";
import client3 from "../../assets/comp_client3.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import tic from "../../assets/market_imgs/tic.svg";
import gif1 from "../../assets/comptables_gif1.gif";
import gif2 from "../../assets/comptables_gif2.gif";
import gif3 from "../../assets/comptables_gif3.gif";
import ToggleLine from "../../components/toggle_line/Toggle_line";
import BTTButton from "../../components/BTTButton/BTTButton";

export default function Comptables() {
  return (
    <>
      <Navbar />
      <div className="comptables_header">
        <div className="center">
          <h1>
            <span className="span1">Faji </span>- le logiciel de comptabilité
            pour les comptables
            <span className="span2">
              {" "}
              Pour une collaboration gagnant-gagnant
            </span>
          </h1>
          <p>
            Plus de 1000 comptables partenaires certifiés sont déjà convaincus
            par notre logiciel de gestion et ont pu mettre en place une
            collaboration encore plus efficace et fructueuse avec leurs mandants
            .
          </p>
        </div>
        <div className="comptables_text">
          <div className="comptables_texttt">
            <Line text="Simplifiez la gestion administrative et comptable de vos clients PME avec notre logiciel   ." />
            <Line text="Gagnez du temps pour offrir des conseils à valeur ajoutée - devenez digital CFO avec Faji   ." />
            <Line text="Le programme de partenariat avec les comptables de Faji vous aide à booster votre chiffre d'affaires et à attirer de nouveaux clients   ." />
            <Line text="Transparent et sans frais cachés: une assistance compétente 24h/24 et 7j/7 pour vous et vos mandants   ." />
            <button>Inscrivez-vous gratuitement </button>
          </div>
          <div className="comptables_imgs">
            <div className="comptables_img2">
              <img src={img2} alt="img" />
            </div>
            <div className="comptables_img1">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="comptables_diagram">
        <div className="comptables_diagram_left">
          <DiagramRow
            icon={icon1}
            title="Boostez vos acquisitions client"
            text="Vous serez inscrit dans notre répertoire de comptable, consulté par plus de 60'000 PME suisses   ."
          />
          <DiagramRow
            icon={icon2}
            title="Gagnez du temps"
            text="Travaillez en ligne avec vos mandants de manière simple et efficace et consacrez ainsi plus de temps au conseil client et autres processus   ."
          />
          <DiagramRow
            icon={icon3}
            title="Assistance gratuite 24h/24, 7j/7"
            text="Transparent et sans frais cachés : nous sommes fiers de vous proposer une assistance compétente et fiable   ."
          />
          <DiagramRow
            icon={icon4}
            title="Tunisia Made Software"
            text="Vos données sont stockées en toute sécurité en Suisse   ."
          />
        </div>
        <div class="line"></div>

        <div className="comptables_diagram_right">
          <h1>
            Vos avantages en tant que <span> comptable</span>
          </h1>
          <h3>
            Faji vous permet de collaborer facilement et efficacement avec vos
            mandants — en ligne et sur une plateforme commune — sans
            connaissances informatiques requises . Vous pouvez ainsi gagner du
            temps et vous concentrer sur votre cœur de métier, tout en acquérant
            régulièrement de nouveauxclients .Grâce à Faji, ceux-ci peuvent
            gérer facilement l'ensemble des processus de leur PME .
          </h3>
        </div>
      </div>
      <div className="comptables_clients">
        <div className="comptables_clients_center">
          <h1>
            Tout savoir sur <span> Faji </span> et les comptables
          </h1>
          <p>
            Faji facilite considérablement la collaboration entre les comptables
            et leurs mandants . Vous pouvez gérer tous vos clients au même
            endroit via le portail comptable, ce qui vous permet de gagner un
            temps précieux . En un clic, vous avez une bonne vue d'ensemble de
            vos mandants . Du traitement des commandes pour les achats et les
            ventes à la comptabilité financière et salariale intégrée, en
            passant par l'échange de données simplifié avec vos mandants, les
            processus sont plus efficaces et votre travail est largement
            simplifié .
          </p>
        </div>
        <div className="client_cards">
          <SlArrowLeft className="remove" />
          <ClientCard
            img={client1}
            title="Client Faji"
            mini_title="“Felix Muster”"
            body="Faji simplifie et automatise toute la gestion de mon entreprise  . Je travaille par ailleurs facilementen ligne avec mon comptable Faji, qui m'assisteainsi de manière flexible"
            line1="Comptabilité financière et comptabilité dessalaires intégrées  ."
            line2="Gestion des contacts 24h/24, 7j/7 sur applimobile notamment  ."
            line3="Traitement des commandes (achats et ventes)  ."
            line4="Interfaces avec l'e-banking intégrées  ."
            line5="Gestion des projets avec enregistrement dutemps de travail"
            line6="Gestion des stocks en ligneAssistance personnalisée gratuite"
          />
          <ClientCard
            img={client2}
            title="Client Faji"
            mini_title="“Felix Muster”"
            body="Faji simplifie et automatise toute la gestion de mon entreprise  . Je travaille par ailleurs facilementen ligne avec mon comptable Faji, qui m'assisteainsi de manière flexible"
            line1="Comptabilité financière et comptabilité dessalaires intégrées  ."
            line2="Gestion des contacts 24h/24, 7j/7 sur applimobile notamment  ."
            line3="Traitement des commandes (achats et ventes)  ."
            line4="Interfaces avec l'e-banking intégrées  ."
            line5="Gestion des projets avec enregistrement dutemps de travail"
            line6="Gestion des stocks en ligneAssistance personnalisée gratuite"
          />
          <ClientCard
            img={client3}
            title="Client Faji"
            mini_title="“Felix Muster”"
            body="Faji simplifie et automatise toute la gestion de mon entreprise  . Je travaille par ailleurs facilementen ligne avec mon comptable Faji, qui m'assisteainsi de manière flexible"
            line1="Comptabilité financière et comptabilité dessalaires intégrées  ."
            line2="Gestion des contacts 24h/24, 7j/7 sur applimobile notamment  ."
            line3="Traitement des commandes (achats et ventes)  ."
            line4="Interfaces avec l'e-banking intégrées  ."
            line5="Gestion des projets avec enregistrement dutemps de travail"
            line6="Gestion des stocks en ligneAssistance personnalisée gratuite"
          />
          <SlArrowRight className="remove" />
        </div>
      </div>
      <div className="comptables_test">
        <div className="comptables_clients_center">
          <h1>
            <span> Faji </span> , le partenaire idéal pour une coopération sans
            faille
          </h1>
          <p>
            Je peux travailler avec mon client en ligne en quelques clics et de
            manière flexible .Je l'assiste et leconseille avec précision dans
            tous les domaines nécessaires - souvent au-delà de sa comptabilité»
          </p>
        </div>
        <div className="comptables_portail">
          <div className="comptables_portail_col1">
            <div className="comptables_portail_row1">
              <h1>Portail comptable de Faji</h1>
              <div className="portail_line">
                <img src={tic} alt="img" />
                <p>
                  Flexibilité maximale : votre client peut s'occuperlui-même des
                  travaux de comptabilisationou vous confier certaines tâches
                </p>
              </div>
              <div className="portail_line">
                <img src={tic} alt="img" />
                <p>
                  Vue à 360 degrés : du traitement descommandes (achats et
                  ventes) à lacomptabilité financière et des salaires -tout sur
                  une même plateforme
                </p>
              </div>
              <div className="portail_line">
                <img src={tic} alt="img" />
                <p>
                  Vue à 360 degrés : du traitement descommandes (achats et
                  ventes) à lacomptabilité financière et des salaires -tout sur
                  une même plateforme
                </p>
              </div>
            </div>
            <button>Testez Gratuitement</button>
            <p className="comptables_portail_col1_p">
              Testez Faji gratuitement et sans engagement pendant 30 jours
            </p>
          </div>
          <div className="comptables_portail_col2">
            <table>
              <tr>
                <td>
                  Plus de 60 000 PME : de nouveaux clients à acquérir de manière
                  régulière
                </td>
              </tr>
              <tr>
                <td>
                  Du temps en plus pour les activités de conseil :
                  concentrez-vous sur votre cœur de métier
                </td>
              </tr>
              <tr>
                <td>
                  Offre très large de formations initiales et continues- en
                  ligne et hors ligne
                </td>
              </tr>
              <tr>
                <td>
                  Packages et services exclusifs pour les comptables, assistance
                  personnalisée incluse
                </td>
              </tr>
              <tr>
                <td>Programme de partenariat attrayant pour les comptables</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="comptables_partenaires">
          <div className="comptables_clients_center">
            <h1>
              <span> Faji </span>- Un partenaire sûr et fiable
            </h1>
          </div>
          <div className="comptables_partenaires_cards">
            <PartCard
              icon={gif1}
              title="Tout sur le cloud"
              body="Travaillez avec vos mandants et vos collaborateurs en temps réel   .
              À tout moment et où que vous soyez, au bureau ou à votre domicile   ."
            />
            <PartCard
              icon={gif2}
              title="Sécurité garantie"
              body="La sécurité avant tout ! Vos données sont stockées dans des centres de données suisses certifiés hautement sécurisés et sont sauvegardées régulièrement  ."
            />
            <PartCard
              icon={gif3}
              title="Sécurité garantie"
              body="La sécurité avant tout ! Vos données sont stockées dans des centres de données suisses certifiés hautement sécurisés et sont sauvegardées régulièrement  ."
            />
          </div>
          <div className="comptables_partenaires_lines">
            <ToggleLine
              title="Que contient le package comptable   ?"
              details="Faji propose un package spécifique qui répond aux besoins des fiduciaires et offre une variété de fonctions. Ce package vous permet d'utiliser les fonctions de la comptabilité financière et de la comptabilité des salaires séparément des autres fonctions de Faji et de les facturer directement. À noter: La nouvelle offre peut être utilisée dès à présent pour tous les comptes créés par les fiduciaires. En savoir plus."
            />
            <ToggleLine
              title="Comment fonctionne la facturation   ?"
              details="En règle générale, le package est facturé au fiduciaire. Vous recevrez une facture séparée pour chaque abonnement à un package fiduciaire. Lisez notre article d'aide pour en savoir plus."
            />
            <ToggleLine
              title="Comment créer un nouveau compte Faji pour mon mandant   ?"
              details="Pour commencer, allez dans l'onglet «Mandants» de votre portail fiduciaire et ajoutez un nouveau mandant. Notre assistant de configuration vous guidera ensuite étape par étape tout au long de la configuration du nouveau compte Faji. Cliquez ici pour en savoir plus."
            />
            <ToggleLine
              title="Comment Faji accompagne-t-il mes mandants dans la digitalisation de leur entreprise   ?"
              details="Faji est un logiciel de gestion conçu pour les PME et aide vos mandants à prendre le virage du numérique. Grâce au cloud, vous et vos mandants avez accès aux données à tout moment et où que vous soyez. Par ailleurs, le logiciel permet aux mandants de réduire leur travail administratif de plus d'un tiers."
            />
          </div>
        </div>
      </div>
      <Testimonials title="Plus de 60'000 indépendants, petites entreprises et start-ups font déjà confiance à " span="Faji"/>
      <BTTButton/>

      <Footer />
    </>
  );
}

const PartCard = ({ icon, title, body }) => {
  return (
    <div className="comptables_partenaires_card">
      <img src={icon} alt="img" />
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
const Line = ({ text }) => {
  return (
    <div className="comptables_line">
      <div className="comptables_tic_wrapper">
        <div className="comptables_tic">
          <BsCheckLg className="comptables_tic_icon" />
        </div>
      </div>
      <div className="comptables_line_text">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
const DiagramRow = ({ icon, text, title }) => {
  return (
    <div class="diagram_row">
      <div class="content">
        <p class="diagram_title">{title}</p>
        <p class="diagram_content">{text}</p>
      </div>
      <div class="diagram_line"></div>
      <div class="diagram_icon">
        <img src={icon} alt="img" />
      </div>
    </div>
  );
};
const ClientCard = ({
  img,
  title,
  mini_title,
  body,
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
}) => {
  return (
    <div className="client_card">
      <div className="client_card1">
        <img src={img} alt="img" />
      </div>
      <div className="client_card2">
        <h1>{title}</h1>
        <h2>{mini_title}</h2>
        <h3>{body}</h3>
        <div className="divider"></div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line1}</p>
        </div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line2}</p>
        </div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line3}</p>
        </div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line4}</p>
        </div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line5}</p>
        </div>
        <div className="client_card2_line">
          <img src={tic} alt="img" />
          <p>{line6}</p>
        </div>
      </div>
    </div>
  );
};
