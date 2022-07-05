import React,{useContext} from 'react'
import "./topbar.css"
// import image from "../../assets/image/image.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../context/Context';

export const Topbar = () => {
    const {user,dispatch} = useContext(Context);

    const handleLogout =() => {
        dispatch({type:"LOGOUT"});
    };
    const PF = "http://localhost:5000/images/"

    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
           </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItems">
                    <Link to ='/' className="link">HOME</Link>
                </li>
                <li className="topListItems"><Link to ='/about' className="link">ABOUT</Link></li>
                <li className="topListItems"><Link to ='/contact' className="link">CONTACT</Link></li>
                <li className="topListItems"><Link to ='/write' className="link">WRITE</Link></li>
                <li className="topListItems"onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
               
            </ul>
            </div>
            <div className="topRight">
                {user?(
                <Link to="/settings">
                    <img src={PF+user.profilePic} className="topImg" alt="profile" />
                </Link>
                ):( <ul className="topList">
                <li className="topListItems">
                    <Link to ='/login' className="link">LOGIN</Link>
                </li>
                <li className="topListItems"><Link to ='/register' className="link">REGISTER</Link></li>
               
            </ul>
                )}
                <i className="SearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
