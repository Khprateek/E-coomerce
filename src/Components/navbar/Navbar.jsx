import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
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
                <a href="">Services</a>
                <a href="">Portfolio</a>
                <a href="">Contacts</a>
                <a href="">Orders</a>
                <a href=""><img src="/Images/Bag_icon.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
