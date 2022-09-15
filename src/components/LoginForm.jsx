import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function LoginForm() {
    const [loginFormData, setLoginFormData] = React.useState({
        username: "",
        password: "",
    });

    function handleChange(event) {
        setLoginFormData((prev) => {
            return {
                ...loginFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                style={{
                    backgroundColor: "#D9D5D2",
                    marginTop: "150px",
                    marginBotton: "30px",
                    borderRadius: 10,
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: "#01403A",
                            height: "60px",
                            width: "60px",
                        }}
                    >
                        <LockOutlinedIcon
                            sx={{
                                height: "40px",
                                width: "40px",
                                color: "#D9D5D2",
                            }}
                        />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ fontSize: "18px" }}
                    >
                        Login with existing account
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        {/* USERNAME */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            color="success"
                            onChange={handleChange}
                            sx={{
                                backgroundColor: "#D9D5D2",
                                marginTop: "30px",
                                text: "20px",
                            }}
                        />

                        {/* PASSWORD */}
                        <TextField
                            margin="normal"
                            color="success"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: "#027368",
                                borderColor: "#027368",
                                color: "white",
                            }}
                        >
                            Login
                        </Button>
                        <Grid container sx={{ marginBottom: "20px" }}>
                            <Grid item xs>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: "#01403A" }}
                                >
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="/register"
                                    variant="body2"
                                    sx={{ color: "#01403A" }}
                                >
                                    {"Don't have an account? Register!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
