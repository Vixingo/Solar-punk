import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FFCC33",
        },
        secondary: {
            main: "#006633",
        },
        background: {
            paper: "#012B22",
            default: "#012B22",
        },
    },
});
export const light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#006633",
        },
        secondary: {
            main: "#FFCC33",
        },
        background: {
            paper: "#F5F8E8",
            default: "#F5F8E8 ",
        },
    },
});
