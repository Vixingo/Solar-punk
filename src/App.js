import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Routes/Landing";
import Notfound from "./Routes/Notfound";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import { light, dark } from "./Theme/Theme";
import { Paper } from "@mui/material";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return (
        <>
            <ThemeProvider theme={isDarkTheme ? dark : light}>
                <Paper
                    sx={{
                        borderRadius: "0",
                    }}
                >
                    <BrowserRouter>
                        <Navbar check={isDarkTheme} change={changeTheme} />{" "}
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="*" element={<Notfound />} />
                        </Routes>
                    </BrowserRouter>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App;
