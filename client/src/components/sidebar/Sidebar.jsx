import { useState, useEffect } from 'react'
import './sidebar.css'
import axios from 'axios'
import aboutImg from '../../assets/image/about2.jpg'
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data);
    }
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={aboutImg} alt="AboutImg" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti labore rerum vel rem sed pariatur voluptatibus voluptas, laborum ad!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c => (
            <Link to={`/?cat=${c.name}`} key={c._id} className="link">
              <li  className="sidebarListItems">{c.name}</li>
            </Link>

          ))}

        </ul>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-facebook"></i>
          <i className="sidebarIcons fa-brands fa-twitter"></i>
          <i className="sidebarIcons fa-brands fa-instagram-square"></i>
          <i className="sidebarIcons fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar