import React from "react";
import { Loader, MeetingCard, Test } from "./";
import { Box, Stack, Typography, Link } from "@mui/material";
import meetingCardData from "./utils/data/meetingCardData";
import testData from "./utils/data/testData";
export default function News() {
    const meetingCardElements = meetingCardData.map((meeting, index) => {
        return <MeetingCard key={meeting.id} meeting={meeting} />;
    });
    const testElements = testData.map((test, index) => {
        return <Test key={test.id} test={test} />;
    });
    // if (true) return <Loader />;
    return (
        <Box>
            <Typography>Meeting card</Typography>
            {meetingCardElements}

            <Typography>Test card</Typography>
            {testElements}
        </Box>
    );
}
