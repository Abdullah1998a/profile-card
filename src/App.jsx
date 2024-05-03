import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  WebsiteBtn,
  MessageBtn,
  Language,
  Theme,
  Passion,
  Banner,
  Based,
  Logo,
  Head,
} from "./components";

const appearenceVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const profileVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};
export default function App() {
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState(false);
  const handleLanguage = () => {
    setLanguage(!language);
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (theme) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <motion.div
        variants={appearenceVariants}
        initial="hidden"
        animate="visible"
        className="control"
        dir={language ? "rtl" : "ltr"}
      >
        <Language language={language} handleLanguage={handleLanguage} />
        <Theme language={language} theme={theme} setTheme={setTheme} />
      </motion.div>
      <motion.div
        variants={profileVariants}
        initial="hidden"
        animate="visible"
        className="profile"
        dir={language ? "rtl" : "ltr"}
      >
        <Banner />
        <div className="px-5 pt-10 pb-5 relative">
          <Logo theme={theme} language={language} />
          <Head language={language} />
          <div>
            <Based language={language} />
            <Passion language={language} />
            <div className="mt-3 flex gap-4 items-center">
              <WebsiteBtn language={language} />
              <MessageBtn language={language} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
