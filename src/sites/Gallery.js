import Banner from "../components/gallery/Banner";
import Cards from "../components/gallery/Card/Cards";
import Cirkels from "../components/gallery/Cirkels";
import Rows from "../components/gallery/Rows";
import RowsTwo from "../components/gallery/RowsTwo";
import Slider from "../components/gallery/Slider";

const Gallery = () => {
    return ( 
        <section>
        <Banner />
        <Slider />
        <Cards />
        <Rows />
        <Cirkels />
        <RowsTwo />
        </section>
     );
}
 
export default Gallery;