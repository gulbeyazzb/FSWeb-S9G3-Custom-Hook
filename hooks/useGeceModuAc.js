import { useState } from "react";
import useLocalStorageKullan from "./useLocalStorageKullan";
useLocalStorageKullan;
export const useGeceModuAc = () => {
  const [mode, setmode] = useState(false);
  const [savedTheme, setSavedTheme] = useLocalStorageKullan("DarkMode", false);

  const toggleMode = (e) => {
    e.preventDefault();
    setmode(!mode);
  };

  setSavedTheme(mode);
  return [mode, savedTheme, toggleMode];
};
