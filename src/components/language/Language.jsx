import { motion } from "framer-motion";

const appearenceVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};
const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function Language({ language, handleLanguage }) {
  return (
    <motion.div
      variants={appearenceVariants}
      initial="hidden"
      animate="visible"
      key={language}
      className="w-24 flex flex-col items-center gap-2"
    >
      <motion.h3
        variants={fadeVariants}
        className="capitalize dark:text-neutral-200"
      >
        {language ? "اللّغة" : "language"}
      </motion.h3>
      <motion.button
        variants={fadeVariants}
        className={`w-11 h-5 rounded-full flex items-center transition-all ${
          language
            ? "justify-end bg-sky-800 dark:bg-[tan]"
            : "bg-neutral-300 dark:bg-neutral-300"
        }`}
        onClick={handleLanguage}
      >
        <motion.span
          layout
          className="text-xs w-4 aspect-square mx-0.5 rounded-full bg-white dark:bg-neutral-600 pointer-events-none"
        ></motion.span>
      </motion.button>
    </motion.div>
  );
}
