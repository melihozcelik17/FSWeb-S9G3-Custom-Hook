
import useLocalStorage from "./localStorageKullan"

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode]



}

export default useDarkMode;