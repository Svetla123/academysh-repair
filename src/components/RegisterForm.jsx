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
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function RegisterForm() {
    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const [date, setDate] = React.useState("2000-08-18T21:11:54");

    function handleChange(event) {
        setDate(() => event.target.value);
    }

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
                        <AppRegistrationIcon
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
                        Create a new account
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 5 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="surname"
                                    label="Surname"
                                    name="surname"
                                    autoComplete="family-name"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        value={date}
                                        onChange={handleChange}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="educationLevel"
                                    label="Education level"
                                    name="educationLevel"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="gender"
                                    label="Gender"
                                    name="gender"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="repeatPassword"
                                    label="Repat password"
                                    type="password"
                                    id="repeatPassword"
                                    autoComplete="new-password"
                                    color="success"
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                        />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
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
                            Register
                        </Button>
                        <Grid
                            container
                            justifyContent="flex-end"
                            sx={{ marginBottom: "20px" }}
                        >
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: "#01403A" }}
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
