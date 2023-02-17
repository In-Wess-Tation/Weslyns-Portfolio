/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Lofi from "../../img/me-lofi.png"


const Banner = () => {

    const style = css`

    img {
        position: relative;
        max-width: 100%;
    }
    h1 {
        position: absolute;
        color: white;
        font-size: 5rem;
        z-index: 100;
        margin: 6rem;
    }
    
    `

    return ( 
        <article css={style}>
            <h1>Welcome to the Gallery</h1>
            <img src={Lofi} alt="Lofi drawing" />
        </article>
     );
}
 
export default Banner;
