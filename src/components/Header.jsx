import React, { Component } from "react";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <hr />
                    <h1 className="responsive-headline">Academysh</h1>
                    <h3>
                        Make your <span>academy</span> today with us.
                    </h3>
                    <hr />
                </div>

                <Link to="login">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<LoginIcon sx={{ color: "white" }} />}
                        style={{
                            marginTop: "40px",
                            marginRight: "70px",
                            borderColor: "#027368",
                            color: "white",
                            backgroundColor: "#027368",
                        }}
                    >
                        Sing in
                    </Button>
                </Link>
                <Link to="register">
                    <Button
                        variant="outlined"
                        size="large"
                        endIcon={
                            <AppRegistrationIcon sx={{ color: "white" }} />
                        }
                        style={{
                            marginTop: "40px",
                            borderColor: "#027368",
                            color: "white",
                        }}
                    >
                        Register
                    </Button>
                </Link>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#resume">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}
