/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Card from "./Card";
import Headline from "./Headline";
import Img from "./Img";
import Text from "./Text";

import Sketch from "../../img/sketch.png"
import Linework from "../../img/linework.png"
import Color from "../../img/color.png"
import Finish from "../../img/finish.png"


const Cards = () => {

    const styled = css`
    display: flex;
    `


    return ( 
        <article>
            <article css={styled}>
            <Card>
                <Img><img src={Sketch} alt="Sketch" style={{height: "100%"}} /></Img>
                <div>
                    <Headline>Sketch</Headline>
                    <Text>
                        <p>Dette er et eksempel på en sketch jeg kunne lave til dig. Den er detaljeret og den har en masse personlighed.  </p>
                        <p>Pris: 100-150 kr</p>
                        <p>Med baggrund: +100 kr</p>
                    </Text>
                </div>
            </Card>

            <Card>
                <Img><img src={Linework} alt="Linework" style={{height: "100%"}} /></Img>
                <div>
                <Headline>Lineart</Headline>
                <Text>
                    <p>Her er et lineart eksempel. Dette er bare ren linework. Den er ren og smooth. </p>
                    <p>Pris: 200-300 kr</p>
                    <p>Med baggrund: +150 kr</p>
                </Text>
                </div>
            </Card>
            </article>
            <article css={styled}>
            <Card>
                <Img><img src={Color} alt="Color" style={{height: "100%"}} /></Img>
                <div>
                <Headline>Fuld Farve</Headline>
                <Text>
                    <p>Dette er den flade farven, der er ingen skygger eller heighlights. </p>
                    <p>Pris: 300-400 kr</p>
                    <p>Med baggrund: +200 kr</p>
                </Text>
                </div>
            </Card>

            <Card>
                <Img><img src={Finish} alt="Finished at piece" style={{height: "100%"}} /></Img>
                <div>
                <Headline>Detaljer +skygge</Headline>
                <Text>
                    <p>Det her er det færdige resultat. Med skygger, highlist og mulighvis en bagrgund skygge hvis spurgt efter. </p>
                    <p>Pris: 500-600 kr</p>
                    <p>Med baggrund: +400 kr</p>
                </Text>
                </div>
            </Card>
            </article>
        </article>
     );
}
 
export default Cards;