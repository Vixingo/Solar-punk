import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Notfound from "./Routes/Notfound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ff0",
            light: "#744",
            dark: "#000",
        },
    },
});
const light = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f00",
            light: "#744",
            dark: "#000",
        },
    },
});

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <>
            <ThemeProvider theme={isDarkTheme ? dark : light}>
                <Switch checked={isDarkTheme} onChange={changeTheme} />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
