import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {}
})

//exporting provider
export const ThemeProvider = ThemeContext.Provider

//exporting custom hooks that will be made
//in previous project we had to import useContext and the file UserContext separately but now we can just import once and the custom hook gives us the opportubity to get everything at once
export default function useTheme(){
    return useContext(ThemeContext)
}