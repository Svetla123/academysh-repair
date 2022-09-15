import React, { Component } from "react";
import { Header, About, Comments, Footer } from "..";
import commentsData from "../utils/data/commentsData";
import socialData from "../utils/data/socialData";
import { TextField } from "@mui/material";

export default function LandingPage() {
    const commentsElements = commentsData.map((comment, index) => {
        return <Comments key={comment.id} comment={comment} />;
    });
    console.log(commentsElements);
    return (
        <div className="App landing-page">
            <Header />
            <About />
            {commentsElements}
            <Footer social={socialData} landingPage={true} />
        </div>
    );
}
