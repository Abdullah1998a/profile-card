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
export default function Head({ language }) {
  const translations = {
    ar: {
      name: "عَبدُالله النُّعَيمِي",
      role: "مُطوِّر وَاجِهَات أَمَاميَّة",
    },
    en: {
      name: "abdullah alnoime",
      role: "Frontend developer",
    },
  };
  return (
    <motion.header variants={slideVariants} key={language}>
      <h1 className="text-2xl text-sky-800 dark:text-[tan] font-semibold capitalize">
        {language ? translations.ar.name : translations.en.name}
      </h1>
      <span className="text-[0.95rem] text-neutral-600 dark:text-neutral-300">
        {language ? translations.ar.role : translations.en.role}
      </span>
    </motion.header>
  );
}
