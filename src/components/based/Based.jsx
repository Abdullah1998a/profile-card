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
export default function Based({ language }) {
  const translations = {
    ar: {
      based: "أُقِيمُ فِي سوريا دِمَشق.",
    },
    en: {
      based: "I'm based in Syria, Damascus.",
    },
  };
  return (
    <motion.p
      variants={slideVariants}
      className="mt-2 text-neutral-800 dark:text-neutral-200"
      key={language}
    >
      {language ? translations.ar.based : translations.en.based}
    </motion.p>
  );
}
