import name from "../../img/navn.png"
import { Link } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";
import LinkWrapper from "./LinkWrapper";


const Header = () => {
    return ( 
        <>
        <HeaderWrapper>
        <img src={name} alt="Logo" style={{padding: "1rem"}}/>
        <LinkWrapper>
            <Link to="/" style={{color: "white"}}>Home Page</Link>
            <Link to="/gallery" style={{color: "white"}}>Gallery Page</Link>
            <Link to="/shop" style={{color: "white"}}>Shop Page</Link>
        </LinkWrapper>
       </HeaderWrapper>
        </>
     );
}
 
export default Header;