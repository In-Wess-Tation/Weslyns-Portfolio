/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Albino from "../../img/albino.png"
import Acid from "../../img/acid-2.png"
import Moterbike from "../../img/Moterbike-2.png"
import Me from "../../img/green-me-2.png"
import Eye from "../../img/eye.png"


const Cirkels = () => {

    const style = css` 
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;

    img {
        border-radius: 50%;
        height: 15rem;
        width: 15rem;
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
            <img src={Albino} alt="" style={{height: "100%"}}/>
            <img src={Acid} alt="" style={{height: "100%"}}/>
            <img src={Moterbike} alt="" style={{height: "100%"}}/>
            <img src={Me} alt="" style={{height: "100%"}}/>
            <img src={Eye} alt="" style={{height: "100%"}}/>
        </section>
     );
}
 
export default Cirkels;

