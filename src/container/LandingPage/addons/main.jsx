import { Box, Button, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
import TopMostSection from "./TopMostSection";
import WinnerSection from "./WinnersSection";
import AboutUs from "./AboutUs";
import GiveAwaySection from "./GiveAwaySection";
import ContactUsSection from "./ContactUsSection";
import IntroSection from "./IntroSection";
import FooterSection from "./FooterSection";

const MainPortion = () => {
  return (
   
      <Grid container sx={{ width: "100%" }}>
        <TopMostSection />
        <IntroSection/>
        <WinnerSection/>
        <AboutUs/>
        <GiveAwaySection/>
        <ContactUsSection/>
        <FooterSection/>
      </Grid>
  );
};

export default MainPortion;
