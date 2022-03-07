import React from "react";
import Hero from "../components/Hero/Hero";

import { Paper } from "@mui/material";
import Roadmap from "../components/Roadmap/Roadmap";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";

function Landing() {
    return (
        <>
            <Paper>
                <Hero />
                <Roadmap />
                <Faq />
                <Footer />
            </Paper>
        </>
    );
}

export default Landing;
