import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const winners = [
  {
    name: "Mark Henry",
    image: "https://source.unsplash.com/400x300/?portrait",
    prize: "iPhone 13 Mini",
  },
  {
    name: "Mark Henry",
    image: "https://source.unsplash.com/400x300/?man",
    prize: "iPhone 13 Mini",
  },
  {
    name: "Mark Henry",
    image: "https://source.unsplash.com/400x300/?face",
    prize: "iPhone 13 Mini",
  },
];

const CustomCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ width: { xs: "100%" }, margin: "auto", py: 5 }}>
      <Slider {...settings}>
        {[1, 2, 3,4,5].map((_, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Card
              sx={{
                width: { xs: 280, md: 350 },
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
              <Box
                component={"img"}
                src="/hitman3.jfif"
                sx={{ width: "100%", height: "250px" }}
              />

              {/* Content */}
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
