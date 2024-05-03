import { motion } from "framer-motion";

const slideVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
export default function Passion({ language }) {
  const translations = {
    ar: {
      passion: "شَغَفي وَاهتِمَامي بِمَجَال تَطوير الويب.",
    },
    en: {
      passion: "Passionate about web developement.",
    },
  };
  return (
    <motion.p
      variants={slideVariants}
      className="text-neutral-800 dark:text-neutral-200"
      key={language}
    >
      {language ? translations.ar.passion : translations.en.passion}
    </motion.p>
  );
}
