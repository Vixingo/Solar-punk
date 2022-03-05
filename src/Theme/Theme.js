import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ff0",
            light: "#744",
            dark: "#000",
        },
    },
});
export const light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#f00",
            light: "#744",
            dark: "#000",
        },
    },
});
