import { Box, Button, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
import FAQSection from "./FAQ's Section";

const GiveAwaySection = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: { lg: "180vh" },
        backgroundImage: `url(/FAQSectionBackground.png)`,
        backgroundSize: { xs: "cover", lg: "100% 180vh" },
        // backgroundPosition: "center",
        // mt: { xs: 2 },
        backgroundRepeat: "no-repeat",
        px: { sm: 5 },
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Box sx={{ px: { xs: 2, sm: 6, lg: 7 } }}>
          <Typography
            variant="h1"
            sx={{
              position:'relative',
              "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",height: "3px", backgroundImage: "linear-gradient(to right, #ceb03e,rgb(215, 218, 212))"},
              fontSize: {
                md: "50px",
                sm: "40px",
                xs: "20px",
              },
              fontWeight: "500",
              fontFamily: "Rosarivo",
              color: "#ceb03e",
              lineHeight: 1.5,

              py: 1,
              width: { xs: "130px", sm: "220px", md: "260px" },
            
            }}
          >
            Give Away
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 5 } }}>
        <Box
          component="img"
          sx={{ width: { xs: "75%", md: "50%", sm: "75%", lg: "77%" }, mt: 0 }}
          src="Frame 2147226377.png"
          p={2}
        />
      </Grid>
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs: 1 }}
          sx={{
            px: { xs: 2, sm: 6, lg: 7 },
            py: { xs: 3, lg: 5 },
            mt: { xs: 4 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "13px", sm: "20px", md: "22px" },
              letterSpacing: 1,
              lineHeight: 2,
              fontWeight: "600",
              color: "#ceb03e",
            }}
          >
            Give Away
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "18px" },
              letterSpacing: 1,
              lineHeight: 2,
              color: "white",
            }}
          >
            You’ve just unlocked an amazing prize! With your luck and
            participation, you've won something special – it could be an iPhone
            14 Pro, exclusive gift cards, or exciting in-app rewards. The fun
            doesn’t stop here, though – every click brings new opportunities to
            win. Ready to try your luck again and see what you can claim next?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "19px" },
              letterSpacing: 1,
              lineHeight: 2,
              color: "white",
            }}
          >
            Click below to keep playing and unlock even more rewards!
          </Typography>
          <Button
            variant="contained"
            sx={{
              px: 2,
              textTransform: "none",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              width: { xs: "110px", sm: "120px", md: "140px" },
              bgcolor: "white",
              fontWeight: "600",
              color: "black",
              py: 0.9,
            }}
          >
            Let's Play
          </Button>
        </Stack>
      </Grid>
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            px: { xs: 2, sm: 6, lg: 7 },
            py: { xs: 3, lg: 5 },
            mt: { xs: 5 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position:'relative',
              "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",height: "3px", backgroundImage: "linear-gradient(to right, #ceb03e,rgb(215, 218, 212))"},
              fontSize: {
                md: "50px",
                sm: "40px",
                xs: "26px",
              },
              fontWeight: "500",
              fontFamily: "Rosarivo",
              color: "#ceb03e",
              lineHeight: 1.5,
              py: 1,
              minWidth: "300px",
              width: { xs: "300px", sm: "455px", md: "570px" },
              // borderBottom: "3px solid #ceb03e",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <FAQSection />
        </Stack>
      </Grid>

      <Grid
        size={{ sm: 12, lg: 6 }}
        sx={{ px: { xs: 5, sm: 8 }, position: "relative" }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "75%", md: "50%", sm: "75%", lg: "80%" },
            mt: 15,
            ml: { md: 10 },
            position: { xs: "relative", md: "static" },
            bottom: 90,
          }}
          src="Group 1171279741.png"
          p={2}
        />
      </Grid>
    </Grid>
  );
};

export default GiveAwaySection;
