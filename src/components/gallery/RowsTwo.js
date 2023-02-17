/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Me from "../../img/genderfluid.png"
import DnD from "../../img/Azrael1.png"
import MeTwo from "../../img/me.png"
import Lightning from "../../img/lightning-2.png"


const RowsTwo = () => {

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
            <img src={Me} alt="" style={{height: "100%"}}/>
            <img src={DnD} alt="" style={{height: "100%"}}/>
            <img src={MeTwo} alt="" style={{height: "100%"}}/>
            <img src={Lightning} alt="" style={{height: "100%"}}/>
        </article>
     );
}
 
export default RowsTwo;
