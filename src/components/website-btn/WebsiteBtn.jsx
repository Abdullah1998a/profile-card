import { motion } from "framer-motion";

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
export default function WebsiteBtn({ language }) {
  const translations = {
    ar: {
      name: "مَوقِعِي",
    },
    en: {
      name: "Website",
    },
  };
  return (
    <motion.a
      variants={popupVariants}
      href="https://abdullah-alnoime.netlify.app"
      target="_blank"
      className="w-1/2 py-1.5 px-4 bg-sky-800 dark:bg-[tan] text-white dark:text-neutral-800 flex justify-center border-2 border-transparent rounded-md transition-colors hover:bg-sky-600 dark:hover:bg-[#b39268]"
      key={language}
    >
      <button>{language ? translations.ar.name : translations.en.name}</button>
    </motion.a>
  );
}
