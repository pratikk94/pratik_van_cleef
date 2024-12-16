import React from "react";
import { Box, Grid, Typography, FormControlLabel, Radio } from "@mui/material";

const TabContent = ({
  data,
  products,
  baseUrl,
  filterImages,
  setSelectedProduct,
}) => {
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
                  maxWidth: "100px",
                }}
              />
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
            <FormControlLabel
              value={item.name}
              control={<Radio onClick={() => filterImages("color", item.id)} />}
              label={
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: "100px" }}
                />
              }
              sx={{ textAlign: "center" }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Product Grid */}
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Products
      </Typography>
      <Grid container spacing={2}>
        {products?.map((product, index) => {
          if (product?.sub_category?.id === 1) {
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  onClick={() => setSelectedProduct(product)}
                  sx={{
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`${baseUrl}/${product?.image[0]?.image}`}
                    alt={product.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
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
