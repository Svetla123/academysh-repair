import React, { Component } from "react";
import { Header, About, Comments, FooterLoading } from "..";
import commentsData from "../../data/commentsData";
import socialData from "../../data/socialData";
import { TextField } from "@mui/material";

export default function LandingPage() {
    const commentsElements = commentsData.map((comment, index) => {
        return <Comments key={comment.id} comment={comment} />;
    });
    return (
        <div className="App landing-page">
            <Header />
            <About />
            {commentsElements}
            <FooterLoading social={socialData} />
        </div>
    );
}
