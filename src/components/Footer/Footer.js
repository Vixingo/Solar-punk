import { Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Paper
                className="Footer"
                style={{
                    background: "rgba(0, 0, 0, .5)",
                    paddingTop: "100px",
                    paddingBottom: "100px",
                }}
            >
                <div className="container">
                    <div
                        style={{
                            maxWidth: "250px",
                            margin: "0 auto",
                        }}
                    >
                        <img src="../img/LOGOLight.png" width={"100%"} alt="" />
                    </div>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "18px",
                            fontFamily: "Spartan",
                            mt: 3,
                            fontWeight: "400",
                        }}
                    >
                        All Rights Reserved 2022
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "18px",
                            fontFamily: "Spartan",
                            mt: 3,
                            fontWeight: "400",
                        }}
                    >
                        <Link to="#"> Terms and conditions </Link>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "16px",
                            fontFamily: "Spartan",
                            mt: 3,
                            fontWeight: "300",
                        }}
                    >
                        <Link to="#">
                            {" "}
                            0xF3114DD5c5b50a573E66596563D15A630ED359b4
                        </Link>
                    </Typography>
                </div>
            </Paper>
        </>
    );
}

export default Footer;
