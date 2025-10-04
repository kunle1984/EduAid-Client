// import { useEffect, useState } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { translateText } from "../utils/translate";

// const useBatchTranslate = (defaultTexts) => {
//   const { language } = useLanguage();
//   const [translations, setTranslations] = useState(defaultTexts);

//   useEffect(() => {
//     const doTranslate = async () => {
//       if (language === "en") {
//         setTranslations(defaultTexts); // skip English
//       } else {
//         const results = await translateText(defaultTexts, language);
//         setTranslations(results);
//       }
//     };
//     doTranslate();
//   }, [defaultTexts, language]);

//   return translations;
// };

// export default useBatchTranslate;

//with cache
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translateText } from "../utils/translate";

const useBatchTranslate = (defaultTexts) => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(defaultTexts);

  useEffect(() => {
    const doTranslate = async () => {
      if (language === "en") {
        setTranslations(defaultTexts);
      } else {
        const results = await translateText(defaultTexts, language);
        setTranslations(results);
      }
    };
    doTranslate();
  }, [language]); //[defaultTexts, language];

  return translations;
};

export default useBatchTranslate;
