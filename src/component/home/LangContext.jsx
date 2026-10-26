import { createContext, useState, useContext } from 'react';

export const translations = {
  en: {
    navLinks: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "#about" },
      { name: "Services", link: "#services" },
      { name: "Portfolio", link: "#portfolio" },
      { name: "Blog", link: "#blog" },
      { name: "Contact Us", link: "#contact" },
    ],
    letsTalk: "Let’s Talk",
    heroHeading: "Choose What Matters To Your Business & Your Customers.",
    heroDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in digni ssim euismod purus donec mus vulputate habitant iaculis. Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.",
    heroCta: "Get Start Now",
    langBtn: "हिन्दी",
  },
  hi: {
    navLinks: [
      { name: "होम", link: "/" },
      { name: "हमारे बारे में", link: "#about" },
      { name: "सेवाएं", link: "#services" },
      { name: "पोर्टफोलियो", link: "#portfolio" },
      { name: "ब्लॉग", link: "#blog" },
      { name: "संपर्क करें", link: "#contact" },
    ],
    letsTalk: "बातचीत करें",
    heroHeading: "चुनें जो आपके व्यापार और आपके ग्राहकों के लिए मायने रखता है।",
    heroDescription:
      "हम आपके व्यवसाय के विकास को गति देने और आपके ग्राहकों के साथ मजबूत संबंध बनाने के लिए आधुनिक डिजिटल समाधान प्रदान करते हैं।",
    heroCta: "अभी शुरू करें",
    langBtn: "English",
  },
};

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
