import React from "react";
import { Box, Typography } from "@mui/material";

const ArrowTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 1, label: "1. Select your Setting" },
    { id: 2, label: "2. Customise your Setting" },
    { id: 3, label: "3. Bespoke Customisations" },
    { id: 4, label: "4. Select your Gemstone" },
  ];

  return (
    <Box
      className="tab-container"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 5vw",
        overflowX: "auto", // Makes it scrollable on small screens
        borderRadius: "8px",
      }}
    >
      {tabs.map((tab) => (
        <Box
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          sx={{
            flex: 1,
            padding: { xs: "8px", sm: "12px 16px" },
            backgroundColor: activeTab >= tab.id ? "#082c2c" : "#f5f5f5",
            color: activeTab >= tab.id ? "#fff" : "#002b2b",
            textAlign: "center",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              right: "-15px", // Adds forward arrow
              borderTop: "25px solid transparent",
              borderBottom: "25px solid transparent",
              borderLeft: `15px solid ${
                activeTab >= tab.id ? "#082c2c" : "#f5f5f5"
              }`,
              zIndex: 1,
            },
            "&:last-child::after": {
              display: "none", // Remove arrow for last tab
            },
            "&:hover": {
              backgroundColor: activeTab >= tab.id ? "#061f1f" : "#e0e0e0",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {tab.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ArrowTabs;
