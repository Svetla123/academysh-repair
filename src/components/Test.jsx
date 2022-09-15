import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TestBG from "./utils/image/testBG.jpg";
import ComputerIcon from "@mui/icons-material/Computer";
import DoneIcon from "@mui/icons-material/Done";

export default function Test({ test }) {
    let badgeText;
    if (0 === 0) {
        badgeText = "CORRECTED";
    } else if (0 === "NES") {
        badgeText = "AlLREADY PASSED";
    }
    console.log(test);
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },

                borderRadius: 8,

                boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            }}
        >
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <CardMedia
                image={TestBG}
                alt={"test Image"}
                sx={{
                    width: { xs: "100%", sm: "358px" },
                    height: 150,
                    width: "110%",
                    alignContent: "center",
                }}
            />
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: "190px" }}>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#FFF"
                    fontSize={"15px"}
                    sx={{ mb: 1 }}
                    textAlign="center"
                >
                    <span className="border--bottom">TEST #0{test.id}:</span>{" "}
                    {test.title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="right"
                    marginLeft="20px"
                    marginBottom="10px"
                >
                    {test.description}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="left"
                >
                    <CalendarMonthIcon
                        sx={{
                            fontSize: "15px",
                            color: "white",
                            ml: "5px",
                            marginRight: "5px",
                        }}
                    />
                    Deadline: {test.deadline}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="left"
                >
                    <DoneIcon
                        sx={{
                            fontSize: "15px",
                            color: "white",
                            ml: "5px",
                            marginRight: "5px",
                        }}
                    />
                    Points: {test.achivedPoints}/{test.possiblePoints}
                </Typography>

                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="left"
                >
                    <ComputerIcon
                        sx={{
                            fontSize: "15px",
                            color: "white",
                            ml: "5px",
                            marginRight: "5px",
                        }}
                    />
                    Created by {test.createdBy} on {test.createdOn}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="left"
                >
                    <CreateIcon
                        sx={{
                            fontSize: "15px",
                            color: "white",
                            ml: "5px",
                            marginRight: "5px",
                        }}
                    />
                    Corrected by: {test.correctedBy}
                </Typography>
                <Box textAlign="center">
                    <Link to="learnMore">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{
                                textAlign: "center",
                                contentAlign: "center",
                                borderColor: "#027368",
                                color: "white",
                                backgroundColor: "#027368",
                                marginTop: "10px",
                            }}
                        >
                            See comment
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
}
