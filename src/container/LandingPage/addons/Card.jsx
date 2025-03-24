import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Chip } from "@mui/material";

const WinnerCard = () => {
  return (
    <Card
      sx={{
        width: 350, 
        borderRadius: 3, 
        bgcolor: "#1E1E1E", 
        color: "#fff",
        boxShadow: 3,
      }}
    >
      {/* Image */}
      {/* <CardMedia
        component="img"
        width={'100%'}
        height='300px'
        // height="140"
        image="/Feeling Sick.png" // Replace with your actual image
        alt="Winner"
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      /> */}
      <Box component={'img'} src="/hitman3.jfif" sx={{width:'100%',height:'250px'}}/>

      {/* Content */}
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            Mark Henry
          </Typography>
          <Typography variant="body2" color="gray">
            Winner
          </Typography>
        </Box>

        {/* Prize Badge */}
        <Chip
          label="iPhone 13 Mini"
          sx={{
            bgcolor: "#A1925D",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: 1,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default WinnerCard;