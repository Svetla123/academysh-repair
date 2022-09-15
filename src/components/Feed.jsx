import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { Sidebar, News } from "./";
import bgWhite from "./utils/image/whiteBG.jpg";
import bgDark from "./utils/image/darkBG.jpg";
export default function Feed() {
    const [selectedCategory, setSelectedCategory] = React.useState("New");
    return (
        <Stack
            sx={{
                flexDirection: { sx: "column", md: "row" },
            }}
        >
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    width: { sx: "100%", md: "16%" },
                    px: { sx: 0, md: 2 },

                    backgroundColor: { sx: "#f2f2f2", md: "#D9D9D9" },
                }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{
                        marginTop: { sx: "0px", md: "20px" },
                        marginLeft: { sx: "0px", md: "20px" },
                    }}
                >
                    <span style={{ color: "#01403A" }}>
                        {selectedCategory}{" "}
                    </span>
                    <span style={{ color: "#80A69F" }}>feed</span>
                </Typography>
                {selectedCategory === "NEWS" && <News />}
                {/* {selectedCategory === "MEETINGS" && <News />}
                {selectedCategory === "TESTS" && <News />}
                {selectedCategory === "PROFILE" && <News />} */}
            </Box>
        </Stack>
    );
}
