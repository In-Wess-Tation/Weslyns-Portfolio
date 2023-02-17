/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Animation from "../../img/Animation_Day_.png"
import Tattoo from "../../img/anime-tattoo.png"
import Wings from "../../img/Wings.png"

const Slider = () => {   
    const style = css` 
    height: 15rem;
    display: flex;
    justify-content: space-evenly;
    /* overflow-x: scroll; */
    padding: 3rem 0 3rem;

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
    <article css={style}>
        <img src={Animation} alt="" style={{height: "100%"}}/>
        <img src={Tattoo} alt="" style={{height: "100%"}}/>
        <img src={Wings} alt="" style={{height: "100%"}}/>

    </article>
)

}
export default Slider;