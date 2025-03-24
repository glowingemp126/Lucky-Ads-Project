import { Box, Button, Typography } from "@mui/material";
import { color, Grid, Stack } from "@mui/system";

const TopMostSection = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: { lg: "100vh" },
        backgroundImage: `url(/MacBook1.png)`,
        backgroundSize: { xs: "cover", lg: "100% 100vh" },
        // backgroundPosition: "center",
        mt: { xs: 2 },
        backgroundRepeat: "no-repeat",
        px: { sm: 5 },
      }}
    >
      <Grid size={{ sm: 12, lg: 6 }}>
        <Stack
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            padding: { xs: 5, sm: 6, lg: 7 },
            mt: { xs: "75px", sm: "80px", md: "140px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                lg: "55px",
                md: "40px",
                sm: "27px",
                xs: "23px",
              },
              fontWeight: "bold",
              color: "#FFFFFF",
              lineHeight: 1.5,
            }}
          >
            Unlock Amazing{" "}
            <Box component={"span"} sx={{ color: "#ceb03e" }}>
              Rewards
            </Box>{" "}
            with{" "}
            <Box component={"span"} sx={{ color: "#ceb03e" }}>
              Every
            </Box>{" "}
            Click
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
              color: "white",
            }}
          >
            Sign up now to get started and start unlocking your rewards with
            every click. Don’t miss out – amazing prizes are just a click away!
          </Typography>
          <Button
            variant="contained"
            sx={{
              px: 2,
              textTransform: "none",
              fontSize: {xs:'12px',sm:'14px',md:"16px"},
              width: {xs:'110px',sm:'120px',md:"140px"},
              bgcolor: "white",
              fontWeight: "600",
              color: "black",
              py: 0.9,
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Grid>

      <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 5, md: 10, sm: 8 },position:'relative' }}>
        <Box
          component="img"
          sx={{ width: { xs: "75%",md:'65%', lg: "80%" }, mx: { md: "auto", lg: 0 },position:{xs:'relative',lg:'static'},bottom:{xs:60,md:70}, left:{xs:15,md:35} }}
          src="Group 6.png"
          p={2}
        />
      </Grid>
    </Grid>
  );
};

export default TopMostSection;
