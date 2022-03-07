import React from "react";

import Typography from "@mui/material/Typography";

import Faqmain from "./Faqmain";
import { Paper } from "@mui/material";

const faqData = [
    {
        title: "HOW DO I GET A SOLARPUNK?",
        detail: "You mint it at our website https://solarpunk.com",
    },
    {
        title: "WHEN ARE THE SOLARPUNKS DROPPING?",
        detail: "We will be launching the islander in February, and only the Whitelisted will be able to mint the SOLARPUNKS at a discounted price of 0.07 ETH and get the biggest chance of getting a rare Space Turtle with a flag.",
    },
    {
        title: "WHAT WILL THE PRICE BE FOR THE SOLARPUNKS?",
        detail: "The islander (Presale) will cost 0.07 ETH and after the first 1000 is minted it will cost 0.1 ETH.",
    },
    {
        title: "WHAT TYPE OF TOKENS ARE THE SOLARPUNKS?",
        detail: "SOLARPUNKS is an ERC-721 token and all images are hosted on IPFS and that means that files stored on IPFS are resistant to tampering and censorship. So they are here with us in eternity.",
    },
    {
        title: "HOW MANY SOLARPUNKS SHOULD I MINT?",
        detail: "Well, honestly that's not for me to answer. Only you can decide how much you can afford and how much you can invest in the project. But one thing is for sure and that is the more you mint in the beginning the likelier it is for you to get a Space Turtle with a flag, and that can be resold to us creators for 1 ETH or even more if you decide to hold on to it. It's totally up to you but the chance of actually getting a Space Turtle in the first round is way higher than in the other ones.",
    },
    {
        title: "HOW DO I GET WHITELISTED?",
        detail: "You can get Whitelisted in 3 ways:- By inviting the most people in 24h, and commenting on our post, and retweeting it on Twitter. No bots or you will get kicked! TOP 10 will get Whitelisted. - By reaching level 10 in discord, BUT no spam or useless talk just to get therend or you will be kicked. - The one that invites 20 people in 36h (3 days) Let us know the number you have invited per 24h as we reset the invite counter.",
    },
    {
        title: "WILL THE PRICE GO UP FOR THIS NFT?",
        detail: "Nothing in life is guaranteed except death and one more thing in this life, but one thing is certain, we have all the tools and even more to get to the top. If we compare our art, roadmap, team, and connections with other NFT's we can by far say that we are going for the top spot and that is truly my honest opinion. After islander (presale) is over the mintprice will be 0.1 ETH and we don't worry about floor price dropping because we have an intense roadmap that has many points on the way. The HODLers will be the winners at the end for sure because the art minted in the beginning will have much greater value the further we go on the roadmap let alone the value of the art itself. And when we release roadmap 2.0, all those HODLers will be very very happy SOLARPUNKS, and that is the second guarantee we have in life.",
    },
    {
        title: "HOW MANY SOLARPUNKS WILL THERE BE?",
        detail: "There will be 9000 different SOLARPUNKS where 304 will be SUPER rare (those with flags) and amongst the rest, there will be 700 extra rare done with over 500 special handmade traits. Every part of the SOLARPUNKS is handcrafted by our artist.",
    },
];

function Faq() {
    return (
        <>
            <Paper
                className="Faq"
                id="faq"
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
            >
                <Typography
                    sx={{
                        fontSize: "40px",
                        textAlign: "center",
                        mb: 3,
                        color: "primary.main",
                        fontWeight: "700",
                        fontFamily: "Vollkorn",
                    }}
                >
                    FAQS
                </Typography>{" "}
                {faqData.map((data) => {
                    return <Faqmain title={data.title} detail={data.detail} />;
                })}
            </Paper>
        </>
    );
}

export default Faq;
