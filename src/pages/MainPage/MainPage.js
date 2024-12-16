import React, { useState, useEffect, useMemo } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ArrowTabs from "../MainPage/ArrowTabs/ArrowTabs";
import Tab2Content from "./Tab2Content/Tab2Content";
import TabContent from "../MainPage/Tab1Content/TabContent";
import Tab3Content from "./Tab3Content/Tab3Content";
import { CustomizationMiddleware } from "../../store/customize/customizationMiddleware";
import { DeleteProductsMiddleware } from "../../store/products/deleteProductsMiddleware";

const MainPage = ({ baseUrl }) => {
  const dispatch = useDispatch();

  // Local States
  const [activeTab, setActiveTab] = useState(1); // Tracks the selected tab
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Redux Selectors
  const {
    gemShapes,
    gemStoneColors,
    birthStones,
    gemStones,
    prongStyles,
    ringSizes,
    bandWidths,
    settingHeights,
    bespokeCustomizations,
    bespokeWithTypes,
    accentStoneTypes,
  } = useSelector((state) => state.customization);

  const { products: allProducts } = useSelector((state) => state.products);

  // Fetch Redux Data
  useEffect(() => {
    const formData = { skip: 0, take: 10 };

    // Dispatch actions to fetch data
    dispatch(CustomizationMiddleware.fetchAllCustomizationData());
    dispatch(DeleteProductsMiddleware.GetAllProducts(formData));
  }, [dispatch]);

  // Sync Products from Redux and set loading state
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setProducts(allProducts);
      setLoading(false); // Stop loading when products are available
    }
  }, [allProducts]);

  // Memoized Customization Data
  const data = useMemo(
    () => ({
      shapes: gemShapes,
      colors: gemStoneColors,
      widths: bandWidths,
      settingsHeight: settingHeights,
      ringSize: ringSizes,
      prongStyle: prongStyles,
      birthstones: birthStones,
      gemstones: gemStones,
      accentStoneTypes: accentStoneTypes,
      bespokeCustomizations: bespokeCustomizations,
      bespokeWithTypes: bespokeWithTypes,
    }),
    [
      gemShapes,
      gemStoneColors,
      bandWidths,
      settingHeights,
      ringSizes,
      prongStyles,
      birthStones,
      gemStones,
      accentStoneTypes,
      bespokeCustomizations,
      bespokeWithTypes,
    ]
  );

  // Tab Handlers
  const showContent = (tab) => setActiveTab(tab);

  const filterImages = (type, value) => {
    if (!products || products.length === 0) return;

    const filteredProducts =
      type === "stoneType"
        ? products.filter(
            (product) => product?.product_customizations?.gem_shape_id === value
          )
        : products.filter(
            (product) =>
              product?.product_customizations?.default_metal_id === value
          );

    setProducts(filteredProducts);
  };

  const changeMainImage = (image) => {
    const mainImage = document.getElementById("mainProductImage");
    if (mainImage) {
      mainImage.src = image;
    }
  };

  // Main Render
  return (
    <div style={{ fontFamily: "Judson, serif" }}>
      {/* Background Section */}
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

      {/* Loading State */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      ) : (
        <>
          {/* Tabs Section */}
          <ArrowTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Conditional Tab Rendering */}
          {activeTab === 1 && (
            <TabContent
              data={data}
              listOfproducts={products}
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
        </>
      )}
    </div>
  );
};

export default MainPage;
