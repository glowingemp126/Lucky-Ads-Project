import { Box, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";

const AboutUs = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        // height: {lg:"80vh"},
        backgroundImage: `url(/AboutUsBackGround.png)`,
        backgroundSize: { xs: "cover" },
        // backgroundPosition: "center",
        // mt: { xs: 2 },
        backgroundRepeat: "no-repeat",
        px: { sm: 5 },
      }}
    >
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs: 1 }}
          sx={{ px: { xs: 2, sm: 6, lg: 7 }, py: { xs: 3, lg: 5 }, mt: {} }}
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
              fontWeight: "500",
              fontFamily:'Rosarivo',
              color: "#ceb03e",
              lineHeight: 1.5,
              py: 1,
              width: { xs: "130px", sm: "260px", md: "240px" },
              // borderBottom: "3px solid #ceb03e",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "22px" },
              letterSpacing: 1,
              lineHeight: 2,
              fontWeight: "600",
              color: "#ceb03e",
              pt:1
            }}
          >
            Who We Are:
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
            At Lucky Ads, we’re passionate about creating a fun, engaging, and
            rewarding experience for everyone. Our platform offers users the
            chance to unlock amazing prizes with every click, from exclusive
            discounts to in-app rewards. We believe that everyone deserves a
            little luck, and we’re here to make that happen—without the need for
            purchases or complex steps.
          </Typography>
        </Stack>
      </Grid>

      <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 5, sm: 8 }, position:'relative' }}>
        <Box
          component="img"
          sx={{
            width: { xs: "75%", md: "50%", sm: "75%", lg: "80%" },
            mt: 15,
            ml: { md: 10 },
            px:4,
            position:{xs:'relative',md:'static'},
            bottom:90
          }}
          src="AboutUs1.png"
          // p={2}
        />
      </Grid>
      <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 5, sm: 8 }, position:'relative'  }}>
        <Box
          component="img"
          sx={{
            width: { xs: "80%", md: "50%", sm: "75%", lg: "80%" },
            mt: 0,
            ml: { md: 10 },
          }}
          src="AboutUs2.png"
          p={2}
        />
      </Grid>
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs: 1 }}
          sx={{
            px: { xs: 2, sm: 6, lg: 7 },
            py: { xs: 3, lg: 5 },
            mt: { xs:5,md: 15 },
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
            Our Mission:
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
            Our mission is to bring excitement and joy to every user. Whether
            you're a casual player or a dedicated fan, Lucky Ads is designed to
            make every click feel like a chance to win something incredible. We
            want to create a community where rewards are just a click away, and
            everyone gets the thrill of winning.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
