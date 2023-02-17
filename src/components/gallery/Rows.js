/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import TzekelKan from "../../img/tzekel-kan-2.png"
import Wolf from "../../img/wolf.png"
import Me from "../../img/pan-me-2.png"
import Route from "../../img/route66.jpg"


const Rows = () => {

    const style = css`
    display: flex;
    padding-top: 3rem;

    img {
    width: 25rem;
    overflow: hidden;
    box-sizing: border-box;
    }
    `


    return ( 
        <article css={style}>
            <img src={TzekelKan} alt="" style={{height: "100%"}}/>
            <img src={Wolf} alt="" style={{height: "100%"}}/>
            <img src={Me} alt="" style={{height: "100%"}}/>
            <img src={Route} alt="" style={{height: "100%"}}/>
        </article>
     );
}
 
export default Rows;
