import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoWhite from "../image/LogoWhite.png";
import logoDark from "../image/LogoBlack.png";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React from "react";
import "../custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
    const [isDarkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <Navbar
            bg="primary"
            expand="lg"
            variant="white"
            style={{
                height: "50px",
                marginLeft: "20px",
                marginRight: "20px",
                borderRadius: 20,
                opacity: 0.9,
            }}
        >
            <Container>
                <Navbar.Brand href="/">
                    {" "}
                    <img
                        alt="logoWhite"
                        src={logoDark}
                        width="200"
                        height="250"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Navbar.Text>
                    Welcome back, <a href="#login">Svetla123</a>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Collapse className="justify-content-end">
                        <Form
                            className="d-flex"
                            style={{
                                display: "flex",
                                marginTop: "28px",
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

                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            className="me-2"
                        >
                            Register
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            className="me-2"
                            style={{ marginRight: "20px" }}
                        >
                            LogIn
                        </Button>
                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={23}
                            style={{ marginLeft: "20px" }}
                        />
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
