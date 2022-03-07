import { Paper, Typography } from "@mui/material";
import React from "react";

function Roadmap() {
    return (
        <>
            <Paper className="Roadmap">
                <div
                    className="container"
                    style={{
                        paddingTop: "100px",
                        maxWidth: "850px",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "40px",
                            fontWeight: "700",
                            textAlign: "center",
                        }}
                    >
                        ROADMAP
                    </Typography>
                    <div>
                        <img src="../img/rmbg.png" alt="" width={"100%"} />
                    </div>
                    <br />
                    <br />
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        0% - NFT SALE - Welcome to the Club!
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Spartan",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Take a seat, join other fellow apes on Discord, and sip
                        a glass of champagne. We will be raffling 5 Fat Apes
                        once we reach 20,000 members on Discord.
                    </Typography>
                    <br />{" "}
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        25% - hold or resale the NFT
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Spartan",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Fat Ape holders will be rewarded for thanking them of
                        being part of the community. 10% of the second-market
                        royalties will be dedicated to a special fund to ensure
                        the Fat Ape Club’s longevity through marketing campaigns
                        and floor sweeps.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        50% - building on site
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Spartan",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Launch of the Fat Ape merch collection, with the option
                        of having your Fat Ape NFT printed on the merch.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        75% - earn passive income
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Spartan",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        A total of 10 Fat Apes, including one Heroic Ape, will
                        be raffled among all the Fat Ape holders.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            color: "primary.main",
                            fontFamily: "Vollkorn",
                            fontSize: "28px",
                            fontWeight: "700",
                        }}
                    >
                        100% - enjoy the island
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Spartan",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Our team will start implementing breeding functions in
                        the upcoming weeks after the launch, which will allow
                        Fat Apes holders to receive tokens and burn them to
                        create new, stronger apes. In order to benefit from
                        these breeding functions, you must own at least 2 Fat
                        Apes.
                    </Typography>
                    <br />
                </div>
            </Paper>
        </>
    );
}

export default Roadmap;
