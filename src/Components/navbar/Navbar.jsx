import "./navbar.scss";
import Sidebar from "../sidebar/sidebar";
import {motion} from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}>Credenson</motion.span>
            <div className="links">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Theme</a>
                <a href="">About</a>
                <a href="">Orders</a>
                <a href=""><img src="/Images/Bag_icon.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
