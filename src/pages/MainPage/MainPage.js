import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ArrowTabs from "../MainPage/ArrowTabs/ArrowTabs";
import Tab2Content from "./Tab2Content/Tab2Content";
import TabContent from "../MainPage/Tab1Content/TabContent";
import Tab3Content from "./Tab3Content/Tab3Content";

const MainPage = ({ data, products, baseUrl }) => {
  const [activeTab, setActiveTab] = useState(0); // Tracks the selected tab

  const filterImages = (type, id) => {
    console.log(`Filtering images by ${type} with id: ${id}`);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const showContent = (tab) => setActiveTab(tab);

  const changeMainImage = (image) => {
    console.log(`Main Image Changed: ${image}`);
  };

  return (
    <div style={{ fontFamily: "Judson, serif" }}>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundImage: "url(../img/homebanner-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Foreground Image */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "50%",
            height: "100%",
            backgroundImage: "url(../img/banner-fg.png)",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />

        {/* Centered Content */}
        <Grid
          container
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            width: { xs: "90%", sm: "50%" },
            height: "40vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: { xs: 2, sm: 4 },
            borderRadius: 2,
            textAlign: "center",
          }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Judson, serif",
                fontSize: { xs: "4vh", sm: "6vh" },
              }}
            >
              Timeless Elegance
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Judson, serif",
                fontSize: { xs: "1.5vh", sm: "2vh" },
              }}
            >
              Culminating on the wrist or suspended from the neck, jewelry
              watches offer time a precious setting.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Arrow Tabs */}
      <ArrowTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Render TabContent only if Tab 1 is selected */}
      {activeTab === 1 && (
        <TabContent
          data={data}
          products={products}
          baseUrl={baseUrl}
          filterImages={filterImages}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {activeTab === 2 && (
        <Tab2Content
          selectedProduct={selectedProduct}
          data={data}
          items={products}
          baseUrl={baseUrl}
          filterImages={filterImages}
          showContent={showContent}
          changeMainImage={changeMainImage}
        />
      )}
      {activeTab === 3 && (
        <Tab3Content
          items={products}
          data={data}
          baseUrl={baseUrl}
          showContent={showContent}
          changeMainImage={changeMainImage}
        />
      )}
    </div>
  );
};

export default MainPage;
