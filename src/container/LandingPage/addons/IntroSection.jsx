import { Box, Typography } from "@mui/material";
import {  Grid, Stack } from "@mui/system";

const IntroSection = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: {lg:"80vh"},
        backgroundImage: `url(/introSectionBackground.png)`,
        backgroundSize: {sm:'cover',lg:"100% 80vh"},
        // backgroundPosition: "center",
        // mt: { xs: 2 },
        backgroundRepeat: "no-repeat",
        px: { sm: 5 },
      }}
    >
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs:1.5 }}
          sx={{ px: { xs:2,sm: 6, lg: 7 },py:{xs:3,lg:5}, mt: {} }}
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
                md: "55px",
                sm: "40px",
                xs: "20px",
              },
              
              color: "#ceb03e",
              fontWeight: "500",
              fontFamily:'Rosarivo',
              lineHeight: 1.5,
              py: 1,
              width: {xs:"130px",sm:'260px',md:"300px"},
              // borderBottom: "3px solid #ceb03e",
            }}
          >
            Introduction
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "13px", sm: "16px", md: "22px" },
              letterSpacing: 1,
              lineHeight: 1.5,
              color: "white",
              pt:1
            }}
          >
            Welcome to <Box component={'span'} sx={{color:'#ceb03e'}}>Lucky Ads</Box> – Your Gateway to <Box component={'span'} sx={{color:'#ceb03e'}}>Exciting</Box> Rewards!
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
            At Lucky Ads, we’re all about making your experience rewarding and
            fun. With just a click, you can unlock incredible prizes like
            exclusive discounts, gift cards, in-app currency, and more! It's
            fast, easy, and completely free – no purchases or complicated steps
            required. Whether you're looking for daily bonuses or just a bit of
            luck, every click brings you closer to winning something great. Join
            our community today and start earning rewards with every click!
          </Typography>
        </Stack>
      </Grid>

      <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 5, sm: 8 } }}>
        <Box
          component="img"
          sx={{ width: {xs:'75%',md:'50%',sm:"75%",lg:'75%'}, mt: 0, ml: {md:10} }}
          src="Discount-cuate 1.png"
          p={2}
        />
      </Grid>
    </Grid>
  );
};

export default IntroSection;
