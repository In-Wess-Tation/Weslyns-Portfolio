import BannerHeadline from "./Headline";
import BannerText from "./Text";
import BannerWrapper from "./Wrapper";



const Banner = () => {
    return ( 
        <BannerWrapper>
            <BannerHeadline>Citater jeg står inden for: </BannerHeadline>
            <BannerText>
                <p>"Man skal yde før man kan nyde"</p>
                <p>"Øvelse gør mester"</p>
            </BannerText>
        </BannerWrapper>
     );
}
 
export default Banner;