import Banner from "../components/banner/Banner";
import InfoBox1 from "../components/infoBoxeOne/InfoBox1";
import InfoBoxThree from "../components/InfoBoxThree/InfoBox";
import InfoBoxTwo from "../components/infoBoxTwo/InfoBox";
import Cards from "../components/WebCard/Cards";
import CardsTwo from "../components/WebCard/CardsTwo";



const Home = () => {
    return ( 
        <section>
            <Cards />
            <InfoBox1 />
            <InfoBoxTwo />
            <InfoBoxThree />
            <CardsTwo />
            <Banner />
        </section>
     );
}
 
export default Home;