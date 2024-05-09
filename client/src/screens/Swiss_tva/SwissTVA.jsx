import React from 'react';
import './SwissTVA.css';
import calendar from '../../assets/icons/Calendar.svg'
import pen from '../../assets/icons/Pen.svg'
import Navbar from '../../components/navbar/Navbar';
import image from '../../assets/info tva.svg'
import image1 from '../../assets/images/tva image 1.png'
import image2 from '../../assets/images/tva image 2.png'
import image3 from '../../assets/images/tva image 3.png';
import ToggleLine from '../../components/toggle_line/Toggle_line';
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import BTTButton from "../../components/BTTButton/BTTButton";



const SwissTVA = () => {
    return (
        <>
            <Navbar />
            <div className="swiss_tva">
               
                <div className="stock_header bvr_header">
                    <h1>
                        <span>La TVA en Suisse</span>   expliquée simplement
                    </h1>
                    <div className="swiss_tva_header_p">
                        <div className="time_author_tva">
                            <p><img src={calendar} alt="img" />Dernière mise-à-jour 31. mai, 2023</p>
                            <p><img src={pen} alt="img" />Rédigé par l'équipe éditoriale Faji</p>
                        </div>
                        <p className='swiss_tva_header_p1'>La taxe sur la valeur ajoutée (TVA) est un élément important du système économique suisse. Les entreprises la facturent pour leurs produits ou leurs services. Découvrez dans cet article pourquoi la TVA est appliquée, comment elle fonctionne et les points à ne pas négliger lors du décompte de la TVA suisse.</p>
                    </div>
                    <div className="swisstva_cards_wrap">
                                            <CardNr span="Qu'est-ce que la TVA?" title="" text="La TVA permet à l'État de couvrir ses dépenses générales. En Suisse, les entreprises qui vendent des produits ou des services et qui enregistrent un chiffre d'affaires de plus de CHF 100'000 par an sont tenues de facturer la TVA à leurs clients et de la reverser à la Confédération." />

                    </div>



                </div>
                <div className="jobList">
                    <h1>Quels sont les taux de TVA en vigueur en Suisse?</h1>
                    <p className='tva_table_p'>Les taux de TVA suivants s'appliquent actuellement en Suisse:</p>
                    <table>
                        <tbody>
                            <tr className='joblist_thead'>
                                <th>Taux de TVA</th>
                                <th>Avec un Pourcentage du chiffre d'affaires jusqu'au 31.12.2023</th>
                                <th>Pourcentage du chiffre d'affaires à partir du 01.01.2024</th>
                                <th>Applicable à</th>
                            </tr>
                            <tr>
                                <td><p>Taux normal</p></td>
                                <td><p>7,7%</p></td>
                                <td><p>8,1 %</p></td>
                                <td><p>la plupart des produits et services (vêtements, électroménagers, coiffeurs, gastronomie par ex.)</p></td>
                            </tr>
                            <tr>
                                <td><p>Taux spécial</p></td>
                                <td><p>3,7%</p></td>
                                <td><p>3,8%</p></td>
                                <td><p>Prestations d'hébergement</p></td>
                            </tr>
                            <tr>
                                <td><p>Taux réduit:</p></td>
                                <td><p>2,5%</p></td>
                                <td><p>2,6%</p></td>
                                <td><p>Biens de consommation courante (produits alimentaires, boissons non alcoolisées, livres, journaux, magazines, médicaments, etc.).</p></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div className="bluebg_tva">
                    <img src={image} alt="img" />
                    <p>La TVA est augmentée (en combinaison avec d'autres mesures) afin de garantir la stabilité de l'assurance vieillesse et survivants (AVS). Les entreprises assujetties qui fournissent des prestations couvrant plusieurs périodes doivent vérifier suffisamment tôt à quel moment elles devront les décompter pour la première fois selon les nouveaux taux de TVA – dans certains cas, cela peut être en 2023.</p>
                </div>
                <div className="tva_function">
                    <h2>Comment fonctionne le décompte de la TVA?</h2>
                    <p>Toutes les entreprises assujetties à la TVA doivent établir le décompte de leur TVA et le transmettre à l'Administration fédérale des contributions (AFC). Les principales notions à maîtriser pour le décompte sont les suivantes:</p>
                    <ul>
                        <li>Contre-prestation convenue ou reçue</li>
                        <li>Taux de la dette fiscale nette ou méthode effective</li>
                    </ul>
                    <h2>Contre-prestation convenue ou reçue</h2>
                    <p>Chaque entreprise doit décider si elle décompte la TVA selon la contre-prestation convenue ou reçue:</p>
                    <ul>
                        <li><span> Contre-prestation convenue:</span> C'est la procédure standard de l'Administration fédérale des contributions (AFC). La TVA est due dès que l'entreprise facture ses prestations. Dans le cas où le client ne paie la facture qu'au cours de la période de facturation suivante, il est possible que l'entreprise doive préfinancer la TVA.</li>
                        <li> <span>Contre-prestation reçue:</span> La TVA n'est due qu'à la réception du paiement, c'est-à-dire dès que le client a payé la facture.</li>
                    </ul>
                    <p>Dans le cadre d'une comptabilité financière tenue de manière professionnelle avec des grands livres et des livres auxiliaires, le décompte selon contre-prestation convenue est la méthode la plus judicieuse. En cas de défaut de paiement, si un client est par exemple insolvable, cette méthode standard permet de décomptabiliser les créances. L'entreprise n'est donc pas pénalisée.</p>
                </div>
                <div className="bluebg_tva">
                    <img src={image} alt="img" />
                    <p>Exemple: Votre entreprise a établi des factures d'un montant total de CHF 10'000, y compris CHF 770 de TVA (7,7 %). Au moment du décompte de la TVA, le montant total des paiements reçus s'élève à CHF 5'000. Vous devez tout de même verser la totalité des CHF 700 à l'administration fiscale et avance ainsi une partie de la TVA.</p>
                </div>
                <div className="tva_function">
                    <p>Si une petite entreprise ou un indépendant enregistre uniquement des paiements entrants et sortants, il peut appliquer la méthode de décompte selon la contre-prestation reçue. Il n'a donc pas à avancer la TVA. Pour bénéficier de cette méthode, il faut en faire la demande auprès de l'Administration fédérale des contributions (AFC) au moyen d'un formulaire spécial.</p>
                </div>
                <div className="bluebg_tva">
                    <img src={image} alt="img" />
                    <p>Exemple: Votre entreprise a établi des factures d'un montant total de CHF 10'000, y compris CHF 770 de TVA (7,7 %). Au moment du décompte de la TVA, le montant total des paiements reçus s'élève à CHF 5'000. Vous ne devez donc verser à l'administration fiscale que la TVA correspondant aux CHF 5'000, soit CH 385.</p>
                </div>
                <div className="tva_function">
                    <h2>Taux de la dette fiscale nette ou méthode effective</h2>
                    <p>Par ailleurs, il est nécessaire de choisir l'une des deux méthodes de décompte de la TVA:</p>
                    <ul>
                        <li><span>Méthode des taux de la dette fiscale nette:</span> De nombreuses petites entreprises utilisent la méthode des taux de la dette fiscale nette, car les travaux administratifs sont facilités: d'une part, cette méthode permet de faire les comptes seulement deux fois par année, et non tous les trois mois. D'autre part, les montants d'impôt préalable n'ont plus besoin d'être déterminés.</li>
                        <li><span>Méthode de décompte effective:</span> Dans le cadre de la méthode de décompte effective, les entrepreneurs doivent déclarer le chiffre d'affaires réalisé et l'impôt préalable encouru. Les taux d'imposition indiqués ci-dessus sont appliqués. Les entreprises utilisant cette méthode soumettent chaque trimestre un décompte à l'Administration fédérale des contributions (AFC). Le délai est de 60 jours après la fin du trimestre. Le même délai s'applique également au paiement.</li>
                    </ul>
                    <h2>La méthode des taux de la dette fiscale nette en détail</h2>
                    <p>En cas de décompte TVA à l'aide des taux de la dette fiscale nette (TDFN), le montant de TVA dû est calculé en multipliant le total de tous les chiffres d'affaires imposables, TVA incluse, par le TDFN. Ce taux de TVA réduit doit être approuvé par l'AFC et dépend de la branche de l'entreprise. L'avantage de cette méthode de décompte de la TVA est évident: l'impôt préalable est compensé de manière forfaitaire et ne doit pas être décompté en détail. <br /><br />La possibilité pour une entreprise de décompter à l'aide des taux de la dette fiscale nette dépend de son chiffre d'affaires annuel imposable, et est conditionnée à une dette fiscale annuelle maximale. Le décompte officiel avec les taux de la dette fiscale nette doit par ailleurs être communiqué à l'Administration fédérale des contributions. En savoir plus sur les conditions de la méthode des taux de la dette fiscale nette.</p>
                </div>
                <div className="bluesection_tva">
                    <h2>Inscription à la TVA</h2>
                    <p>Une entreprise nouvellement créée anticipant un chiffre d'affaires annuel de plus de CHF 100'000 doit commencer par demander un numéro de TVA à l'Administration fédérale des contributions. Le plus simple est de passer par le portail en ligne de l'AFC.</p>
                </div>
                <div className="image_tva">
                    <img src={image1} alt="img" />
                    <p>Abb.: Online-Portal für die Mehrwertsteuer-Anmeldung der ESTV.</p>
                    <p style={{width:"75%",margin:"auto"}}>Les entreprises réalisant un chiffre d'affaires annuel inférieur à CHF 100'000 sont exonérées de la TVA. Elles peuvent toutefois s'inscrire volontairement à la TVA. En effet, ces entreprises ont également droit à la déduction de l'impôt préalable. L'inscription à la TVA est alors particulièrement intéressante lorsque des achats importants sont prévus.</p>
                </div>
                <div className="bluesection_tva">
                    <h2>Soumettre le décompte TVA en ligne</h2>
                    <p>L'étape suivante – le décompte TVA proprement dit – s'effectue sur le portail en ligne de l'AFC pour le décompte de la TVA.</p>
                </div>
                <div className="image_tva">
                    <img src={image2} alt="img" />
                    <p>Abb.: Online-Portal für die Mehrwertsteuer-Abrechnung der ESTV.</p>
                    <p style={{width:"75%",margin:"auto"}}>Les entreprises ayant utilisé jusqu'à présent AFC SuisseTax pour leurs décomptes doivent transférer leurs données dans le nouveau portail. L'AFC fournit des instructions à cet effet. <br />Avec le logiciel de gestion Faji, c'est encore plus simple. Nous allons vous montrer pourquoi.</p>
                </div>
                <div className="bluesection_tva">
                    <h2>Le décompte de la TVA dans Faji</h2>
                    <p>Vous souhaitez décompter votre TVA sans effort? Dans ce cas, travaillez avec un logiciel de comptabilité comme Faji et faites votre comptabilité en ligne: le logiciel génère automatiquement un formulaire correspondant au formulaire de décompte de l'Administration fédérale des contributions (AFC). Que vous décomptiez votre TVA selon la méthode effective ou la méthode des taux de la dette fiscale nette, selon contrepartie convenue ou perçue, Faji vous assiste dans tous les cas. <br />A chaque écriture, Faji met automatiquement à jour le formulaire de TVA. Ce formulaire contient toutes les données et tous les chiffres nécessaires, comme par exemple le total du chiffre d'affaires des différents taux. Vous pouvez ainsi reporter facilement les chiffres et maîtrisez votre décompte TVA.</p>
                </div>
                <div className="image_tva">
                    <img src={image3} alt="img" />

                </div>
                <div className="tva_function">
                    <h2>Qu'est-ce que l'impôt préalable et comment fonctionne la déduction de l'impôt préalable?</h2>
                    <p>Le terme d'impôt préalable désigne la TVA qu'une entreprise paie lorsqu'elle achète des biens ou des services. Elle bénéficie d'un droit à la déduction de l’impôt préalable. Cela signifie qu'elle peut compenser la TVA qu'elle perçoit sur ses ventes avec la TVA déjà payée en amont sur ses achats. <br /><br />Si l'entreprise paie plus de TVA en amont qu'elle n'en a encaissé, l'administration fiscale lui rembourse la partie correspondante de la TVA déjà acquittée. En revanche, si la TVA perçue sur les ventes est supérieure à la TVA payée en amont sur les achats, l'entreprise doit verser la différence à l'administration fiscale.</p>
                    <h2>Exemple:</h2>
                    <ul className='last_ul_tva'>
                        <li>Un client achète une table à un menuisier pour CHF 216, ce qui comprend CHF 16 de TVA que le menuisier doit verser à l'administration fiscale.</li>
                        <li>Le menuisier a acheté le bois nécessaire à la fabrication de la table pour CHF 100 plus CHF 8 de TVA auprès d'un marchand de bois.</li>
                        <li>Il peut donc déduire ces CHF 8 d'impôt préalable des CHF 16 qu'il doit à l'administration fiscale. Dans cet exemple, le menuisier ne paie donc «que» CHF 8 ou 4% de TVA pour la commande.</li>
                    </ul>
                </div>
                <div className="tva_cards">
                    <h2>Questions fréquentes sur la TVA</h2>
                    <ToggleLine title="Qui est assujetti à la TVA en Suisse?" details="En Suisse, l'assujettissement à la TVA concerne les personnes physiques et morales ayant leur siège sur le territoire national. Tant les particuliers que les entreprises dont l'activité professionnelle ou commerciale vise à générer des recettes sont en principe assujettis à la TVA. Les entreprises étrangères qui génèrent des recettes en Suisse peuvent également être assujetties à la TVA en Suisse. Celles-ci – tout comme les associations et les organisations à but non lucratif – sont toutefois soumises à des règles spéciales: En savoir plus sur l'assujettissement à la TVA des entreprises étrangères. En savoir plus sur l'assujettissement à la TVA des associations et des institutions d'utilité publique." />
                    <ToggleLine title="A quoi correspond l'offre d’essai gratuit pendant 30 jours?" details="Vous pouvez tester Faji gratuitement et sans engagement pendant 30 jours, sans limite de fonctionnalités (package Pro+) et sans avoir à enregistrer de carte de crédit. Aucun téléchargement ni installation n'est nécessaire. Le logiciel est opérationnel en quelques étapes. Après l'expiration des 30 jours d’essai, votre compte test est automatiquement désactivé, aucune résiliation n'est nécessaire." />
                    <ToggleLine title="À partir de quand suis-je assujetti à la TVA?" details="Le moment à partir duquel une entreprise ou une personne est assujettie à la TVA en Suisse dépend de son chiffre d'affaires annuel: si celui-ci est supérieur à CHF 100'000, l'entreprise doit décompter la TVA. Les entreprises dont le chiffre d'affaires annuel est inférieur à ce montant sont exemptées de cette obligation. La forme juridique d'une entreprise (SARL, SA ou entreprise individuelle) n'a aucune influence sur l'assujettissement à la TVA." />
                    <ToggleLine title="Quel est mon numéro de TVA?" details="Le numéro de TVA se compose de l'IDE suivi de la mention «TVA». Il a le format CHE-123.456.789 TVA. L'IDE (numéro d'identification des entreprises) est un numéro unique et global attribué par l'Office fédéral de la statistique (OFS) à chaque entreprise active en Suisse. On peut le trouver dans le registre IDE de l'OFS. L'IDE a entièrement remplacé le numéro de TVA à 6 chiffres (ex.: TVA 123 456) ainsi que le numéro de registre du commerce à 11 chiffres (ex.: CH-320.3.074.699-6)." />
                    <ToggleLine title="Quels sont les délais pour le décompte de la TVA?" details="Normalement, le décompte de la TVA doit être effectué dans les 60 jours suivant la fin de la période de décompte concernée. Le formulaire correspondant doit être remis à l'AFC de manière spontanée. Toutefois, il est souvent possible de prolonger les délais pour la remise des décomptes." />
                    <ToggleLine title="Que se passe-t-il en cas de cessation d'activité de mon entreprise?" details="Si une entreprise cesse complètement ses activités, elle doit demander sa radiation de la TVA. Cette demande doit être adressée à l'AFC par écrit dans les 30 jours suivant la cessation des activités." />
                    <ToggleLine title="Que se passe-t-il si mon entreprise n'atteint plus le seuil de TVA de CHF 100'000?" details="Si le chiffre d'affaires annuel de votre entreprise passe durablement sous la barre des CHF 100'000, vous pouvez demander votre radiation de la TVA – au plus tôt à la fin de la période fiscale au cours de laquelle vous n'atteignez plus ce chiffre d'affaires pour la première fois. Dans ce cas, un délai de radiation de 60 jours après la fin de la période fiscale s'applique. Si l'entreprise ne se demande pas sa radiation, elle est considérée comme ayant renoncé à l'exonération de la TVA et la TVA doit continuer à être versée à la Confédération." />
                </div>
                <div className="test_text">
                    <h2>Testez Faji gratuitement et sans engagement pendant 30 jours</h2>
                    <h3>
                        Jugez par vous-même en testant toutes les fonctionnalités de Faji,
                        l'outil de gestion idéal des PME.
                    </h3>
                    <Link to="/trial">Testez gratuitement</Link>                    <p>Avez-vous encore des questions ? Appelez-nous : +216 71 808 862 </p>
                    <p>Si vous préférez nous écrire: contact@faji.com.tn</p>
                </div>

            </div>      <BTTButton/>

            <Footer/>
        </>
    );
}

export default SwissTVA;

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