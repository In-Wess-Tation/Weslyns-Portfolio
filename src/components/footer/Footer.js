import FooterImg from "./Img";
import FooterWrapper from "./Wrapper";

import twitter from "../../img/twitter.png"
import instagram1 from "../../img/insta-1.png"
import instagram2 from "../../img/insta-2.png"
import FooterText from "./Text";
import FooterHeadline from "./Headline";


const Footer = () => {
    return ( 
        <FooterWrapper>
            <FooterText>
                <FooterHeadline>Kontakt mig</FooterHeadline>
                <p>Facebook: Wess L. Toft</p>
                <p>Mobiil: +45 27 83 55 59</p>
                <p>Email: weslyn.l.toft@gmail.com</p>
            </FooterText>
            <FooterImg>
                <FooterHeadline>Sociale Medier: </FooterHeadline>
                <a href="https://twitter.com/Wess98511662"><img src={twitter} alt="Twitter logo" /></a>
                <a href="https://www.instagram.com/wessltoft/"><img src={instagram1} alt="instagram logo" /></a>
                <a href="https://www.instagram.com/devilsart_666/"><img src={instagram2} alt="instagram logo" /></a>
            </FooterImg>
        </FooterWrapper>
     );
}
 
export default Footer;