import { motion } from "framer-motion";
import darkLogo from "./dark-logo.svg";
import logo from "./logo.svg";
import "./logo.css";

const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function Logo({ theme, language }) {
  return (
    <motion.div variants={fadeVariants} className="logo" key={language}>
      <img src={theme ? darkLogo : logo} alt="logo" />
    </motion.div>
  );
}
