import React, { useState } from "react";
import { Box, Grid, Typography, FormControlLabel, Radio } from "@mui/material";

const TabContent = ({
  data,
  listOfproducts,
  baseUrl,
  filterImages,
  setSelectedProduct,
}) => {
  const [products] = useState(listOfproducts);
  return (
    <Box className="tab-content" sx={{ padding: 2, margin: "0 5vw" }}>
      {/* Gemstone Selection */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Select Gemstone Type
      </Typography>
      <Grid container spacing={2}>
        {data?.shapes?.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              onClick={() => filterImages("stoneType", item.id)}
              sx={{
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  borderRadius: "50%",
                  maxWidth: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border: "2px solid #ccc",
                }}
              />
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Metal Type Selection */}
      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        Select Metal Type
      </Typography>
      <Grid container spacing={2}>
        {data?.colors?.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <FormControlLabel
                value={item.name}
                control={
                  <Radio onClick={() => filterImages("color", item.id)} />
                }
                label={
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      maxWidth: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "2px solid #ccc",
                    }}
                  />
                }
                sx={{ textAlign: "center" }}
              />
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Product Grid */}
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Products
      </Typography>
      <Grid container spacing={2}>
        {products?.map((product, index) => {
          if (product?.id === 5) {
            console.log(product);
            const mainImage =
              product.image && product.image.length > 0
                ? product.image[0].image
                : "https://via.placeholder.com/150"; // Fallback if no image

            const discountedPrice = product.discount
              ? product.price - product.discount
              : product.price;
            console.log("in here");
            console.log(mainImage);
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  onClick={() => setSelectedProduct(product)}
                  sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: 2,
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={mainImage}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: product.discount
                        ? "line-through"
                        : "none",
                    }}
                  >
                    ${product.price}
                  </Typography>
                  {product.discount && (
                    <Typography variant="body2" color="primary">
                      Now: ${discountedPrice}
                    </Typography>
                  )}
                </Box>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
};

export default TabContent;
