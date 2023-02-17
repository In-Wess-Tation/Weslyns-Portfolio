/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";
import Headline from "./CardHeadline";
import Img from "./CardImg";
import Text from "./CardText";

import Pink from "../../../img/pink-me-2.png"
import Me from "../../../img/realistic-me.png"
import logo from "../../../img/me-logo.png"
import bubblegum from "../../../img/bubblegum-2.png"

const Cards = () => {

    const style = css`
        display: flex;
        gap: 1rem;

        img {
        transition: 1s ease;
      }

        img:hover {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
            transition: 1s ease;
        }

    `


    return ( 
        <section css={style}>
            <Card>
                    <Img><img src={Pink} alt="Pink drawing of me" style={{height: "100%"}}/></Img>
                <article>
                    <Headline>Pink Mig</Headline>
                    <Text>Dette er en pink tegning af min persona</Text>
                </article>
            </Card>

            <Card>
                    <Img><img src={Me} alt="Realistic me" style={{height: "100%"}}/></Img>
                <article>
                    <Headline>Realistik Mig</Headline>
                    <Text>Dette er en tegning af migselv</Text>
                </article>
            </Card>

            <Card>
                    <Img><img src={logo} alt="logo" style={{height: "100%"}} /></Img>
                <article>
                    <Headline>Gamle Logo</Headline>
                    <Text>Dette var mit logo til min gamle portfolio</Text>
                </article>
            </Card>

            <Card>
                    <Img><img src={bubblegum} alt="Bubble Gum" style={{height: "100%"}} /></Img>
                <article>
                    <Headline>Bubble Gum</Headline>
                    <Text>Denne tegning var inspireret af Gorrilaz</Text>
                </article>
            </Card>
        </section>
     );
}
 
export default Cards;
