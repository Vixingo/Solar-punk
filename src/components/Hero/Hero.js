import { Paper, Typography } from "@mui/material";
import React from "react";

function Hero() {
    return (
        <>
            <Paper className="Hero">
                {" "}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center align-self-center">
                            <Typography
                                sx={{
                                    color: "primary.main",
                                    fontFamily: "Vollkorn",
                                    fontSize: "40px",
                                    fontWeight: "700",
                                }}
                            >
                                WELCOME TO THE
                            </Typography>{" "}
                            <Typography
                                sx={{
                                    color: "primary.main",
                                    fontFamily: "Spartan",
                                    fontSize: "28px",
                                    fontWeight: "500",
                                }}
                            >
                                ISLANDER SOLAR PUNK
                            </Typography>
                            <br />
                            <Typography
                                sx={{
                                    color: "primary.light",
                                    fontFamily: "Spartan",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    maxWidth: "450px",
                                    margin: "0 auto",
                                }}
                            >
                                A limited NFT collection where the token itself
                                doubles as your membership to a swamp club for
                                apes. The club is open! Ape in with us.
                            </Typography>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5 m-5 ">
                                <img
                                    src="../img/LOGOLight.png"
                                    alt=""
                                    width={"100%"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    );
}

export default Hero;
