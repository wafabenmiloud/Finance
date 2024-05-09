import React from "react";
import "./Qui.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import left from "../../assets/qui_left.png";
import center from "../../assets/qui_center.png";
import right from "../../assets/qui_right.png";
import icon4 from "../../assets/home_imgs/icon1.svg";
import icon1 from "../../assets/home_imgs/icon2.svg";
import icon2 from "../../assets/home_imgs/icon3.svg";
import icon3 from "../../assets/home_imgs/icon4.svg";
import img1 from "../../assets/qui_img1.png";
import img2 from "../../assets/qui_img2.png";
import img3 from "../../assets/qui_img3.png";
import img4 from "../../assets/qui_img4.png";
import img5 from "../../assets/qui_img5.png";
import img6 from "../../assets/qui_img6.png";
import img7 from "../../assets/qui_img7.png";
import img8 from "../../assets/qui_img8.png";
import img9 from "../../assets/qui_img9.png";
import map from "../../assets/qui_map.png";
import arrow from "../../assets/qui_arrow.png";
import c1 from "../../assets/client1.png";
import c2 from "../../assets/client2.png";
import c3 from "../../assets/client3.png";
import { BsCheckLg } from "react-icons/bs";
import Test from "../../components/test/Test";
import Ratings from "../../components/ratings/Ratings";
import Card from "../../components/testimonial_card/Card";
import BTTButton from "../../components/BTTButton/BTTButton";
import { Link } from "react-router-dom";


