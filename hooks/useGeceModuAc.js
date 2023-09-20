import { useState } from "react";
import useLocalStorageKullan from "./useLocalStorageKullan";
useLocalStorageKullan;
export const useGeceModuAc = () => {
  const [mode, setMode] = useLocalStorageKullan("DarkMode", false);

  const toggleMode = (e) => {
    e.preventDefault();
    setMode(!mode);
  };

  return [mode, toggleMode];
};
