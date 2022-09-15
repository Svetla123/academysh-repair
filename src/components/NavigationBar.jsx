import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoWhite from "./utils/image/LogoWhite.png";
import logoDark from "./utils/image/LogoBlack.png";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";
import "../custom.scss";
import { Link } from "react-router-dom";
import profileImage from "./utils/image/profileImage.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar(props) {
    console.log(props);
    const [isDarkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <Navbar
            expand="lg"
            variant="dark"
            style={{
                height: "50px",
                // marginLeft: "10px",
                // marginRight: "10px",
                // borderRadius: 7,
                opacity: 1,
                backgroundColor: props.showUserDetails && "#01403A",
            }}
        >
            <Container>
                <Navbar.Brand href="/">
                    {" "}
                    <img
                        alt="logoWhite"
                        src={logoWhite}
                        width="200"
                        height="250"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>

                {props.showUserDetails && (
                    <Navbar.Text
                        style={{ fontSize: "15px", marginLeft: "15px" }}
                    >
                        Welcome back, <a href="#login">Svetla123</a>
                    </Navbar.Text>
                )}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Collapse className="justify-content-end">
                        {props.showUserDetails && (
                            <Form
                                className="d-flex"
                                style={{
                                    display: "flex",
                                    marginTop: "7px",
                                    marginRight: "20px",
                                }}
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <SearchIcon />
                                </IconButton>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="me-2"
                                    style={{ width: "250px", height: "25px" }}
                                />
                            </Form>
                        )}

                        {/* {props.showUserDetails && (
                            <Link to="/profile">
                                <ImageList>
                                    <ImageListItem
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            marginTop: "25px",
                                            borderRadius: "50%",
                                            marginLeft: "20px",
                                        }}
                                    >
                                        <img
                                            src={profileImage}
                                            alt="Profile Pic"
                                            className="profile--image--navbar"
                                        />
                                    </ImageListItem>
                                </ImageList>
                            </Link>
                        )} */}

                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={23}
                            style={{ marginRight: "10px" }}
                        />
                    </Navbar.Collapse>
                </Navbar.Collapse>

                {props.showUserDetails ? (
                    <Link to="/login">
                        <Button
                            variant="outlined"
                            size="small"
                            color="success"
                            className="me-2"
                            sx={{
                                borderColor: "#027368",
                                color: "white",
                                marginLeft: "20px",
                            }}
                        >
                            Logout
                        </Button>
                    </Link>
                ) : (
                    <div>
                        <Link to="/register">
                            <Button
                                variant="outlined"
                                size="small"
                                color="success"
                                className="me-2"
                                sx={{
                                    borderColor: "#027368",
                                    color: "white",
                                }}
                            >
                                Register
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button
                                variant="contained"
                                size="small"
                                color="success"
                                className="me-2"
                                style={{
                                    marginRight: "20px",
                                    borderColor: "#027368",
                                    color: "white",
                                    backgroundColor: "#027368",
                                }}
                            >
                                LogIn
                            </Button>
                        </Link>
                    </div>
                )}
            </Container>
        </Navbar>
    );
}
