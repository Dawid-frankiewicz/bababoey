import "./Navbar.scss";
import facebookIcon from "./facebook.png"; // Importowanie obrazka
import ytIcon from "./youtube.png";
import instIcon from "./instagram.png";
import { motion } from "framer-motion";
import { Sidebar } from "../SIdebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Krystian S
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="#">
            <img src={ytIcon} alt="youtube" />
          </a>
          <a href="#">
            <img src={instIcon} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
