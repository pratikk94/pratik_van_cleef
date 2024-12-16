import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Tab3Content = ({ items, data, baseUrl, showContent }) => {
  // State for the main product image
  const [mainImage, setMainImage] = useState("../img/image01.jpg");

  // Array of thumbnails
  const thumbnails = [
    { id: 1, src: "../img/image01.jpg", alt: "Thumbnail 1" },
    { id: 2, src: "../img/image02.jpg", alt: "Thumbnail 2" },
    { id: 3, src: "../img/image03.jpg", alt: "Thumbnail 3" },
    { id: 4, src: "../img/image04.jpg", alt: "Thumbnail 4" },
  ];

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: "#f9f9f9" }}>
      <Grid container spacing={4}>
        {/* Left Section - Thumbnail Gallery */}
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Product Showcase
              </Typography>

              {/* Thumbnails */}
              <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
                {thumbnails.map((image) => (
                  <CardMedia
                    key={image.id}
                    component="img"
                    image={image.src}
                    alt={image.alt}
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.1)" },
                      border:
                        mainImage === image.src ? "2px solid #007BFF" : "",
                    }}
                    onClick={() => setMainImage(image.src)} // Update main image
                  />
                ))}
              </Box>

              {/* Main Image */}
              <Box
                component="img"
                src={mainImage}
                alt="Main Product"
                sx={{
                  width: "100%",
                  marginTop: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Customization Options */}
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 2, boxShadow: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Bespoke Customizations
            </Typography>

            {/* Bespoke Customizations */}
            <Box marginBottom={3}>
              {items?.bespokeCustomisationsUserSelected?.map((item, index) => {
                const customization = data?.bespokeWithTypes?.find(
                  (c) => c?.id === item
                );

                return (
                  <Box key={index} sx={{ display: "flex", marginBottom: 2 }}>
                    <CardMedia
                      component="img"
                      src={`${baseUrl}/${customization?.image}`}
                      alt={customization?.name}
                      sx={{ width: "80px", borderRadius: 2, marginRight: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {customization?.name}
                      </Typography>
                      <RadioGroup>
                        {customization?.bsp_type?.map((option, i) => (
                          <FormControlLabel
                            key={i}
                            value={option?.name}
                            control={<Radio />}
                            label={`${option?.name} | USD ${option?.price}`}
                          />
                        ))}
                      </RadioGroup>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* Complimentary Engraving */}
            <Box marginBottom={3}>
              <Typography variant="h6">Complimentary Engraving</Typography>
              <Typography variant="body2" color="textSecondary">
                Personalize your ring with engraving (max 20 characters).
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="A name, date, initials, or word"
                inputProps={{ maxLength: 20 }}
                sx={{ marginTop: 2 }}
              />
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => showContent(2)}
              >
                BACK
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => showContent(4)}
              >
                NEXT STEP
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tab3Content;
