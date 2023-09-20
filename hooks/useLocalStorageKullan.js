import { useState } from "react";

const useLocalStorageKullan = (key, initialValue) => {
  const [theme, setTheme] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setTheme(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [theme, setValue];
};

export default useLocalStorageKullan;
