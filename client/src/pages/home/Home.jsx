import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import "./home.css";
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import {useLocation} from "react-router";
 
 const Home = () => {
    const [posts, setPosts] = useState([]);
    
    const path = useLocation();
    const search =path.search;
    useEffect(() =>{
       const fetchPost = async () => {
         const res = await axios.get("/posts"+search)
         setPosts(res.data);
         // console.log(res.data);
       }
       fetchPost();
    },[search]);

   return (
   <>
      <Header/>
     <div className="home">
         <Posts posts={posts} />
         <Sidebar/>
      </div>
      </>
   )
 }
 
 export default Home