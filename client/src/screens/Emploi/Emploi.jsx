import React from "react";
import "./Emploi.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/emploi_img1.png";
import img2 from "../../assets/emploi_img2.png";
import img3 from "../../assets/emploi_img3.png";
import img4 from "../../assets/rh1.png";
import img5 from "../../assets/rh2.png";
import BTTButton from "../../components/BTTButton/BTTButton";

import icon1 from "../../assets/emploi_icon1.svg";
import icon2 from "../../assets/emploi_icon2.svg";
import icon3 from "../../assets/emploi_icon3.svg";
import icon4 from "../../assets/emploi_icon4.svg";
import icon5 from "../../assets/emploi_icon5.svg";
import icon6 from "../../assets/emploi_icon6.svg";
import icon7 from "../../assets/emp_i1.svg";
import icon8 from "../../assets/emp_i2.svg";
import icon9 from "../../assets/emp_i3.svg";
import icon10 from "../../assets/emp_i4.svg";
import icon11 from "../../assets/emp_i5.svg";
import arrow from "../../assets/emploi_arrow.svg";
import { Link } from "react-router-dom";


export default function Emploi() {
  
  return (
    <>
      <Navbar />
      <div className="emploi_title">
        <h1>
          Emplois & carrière - <span>Rejoignez notre équipe</span>
        </h1>
        <p>
          Nous recherchons des collègues curieux, imaginatifs et enthousiastes
          qui collaborent avec nous pour faciliter la vie des petites
          entreprises.
        </p>
      </div>
      <div className="emploi_text">
        <h6>Tous les emplois à pourvoir chez nous</h6>
        <p>
          Chaque jour, nous travaillons dur pour que les propriétaires de
          petites entreprises réussissent. Cela vous semble ambitieux ? Ça
          l'est. C'est pourquoi nous avons besoin de votre aide.
        </p>
      </div>
      <div className="emploi_table">
        <table>
            <thead>
                <tr>
                    <td>Emplois trouvés</td>
                    <td>Département</td>
                    <td>Lieu du travail</td>
                    <td>Volume de travail</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Web Analyst 80 - 100%</td>
                    <td>Marketing</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">80-100% <button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
                <tr>
                    <td>Account Manager 100%</td>
                    <td>Sales</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">100%<button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
                <tr>
                    <td>Digital Sales Manager 100% (hybrid work)</td>
                    <td>Sales</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">100%<button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
                <tr>
                    <td>Junior Channel Partner Manager 80%</td>
                    <td>Sales</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">100%<button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
                <tr>
                    <td>Team Leader Services & Academy</td>
                    <td>Sales</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">100%<button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
                <tr>
                    <td>Collaborateur(trice) de vente 100 %</td>
                    <td>Sales</td>
                    <td>Rapperswil</td>
                    <td className="emploi_table_row">100%<button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="emploi_title">
        <h1>Vivier de talents</h1>
        <p>
          Si vous avez le sens des affaires dans le sang et que vous avez de
          l'expérience dans le secteur B2B ou si vous souhaitez conseiller nos
          clients Faji par téléphone en anglais ou en français, alors vous
          devriez absolument nous rencontrer et déposer votre dossier de
          candidature dans notre vivier de talents. Après avoir reçu l'accusé de
          réception, nous vérifierons vos documents et prendrons ensuite contact
          avec vous.
        </p>
      </div>
      <div className="emploi_table">
        <table>
            <thead>
                <tr>
                    <td>Emplois trouvés</td>
                    <td>Département</td>
                    <td>Lieu du travail</td>
                    <td>Volume de travail</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Talent-Pool: Support Specialist 80-100%</td>
                    <td>Customer Support</td>
                    <td>Vevey</td>
                    <td className="emploi_table_row">80-100% <button><Link style={{color:'white'}} to="/jobdetails"> Détails</Link></button></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="emploi_text2">
        <div className="emploi_text2_col">
          <h6>Le job de tes rêves n'existe pas?</h6>
          <p>
            Mais vous êtes convaincu que vous devez faire partie de notre
            histoire à succès? Postulez dès maintenant avec une lettre de
            motivation et un CV!
          </p>
          <button><Link style={{color:'white'}} to="/loginjob">Soumettre une candidature spontanée</Link></button>
        </div>
        <div className="emploi_text2_row">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
        </div>
      </div>
      <div className="emploi_title">
        <h1>Plus qu'un simple emploi </h1>
        <p>
          Des employés satisfaits font des clients satisfaits. C'est aussi
          simple que cela.
        </p>
      </div>
      <div className="emploi_text_row">
        <img src={img3} alt="img" />
        <img src={img3} alt="img" />
      </div>
      <div className="emploi_title">
        <h1>Faji Benefits </h1>
      </div>
      <div className="emploi_cards">
        <Card
          icon={icon1}
          title="Horaires de travail flexibles et congés sans solde"
        />
        <Card icon={icon2} title="Événements d'équipe passionnants" />
        <Card icon={icon3} title="Yoga, fitness et massages" />
        <Card icon={icon4} title="Bureaux modernes et télétravail" />
        <Card
          icon={icon5}
          title="Congé parental rallongé pour les mères (16 sem.) et les pères (3 sem.)"
        />
        <Card
          icon={icon6}
          title="Avantages du fonds de pension pour les employés à temps partiel"
        />
      </div>
      <div className="emploi_pricing">
        <div className="emploi_pricing_title">
          <h2>Avantages supplémentaires</h2>
          <img src={arrow} alt="img" />
        </div>
        <div className="emploi_cards_pricing">
          <div className="emploi_card_pricing">
            <img src={icon7} alt="img" />
            <h5>Respect</h5>
            <p>
              Nous avons l'esprit d'équipe. Une interaction respectueuse avec
              les clients, les partenaires et les collègues, un feedback honnête
              et une coopération agile forment la base de cela.
            </p>
          </div>
          <div className="emploi_card_pricing">
            <img src={icon8} alt="img" />
            <h5>Centré sur le client</h5>
            <p>
              Nous nous engageons envers nos clients et travaillons chaque jour
              pour améliorer le succès des petites entreprises.
            </p>
          </div>
          <div className="emploi_card_pricing">
            <img src={icon9} alt="img" />
            <h5>Innovation</h5>
            <p>
              En tant que force motrice, nous définissons constamment de
              nouvelles normes pour l'industrie et nous nous efforçons de
              générer un véritable effet de surprise auprès de nos clients grâce
              à nos solutions innovantes.
            </p>
          </div>
          <div className="emploi_card_pricing">
            <img src={icon10} alt="img" />
            <h5>Ambition</h5>
            <p>
              Nous avons la chance de faire une différence et d'avoir un plan
              clair quant aux objectifs de notre entreprise. Nous n'avons pas
              peur du kilomètre supplémentaire.
            </p>
          </div>
          <div className="emploi_card_pricing">
            <img src={icon11} alt="img" />
            <h5>Sans complication</h5>
            <p>
              Nous acceptons le défi et nous avons le courage d'innover. Nous ne
              faisons rien plus compliqué qu'il ne l'est et gardons toujours le
              sens de l'humour.
            </p>
          </div>
        </div>
       
      </div> <div className="emploi_rh">
          <h1>Note équipe RH</h1>
          <p>Nous sommes là pour vous</p>
          <div className="emploi_rh_row">
            <div>
              <img src={img4} alt="img" />
              <h3>Fabienne Bindschedler</h3>
              <p>Head of HR</p>
            </div>
            <div>
              <img src={img5} alt="img" />
              <h3>Jessyka Krösing</h3>
              <p>HR Specialist</p>
            </div>
          </div>
        </div>      <BTTButton/>

      <Footer />
    </>
  );
}
const Card = ({ icon, title }) => {
  return (
    <div className="cardd_wrapper">
      <div className="cardd_img">
        <img src={icon} alt="img" />
      </div>
      <div className="cardd_title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
