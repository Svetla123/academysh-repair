import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingImg from "./utils/image/meetingImg.jpg";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

export default function MeetingCard({ meeting }) {
    let badgeText;
    if (0 === 0) {
        badgeText = "UPCOMING MEETING";
    } else if (0 === "NES") {
        badgeText = "AlLREADY PASSED";
    }

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
                image={MeetingImg}
                alt={"meeting Image"}
                sx={{ width: { xs: "100%", sm: "358px" }, height: 150 }}
            />
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: "160px" }}>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="#FFF"
                    fontSize={"15px"}
                    sx={{ mb: 1 }}
                    textAlign="center"
                >
                    <span className="border--bottom">#0{meeting.id}:</span>{" "}
                    {meeting.title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="right"
                    marginLeft="20px"
                >
                    {meeting.topic}
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
                    Starts on {meeting.date} in {meeting.timeStart} till{" "}
                    {meeting.timeEnd}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="gray"
                    fontSize={"10px"}
                    textAlign="left"
                >
                    <LocationSearchingIcon
                        sx={{
                            fontSize: "15px",
                            color: "white",
                            ml: "5px",
                            marginRight: "5px",
                        }}
                    />
                    {meeting.location}
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
                    Created by {meeting.createdBy} on {meeting.createdOn}
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
                            See more
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
}
