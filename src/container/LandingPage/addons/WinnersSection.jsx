import { Typography } from "@mui/material";
import WinnerCard from "./Card";
import {Box, Grid } from "@mui/system";
import CustomCarousel from "./CardsCarousal";
const WinnerSection = () =>{

    return(
        
        <Grid
        container
        sx={{
          width: "100%",
          height: {lg:"80vh"},
          backgroundImage: `url(/winnersSectionBackGround.png)`,
          backgroundSize: {sm:'cover',lg:"100% 80vh"},
          // backgroundPosition: "center",
          // mt: { xs: 2 },
          backgroundRepeat: "no-repeat",
          px: { sm: 5 },
        }}
      >
        <Grid size={{ xs: 12}}>
         
         <Box sx={{px: { xs:2,sm: 6, lg: 7 }}}>
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
              fontFamily:'Rosarivo',
                color: "#ceb03e",
                lineHeight: 1.5,
                
                py: 1,
                width: {xs:"130px",sm:'260px',md:"330px"},
                // borderBottom: "3px solid #ceb03e",
              }}
            >
              Recent Winner's
            </Typography>
            </Box>
          
        </Grid>
        <Grid
        container
        sx={{
          width: "100%",
          //
          px: { sm: 3 },
        }}
      >
        {/* {[1,2,3].map(()=><Grid size={{ sm: 12, lg: 4 }} sx={{ px: { xs: 5, sm: 8 } }}>
         <WinnerCard/>
        </Grid>)}  */}
        <CustomCarousel/>
        </Grid>
      </Grid>
    );
}

export default WinnerSection;