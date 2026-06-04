import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../assets/utils/userContext";
import { useSelector } from "react-redux";
function Header() {
    const data = useContext(userContext);
    console.log("data",data);

    const cartItems = useSelector((store)=> store.cart.items)
    return (
        <div className="header">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li>{data.loggedInUser}</li>
                <li>{cartItems.length}items in cart</li>

            </ul>
        </div>
    );
}

export default Header;