export default function Qui() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <>
      <Navbar />
      <div className="qui_header">
        <span>We are a</span>
        <h1>#StrongTeam</h1>
        <div className="qui_header_imgs">
          <div className="qui_header_img">
            <div className="qui_blue_left"></div>
            <img src={right} alt="img" />
          </div>
          <div className="qui_header_img1">
            <img src={center} alt="img" />
          </div>
          <div className="qui_header_img">
            <div className="qui_blue_right"></div>
            <img src={left} alt="img" />
          </div>
        </div>
      </div>
      <div className="qui_cards_section">
        <h2>Nos valeurs</h2>
        <p>
          Des valeurs fortes, qui caractérisent une collaboration fructueuse .
        </p>
        <div className="qui_cards">
          <div className="qui_cards_row">
            {" "}
            <CardHeader
              icon={icon1}
              title="Le client avant tout"
              body="Nous sommes dévoués à nos clients et travaillons d'arrache-pied jour après jour pour rendre les petites entreprises, les start-up et les travailleurs indépendants encore plus performants ."
            />
            <CardHeader
              icon={icon2}
              title="L'innovation"
              body="En tant que force motrice, nous définissons constamment de nouvelles normes pour l'industrie et nous nous efforçons de générer un véritable effet de surprise auprès de nos clients grâce à nos solutions ."
            />
            <CardHeader
              icon={icon3}
              title="L'ambition"
              body="La chance nous est offerte de faire bouger les lignes et de mettre en œuvre une stratégie claire, que nous poursuivons avec constance . Voilà pourquoi nous sommes prêts à travailler sans ménager nos efforts ."
            />
          </div>
          <div className="qui_cards_row">
            <CardHeader
              icon={icon4}
              title="Le respect"
              body="Nous avons l'esprit d'équipe . Établir des relations respectueuses avec nos clients, partenaires et collègues, fournir un retour d'expérience en toute franchise et collaborer de manière optimale est fondamental pour nous ."
            />
            <CardHeader
              icon={icon3}
              title="La simplicité"
              body="Nous aimons la légèreté et ne rendons pas les choses plus compliquées qu'elles ne doivent l'être . Nous sommes prêts à relever les défis et à nous engager dans de nouvelles voies ."
            />
          </div>
        </div>
      </div>
      <div className="qui_imgs_section">
        {" "}
        <h2>Aperçu de notre bureau</h2>
        <p>
          Chez Faji , nous bénéficions de postes de travail modernes, de fruits
          frais au quotidien et d'une belle terrasse pour nous détendre . Les
          échanges collégiaux sont très importants chez nous . Nos
          collaborateurs bénéficient également de séances de yoga, de fitness,
          de massages et de bien d'autres avantages encore . La possibilité de
          travailler à domicile fait également partie de notre culture
          d'entreprise .
        </p>
        <div className="qui_header_imgs">
          <div className="qui_header_img">
            <div className="qui_blue_left"></div>
            <img src={right} alt="img" />
          </div>
          <div className="qui_header_img1">
            <img src={center} alt="img" />
          </div>
          <div className="qui_header_img">
            <div className="qui_blue_right"></div>
            <img src={left} alt="img" />
          </div>
        </div>
        <div className="qui_grid">
          <img src={img1} alt="grid_img" />
          <img src={img2} alt="grid_img" />
          <img src={img3} alt="grid_img" />
          <img src={img4} alt="grid_img" />
          <img src={img5} alt="grid_img" />
          <img src={img6} alt="grid_img" />
          <img src={img7} alt="grid_img" />
          <img src={img8} alt="grid_img" />
          <img src={img9} alt="grid_img" />
        </div>
      </div>
      <div className="qui_map">
        <h2>Notre vision</h2>
        <p>
          Nous créons un monde où nos clients peuvent relever leurs défis
          quotidiens facilement et en toute sécurité .
        </p>
        <div className="qui_map_row">
          <div className="qui_map_lines">
            <Line text="Nous automatisons et connectons les entreprises" />
            <Line text="Nous offrons aux PME l'une des plateformes commerciales et de collaboration les plus fiables ." />
            <Line text="Notre logiciel d'entreprise basé sur le cloud offre aux PME tout ce dont elles ont besoin pour gérer une entreprise avec succès ." />
            <Line text="Plus de 60'000 entreprises font confiance à nos produits et services ." />
            <Line text="Nos 150+ collaborateurs de 18 nationalités différentes travaillent sur 2 sites en Suisse afin de simplifier davantage la comptabilité et l'administration de nos clients ." />
          </div>
          <div className="qui_map_img">
            <img src={map} alt="img" />
          </div>
        </div>
      </div>
      <div className="qui_decouvrir">
        <h1>
          <span className="qui_span1">Grâce à nos solutions</span>
          <span className="qui_span2">,</span> les PME et les fiduciaires
          gagnent un temps précieux qu'ils peuvent consacrer à leurs clients
        </h1>
        <p>
          Grâce à nos propres expériences et aux échanges animés avec d'autres
          fondateurs pendant de nombreuses années, nous connaissons parfaitement
          les besoins des travailleurs indépendants . C'est pourquoi notre
          logiciel offre tout ce dont vous avez besoin pour gérer une entreprise
          avec succès : de la gestion intuitive des contacts, de la création
          d'offres au design personnalisé, à la facture rapidement établie avec
          rappels automatiques, à l'interface e-banking et bien sûr à la
          comptabilité et à la gestion des salaires . Facile, efficace et
          numérique - avec notre logiciel, vous gérez toute l'administration de
          votre PME tout simplement d'une seule main .
        </p>
        <button>Découvrir Faji maintenant</button>
      </div>
      <div className="qui_equipe">
        <div className="qui_equipe_content">
          <h1>
            Nous avons réussi à vous convaincre ? Vous aussi vous souhaitez
            faire partie de l'équipe ?
          </h1>
          <p>Découvrez nos postes vacants !</p>
          <button> <Link onClick={scrollToTop} style={{color:'white'}} to='/joblist'>Rejoindre l'équipe Faji</Link>  </button>
        </div>
        <div className="qui_equipe_arrow">
          <img src={arrow} alt="img" />
        </div>
      </div>
      <div className="qui_market">
        <h1>
          <span>Faji : </span>de la start-up au leader du marché
        </h1>
        <p>Une success-story sur le marché suisse des PME</p>
      </div>
      <div className="qui_horloge_wrapper1">
        <div className="qui_horloge_bullet"></div>
        <div className="qui_horloge">
          <div className="qui_horloge_row1">
            <div className="qui_horloge_row1_p">
              <p>
                easySYS est fondé par 3 amis dans le but de développer un
                logiciel de bureau professionnel .
              </p>
            </div>
            <div className="qui_horloge_row1_blue">
              <p>2015</p>
            </div>
            <div className="qui_horloge_row1_p">
              <p>
                Luréat du prix « Top 100 Startup » avec la distinction de la
                meilleure start-up logicielle de Suisse .
              </p>
            </div>
            <div className="qui_horloge_row1_blue">
              <p>2017</p>
            </div>
            <div className="qui_horloge_row1_p">
              <p>
                Par son rachat par la Mobilière, Faji devient une filiale
                autonome .
              </p>
            </div>
            <div className="qui_horloge_row1_blue">
              <p>Aujourd'hui</p>
            </div>
          </div>
          <div className="qui_divider"></div>
          <div className="qui_horloge_row2">
            <div className="qui_horloge_row2_green">
              <p>2013</p>
            </div>
            <div className="qui_horloge_row2_p">
              <p>
                easySYS devient Faji et le premier fournisseur de logiciels
                d'entreprise basés sur le Web pour les petites entreprises, les
                travailleurs indépendants et les start-up .
              </p>
            </div>
            <div className="qui_horloge_row2_green">
              <p>2016</p>
            </div>
            <div className="qui_horloge_row2_p">
              <p>
                Encore une fois lauréate du prix de la start-up la plus
                innovante et la plus prometteuse de Suisse .
              </p>
            </div>
            <div className="qui_horloge_row2_green">
              <p>2018</p>
            </div>
            <div className="qui_horloge_row2_p">
              <p>
                En tant que plateforme dédiée aux PME, nous accélérons notre
                développement en permanence et répondons encore plus rapidement
                et plus efficacement aux besoins de nos clients .
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="qui_horloge_bullet"></div>
      </div>
      <div className="qui_horloge_wrapper2">
        <div className="qui_horloge">
          <div className="qui_horloge_row">
              <div className="qui_horloge_row2_green">
            <p>2013</p>
          </div>
          <div className="qui_horloge_row2_p">
            <p>
              easySYS devient Faji et le premier fournisseur de logiciels
              d'entreprise basés sur le Web pour les petites entreprises, les
              travailleurs indépendants et les start-up .
            </p>
          </div>
          </div>
          <div className="qui_horloge_row">
             <div className="qui_horloge_row1_blue">
            <p>2015</p>
          </div>
          <div className="qui_horloge_row1_p">
            <p>
              easySYS est fondé par 3 amis dans le but de développer un logiciel
              de bureau professionnel .
            </p>
          </div>
          </div>
          <div className="qui_horloge_row">
              <div className="qui_horloge_row2_green">
            <p>2016</p>
          </div>
          <div className="qui_horloge_row2_p">
            <p>
              Encore une fois lauréate du prix de la start-up la plus innovante
              et la plus prometteuse de Suisse .
            </p>
          </div>
          </div>
          <div className="qui_horloge_row">
             <div className="qui_horloge_row1_blue">
            <p>2017</p>
          </div>
          <div className="qui_horloge_row1_p">
            <p>
              Luréat du prix « Top 100 Startup » avec la distinction de la
              meilleure start-up logicielle de Suisse .
            </p>
          </div>{" "}
          </div>
          <div className="qui_horloge_row">
  <div className="qui_horloge_row2_green">
            <p>2018</p>
          </div>
          <div className="qui_horloge_row2_p">
            <p>
              En tant que plateforme dédiée aux PME, nous accélérons notre
              développement en permanence et répondons encore plus rapidement et
              plus efficacement aux besoins de nos clients .
            </p>
          </div>
          </div>
          <div className="qui_horloge_row">
               <div className="qui_horloge_row1_blue">
            <p>Aujourd'hui</p>
          </div>
          <div className="qui_horloge_row1_p">
            <p>
              Par son rachat par la Mobilière, Faji devient une filiale autonome
              .
            </p>
          </div>
          </div>

        
         
        
         
        
       


        </div>


      </div>
      <div className="qui_testimonials">
        <h1>
          Plus de 60'000 indépendants, petites entreprises et start-ups font
          déjà confiance à <span>Faji</span>
        </h1>
        <div className="qui_testimonials_cards">
          <Card
            image={c1}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={3.5}
          />
          <Card
            image={c2}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={5}
          />
          <Card
            image={c3}
            name="Tom Slogn"
            title="Lorem ipsum dolor"
            body="En tant que petite agence de Design, le temps et la vue d'ensemble sont des valeurs précieuses  . Avec Faji, la comptabilité devient simple et pratique et laisse plus d'espace à la créativité  ."
            rate={5}
          />
        </div>
      </div>
      <Ratings />
      <Test />      <BTTButton/>

      <Footer />
    </>
  );
}
const CardHeader = ({ icon, body, title }) => {
  return (
    <>
      <div className="qui_card_wrapper">
        <div className="qui_card1">
          <img src={icon} alt="img" />
        </div>
        <div className="qui_card2">
          <h3>{title}</h3>
          <h4>{body}</h4>
        </div>
      </div>
    </>
  );
};
const Line = ({ text }) => {
  return (
    <div className="qui_line_reverse">
      <div className="qui_tic_wrapper1">
        <div className="qui_tic1">
          <BsCheckLg className="qui_tic_icon1" />
        </div>
      </div>
      <div className="qui_line_text1">
        <h4>{text}</h4>
      </div>
    </div>
  );
};
