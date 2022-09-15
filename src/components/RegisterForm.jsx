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
import MenuItem from "@mui/material/MenuItem";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const educations = [
    {
        value: "H.S.",
        label: "High school",
    },
    {
        value: "B.S.B.A.",
        label: "Bachelor of Science in Business Administration",
    },
    {
        value: "B.S.Ed.",
        label: "Bachelor of Science in Education",
    },
    {
        value: "Bc.",
        label: "Bachelor",
    },
    {
        value: "MBA",
        label: "Master of Business Administration",
    },
    {
        value: "M.Ed.",
        label: "Master of Education",
    },
    {
        value: "M.S.",
        label: "Master of Science",
    },
    {
        value: "M.",
        label: "Master",
    },
    {
        value: "D.P.C.",
        label: "Doctor of Education",
    },
    {
        value: "Ed.S.",
        label: "Educational Specialist",
    },
];
const genders = [
    {
        value: "Male",
        label: "Male",
    },
    {
        value: "Female",
        label: "Female",
    },
    {
        value: "Other",
        label: "Other",
    },
];
const roles = [
    {
        value: "Professor",
        label: "Professor",
    },
    {
        value: "Student",
        label: "Student",
    },
];

export default function RegisterForm() {
    const theme = createTheme();
    const [registerFormData, setRegisterFormData] = React.useState({
        role: "",
        name: "",
        surname: "",
        email: "",
        dob: null,
        educationLevel: "",
        gender: "",
        password: "",
        repeatPassword: "",
    });

    function handleChange(event) {
        console.log(event.target.name);
        setRegisterFormData((prev) => {
            return {
                ...registerFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    console.log(registerFormData);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                            <Grid item xs={12} sm={4}>
                                {/* ROLE */}
                                <TextField
                                    required
                                    fullWidth
                                    defaultValue=""
                                    name="role"
                                    select
                                    label="I will use this account as"
                                    color="success"
                                    value={roles.value}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: "#D9D5D2",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    {roles.map((role) => (
                                        <MenuItem
                                            key={role.label}
                                            value={role.label}
                                        >
                                            {role.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    {/* NAME */}
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        color="success"
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* SURNAME */}
                                    <TextField
                                        required
                                        fullWidth
                                        id="surname"
                                        label="Surname"
                                        name="surname"
                                        autoComplete="family-name"
                                        color="success"
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* USERNAME */}
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        color="success"
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* EMAIL */}
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        color="success"
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    {/* DATE OF BIRHT */}
                                    <DesktopDatePicker
                                        color="success"
                                        label="Date of birth"
                                        inputFormat="MM/DD/YYYY"
                                        value={registerFormData.dob}
                                        onChange={(newValue) => {
                                            setRegisterFormData({
                                                ...registerFormData,
                                                dob: `${newValue.$y}-${newValue.$M}-${newValue.$D}`,
                                            });
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                required
                                                fullWidth
                                                select
                                                {...params}
                                                sx={{
                                                    backgroundColor: "#D9D5D2",
                                                    marginTop: "10px",
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    {/* EDUCATION LEVEL */}
                                    <TextField
                                        required
                                        fullWidth
                                        defaultValue=""
                                        name="educationLevel"
                                        select
                                        label="Education level"
                                        color="success"
                                        value={educations.value}
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {educations.map((level) => (
                                            <MenuItem
                                                key={level.label}
                                                value={level.label}
                                            >
                                                {level.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    {/* GENDER */}
                                    <TextField
                                        required
                                        fullWidth
                                        defaultValue=""
                                        name="gender"
                                        select
                                        label="Gender"
                                        color="success"
                                        value={genders.value}
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {genders.map((gender) => (
                                            <MenuItem
                                                key={gender.value}
                                                value={gender.value}
                                            >
                                                {gender.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    {/* PASSWORD */}
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        color="success"
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#D9D5D2",
                                            marginTop: "10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* REPEAT PASSWORD */}
                                    <TextField
                                        required
                                        fullWidth
                                        name="repeatPassword"
                                        label="Repat password"
                                        type="password"
                                        id="repeatPassword"
                                        autoComplete="new-password"
                                        color="success"
                                        onChange={handleChange}
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
                                        href="/login"
                                        variant="body2"
                                        sx={{ color: "#01403A" }}
                                    >
                                        Already have an account? Log in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </LocalizationProvider>
    );
}
