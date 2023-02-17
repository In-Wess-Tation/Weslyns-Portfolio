import portrate from "../../img/irl-me.jpg"

import BoxOneText from "./Text";
import Img from "./Img";
import FirstWrapper from "./Wrapper";


const InfoBox1 = () => {
    return ( 
        <FirstWrapper>
            <BoxOneText>
            <p>Mit navn er Weslyn Lundberg Toft. Jeg er studerende Web Udvikler og min plan er at studere videre som datamatiker.</p>
            <p>Denne webside vil bestå af flere sectioner der indebære info og links til andre websider jeg har lavet. Desuden vil der være en galleri side, hvor man kan se flere eksempler på min kunst.</p>
            </BoxOneText>
            <Img><img src={portrate} alt="Picture of me" style={{height: "100%"}} /></Img>
        </FirstWrapper>
     );
}
 
export default InfoBox1;