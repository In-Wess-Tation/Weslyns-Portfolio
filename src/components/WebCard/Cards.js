/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import CardHeadline from "./CardHeadline";
import CardImg from "./CardImg";
import CardLink from "./CardLink";
import CardsWrapper from "./CardsWrapper";
import CardText from "./CardText";
import Card from "./Card"

import MyMovie from "../../img/MyMovie.png"
import Pokadex from "../../img/Pokadex.png"
import Portfolio4 from "../../img/Portfolio4.png"
import Portfolio2 from "../../img/Portfolio2.png"



const Cards = () => {

    const style = css`
    a {
        color: black; 
    }
      
    `

    return ( 
    <article css={style}>
        <CardsWrapper>
            <Card>
                <CardImg><img src={MyMovie} alt="Mymovie" style={{height:"100%" }}/></CardImg>
                <CardHeadline>My Movie</CardHeadline>
                <CardText>Denne hjemmeside er en film app, hvor man kan se de nyeste og mest populære film.</CardText>
                <CardLink><a href="https://mymovies-wess.netlify.app/">My Movies Link</a></CardLink>
            </Card>

            <Card>
                <CardImg><img src={Portfolio4} alt="Portfolio 4.0" style={{height:"100%" }}/></CardImg>
                <CardHeadline>Portfolio 4.0</CardHeadline>
                <CardText>Dette er min portfolio 4.0, man kan se jeg er kommet langt iforhold til min portfolio 2.0</CardText>
                <CardLink><a href="https://weslyn-portfolio-4.netlify.app/">Link til Portfolio</a></CardLink>
            </Card>

            <Card>
                <CardImg><img src={Portfolio2} alt="Portfolio 4.0" style={{height:"100%" }}/></CardImg>
                <CardHeadline>Portfolio 2.0</CardHeadline>
                <CardText>Dette er min portfolio 2.0. Den har som man kan se massere af fejl, men jeg tænkte det var en god idé at se hvor jeg er kommet fra.</CardText>
                <CardLink><a href="https://weslyns-portfolio-2.netlify.app/">Link til Portfolio</a></CardLink>
            </Card>

            <Card>
                <CardImg><img src={Pokadex} alt="Pokadex API practese" style={{height:"100%" }}/></CardImg>
                <CardHeadline>Pokadex</CardHeadline>
                <CardText>Denne hjemmeside var en opgave hvor vi skulle lave et pocadex.</CardText>
                <CardLink><a href="https://pocadex.netlify.app/">Pocadex Link</a></CardLink>
            </Card>
        </CardsWrapper>
    </article> 
    );
}
 
export default Cards;