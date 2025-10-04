// import axios from "axios";

// const API_KEY = import.meta.env.REACT_APP_GOOGLE_TRANSLATE_KEY; // stored in .env

// // Accepts single string OR array of strings
// export const translateText = async (text, targetLang) => {
//   try {
//     const input = Array.isArray(text) ? text : [text];

//     const response = await axios.post(
//       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//       {
//         q: input,
//         target: targetLang,
//       }
//     );

//     // Map response back to input order
//     return response.data.data.translations.map((t) => t.translatedText);
//   } catch (error) {
//     console.error("Translation Error:", error);
//     return Array.isArray(text) ? text : [text]; // fallback to original(s)
//   }
// };

//for cached data
import axios from "axios";

//const API_KEY = import.meta.env.REACT_APP_GOOGLE_TRANSLATE_KEY;
const API_KEY = "AIzaSyA8e4dz05mSMPR5CPUmQaL6dmjirBAFaX4";
// Helper to load from cache
const loadCache = () => {
  try {
    return JSON.parse(localStorage.getItem("translations")) || {};
  } catch {
    return {};
  }
};

// Helper to save to cache
const saveCache = (cache) => {
  localStorage.setItem("translations", JSON.stringify(cache));
};

// Translate text(s) with caching
export const translateText = async (text, targetLang) => {
  const input = Array.isArray(text) ? text : [text];
  const cache = loadCache();
  const cacheKey = targetLang;

  // Initialize cache for this language
  if (!cache[cacheKey]) cache[cacheKey] = {};

  // Separate cached vs uncached
  const uncached = [];
  const results = input.map((t) => {
    if (cache[cacheKey][t]) {
      return cache[cacheKey][t];
    } else {
      uncached.push(t);
      return null;
    }
  });

  // If all are cached → return immediately
  if (uncached.length === 0) {
    return results;
  }

  try {
    // Request translation for uncached items
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        q: uncached,
        target: targetLang,
      }
    );

    const newTranslations = response.data.data.translations;

    // Save results to cache
    uncached.forEach((t, i) => {
      cache[cacheKey][t] = newTranslations[i].translatedText;
    });
    saveCache(cache);

    // Merge cached + new
    return input.map((t) => cache[cacheKey][t] || t);
  } catch (error) {
    console.error("Translation Error:", error);
    return input; // fallback
  }
};
