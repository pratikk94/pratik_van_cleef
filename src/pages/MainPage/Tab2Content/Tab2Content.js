import React from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Tab2Content = ({
  selectedProduct,
  data,
  items,
  baseUrl,
  filterImages,
  showContent,
  changeMainImage,
}) => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: "#f9f9f9" }}>
      <Grid container spacing={4}>
        {/* Left Section - Image Gallery */}
        <Grid item xs={12} md={7}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Product Showcase
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  flexWrap: "wrap",
                  marginBottom: 2,
                }}
              >
                {selectedProduct?.image?.map((img, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={`${baseUrl}/${img.image}`}
                    alt={`Thumbnail ${index}`}
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                    onClick={() => changeMainImage(img.image)}
                  />
                ))}
              </Box>
              <CardMedia
                component="img"
                image={`${baseUrl}/${selectedProduct?.image[0]?.image}`}
                alt="Main Product"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Product Options */}
        <Grid item xs={12} md={5}>
          <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Customize Your Product
            </Typography>

            {/* Precious Metal Type */}
            <Box marginBottom={2}>
              <Typography variant="h6">Precious Metal Type</Typography>
              <RadioGroup row>
                {[
                  "Platinum",
                  "Yellow Gold",
                  "Rose Gold",
                  "White Gold",
                  "Silver",
                  "Titanium",
                ].map((metal, index) => (
                  <FormControlLabel
                    key={index}
                    value={metal}
                    control={<Radio color="primary" />}
                    label={metal}
                    onClick={() => filterImages("category", metal)}
                  />
                ))}
              </RadioGroup>
            </Box>

            {/* Metal Karat */}
            <Box marginBottom={2}>
              <FormControl fullWidth>
                <Typography variant="h6">Metal Karat</Typography>
                <Select defaultValue="" variant="outlined">
                  <MenuItem value="14K">14K</MenuItem>
                  <MenuItem value="18K">18K</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Band Width */}
            <Box marginBottom={2}>
              <Typography variant="h6">Band Width</Typography>
              <Grid container spacing={1}>
                {items?.widthsUserSelected?.map((item, index) => {
                  const width = data?.widths?.find((w) => w.id === item);
                  return (
                    <Grid item xs={6} key={index}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderRadius: 2 }}
                      >
                        {width?.name}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            {/* Gemstone Type */}
            <Box marginBottom={2}>
              <FormControl fullWidth>
                <Typography variant="h6">Band Gemstone Type</Typography>
                <Select defaultValue="" variant="outlined">
                  {items?.gemstonesUserSelected?.map((item, index) => {
                    const shape = data?.accentStoneTypes?.find(
                      (shape) => shape?.id === item
                    );
                    return (
                      <MenuItem key={index} value={shape?.name}>
                        {shape?.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => showContent(1)}
              >
                BACK
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => showContent(3)}
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

export default Tab2Content;
