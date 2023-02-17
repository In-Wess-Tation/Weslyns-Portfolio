/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import CardHeadline from "./CardHeadline";
import CardImg from "./CardImg";
import CardLink from "./CardLink";
import CardsWrapper from "./CardsWrapper";
import CardText from "./CardText";
import Card from "./Card"

import BMNF from "../../img/BMNF.png"
import Burgos from "../../img/burgos.png"
import CPHAch from "../../img/CPHAch.png"
import Movibes from "../../img/movibes.png"


const CardsTwo = () => {

    const style = css`
    a{
        color: black;
    }
    `

    return ( 
    <article css={style}>
        <CardsWrapper>
            <Card>
                <CardImg><img src={BMNF} alt="BigMac and Fries" style={{height:"100%" }}/></CardImg>
                <CardHeadline>BigMac n Fries</CardHeadline>
                <CardText>Denne hjemmeside er en gruppe portfolio.</CardText>
                <CardLink><a href="https://bigmac-n-fries.netlify.app/index.html">Link til BigMac n Fries</a></CardLink>
            </Card>

            <Card>
                <CardImg><img src={Burgos} alt="Burgos website" style={{height:"100%" }}/></CardImg>
                <CardHeadline>Burgos</CardHeadline>
                <CardText><p>Dette var min grundforløbs eksamen. Hvor jeg skulle implimintere funktionalitet og styling.</p></CardText>
                <CardLink><a href="https://burgos.netlify.app/">Link til Burgos</a></CardLink>
            </Card>           
            <Card>
                <CardImg><img src={Movibes} alt="Movibes" style={{height:"100%" }}/></CardImg>
                <CardHeadline>Movibes</CardHeadline>
                <CardText><p>Denne hjemmeside er en form for 2.0 for my movies siden</p></CardText>
                <CardLink><a href="https://weslyn-movibes.netlify.app/">Link til Movibes</a></CardLink>
            </Card>           
            <Card>
                <CardImg><img src={CPHAch} alt="Copenhagen architects website" style={{height:"100%" }}/></CardImg>
                <CardHeadline>CPH Architecture</CardHeadline>
                <CardText><p>Dette er en hjemmeside dedikeret til Copenhagen Architects. Det var en opgave vi lavede på grundforløbet.</p></CardText>
                <CardLink><a href="https://architects-weslyn.netlify.app/nyrop.html">Link til CHP Architects</a></CardLink>
            </Card>           
        </CardsWrapper>
    </article> 
    );
}
 
export default CardsTwo;