import React from "react";
import { categories } from "./utils/logos";
import { Stack } from "@mui/material";
export default function SideBar(props) {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%", marginTop: "20px" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => props.setSelectedCategory(category.name)}
                    style={{
                        background:
                            category.name === props.selectedCategory &&
                            "#01403A",
                        color: "#80A69F",
                        border: "none",
                        padding: "10px",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "15px",
                    }}
                    key={category.name}
                >
                    <span
                        style={{
                            color:
                                category.name === props.selectedCategory
                                    ? "#80A69F"
                                    : "#01403A",
                            marginRight: "15px",
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity:
                                category.name === props.selectedCategory
                                    ? "1"
                                    : "0.8",
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
}
