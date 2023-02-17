import BoxTwoHeadline from "./Headline";
import BoxTwoImg from "./Img";
import BoxTwoText from "./Text";
import TextWrapper from "./TextWrapper";
import BoxTwoWrapper from "./Wrapper";

import img from "../../img/art-me.png"



const InfoBoxTwo = () => {
    return ( 
        <>
        <BoxTwoWrapper>
            <BoxTwoImg><img src={img} alt="Drawing of creator" style={{height: "100%"}}/></BoxTwoImg>
            <TextWrapper>
                <BoxTwoHeadline>Fakta om mig og mit liv</BoxTwoHeadline>
                <BoxTwoText>
                    <p>Jeg vil starte ud med at indrømme at jeg er ordblind, dog har dette aldrig stoppet mig før. At være ordblind har aldrig rigtig været en kæmpe stopper på mig for at lave mine opgaver, da jeg altid finder en løsning.</p>
                    <p>Jeg arbejder hårdt og stopper ikke før jeg har fundet et løsning til en muligt problem. Jeg giver ikke bare op og ligger mig ned, men spørger og søger mig frem til samtlige mulige løsninger.</p>
                    <p>Jeg er en person som godt kan lide at smyksere sin krop. Hvad det skal betyde er at jeg har samtlige tatoveringer, piercinger og farvet hår, men dog selv om jeg kan se lidt aftagende ud, så er jeg skam en helt flink og sød person. Min stil har ikke så meget at gøre med min personlighed, andet end at det er en kreativ stil og jeg er kreativ.</p>
                </BoxTwoText>
            </TextWrapper>
        </BoxTwoWrapper>
        </>
     );
}
 
export default InfoBoxTwo;