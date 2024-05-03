import { motion } from "framer-motion";
import "./message-btn.css";

const popupVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
export default function MessageBtn({ language }) {
  const translations = {
    ar: {
      name: "رِسَالة",
    },
    en: {
      name: "Message",
    },
  };
  return (
    <motion.a
      variants={popupVariants}
      href="mailto:abdullahalnoime@gmail.com"
      className="message-btn"
      key={language}
    >
      <button>{language ? translations.ar.name : translations.en.name}</button>
    </motion.a>
  );
}
