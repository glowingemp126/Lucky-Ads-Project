import { Box, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/system";
const FooterSection = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: { lg: "54vh" },
        backgroundImage: `url(/footerBackground.png)`,
        backgroundSize: { xs: "cover", lg: "100% 54vh" },
        // backgroundPosition: "center",
        // margin:0,
        // mt: { xs:  },
        pt: 0,
        backgroundRepeat: "no-repeat",
        px: { xs:3,md: 5 },
      }}
      spacing={0}
    >
      <Grid size={{ xs: 12, md:10,lg: 5 }} sx={{  mt: 0}}>
        <Box
          component={"img"}
          src="logo_single.png"
          sx={{ width: {xs:'90px',sm:"120px"}, height: {xs:'100px',sm:"130px"}, display: "block" }}
        />
        <Typography variant="h5" sx={{ fontSize: { xs:'16px',sm: "20px" },my:3,width:{xs:'90%',lg:'77%'}, color:'white' }}>
          Lucky Ads is a free-to-play platform where you can win exciting prizes
          with every click! Simply engage with ads, and you’ll have the chance
          to unlock rewards like gift cards, discounts, and even high-end
          prizes.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            component={"img"}
            src="Group 1686552450.png"
            sx={{
              width: "34px",
              height: "34px",
              display: "block",
              borderRadius: "100%",
            }}
          />
          <Box
            component={"img"}
            src="Group 1686552451.png"
            sx={{
              width: "34px",
              height: "34px",
              display: "block",
              borderRadius: "100%",
            }}
          />
          <Box
            component={"img"}
            src="Group 1686552452.png"
            sx={{
              width: "34px",
              height: "34px",
              display: "block",
              borderRadius: "100%",
            }}
          />
          <Box
            component={"img"}
            src="Group 1686552459.png"
            sx={{
              width: "34px",
              height: "34px",
              display: "block",
              borderRadius: "100%",
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs:12, sm: 4, lg: 2 }} sx={{mt:{xs:3,lg:0}}}>
      <Stack
          spacing={{ xs: 2 }}
          sx={{
            padding: { xs: 1, md:5 , lg: 7 },
            ml:{lg:5},
            color: 'white'
            
          }}
        >
            <Typography variant="body1" sx={{fontSize:'16px',fontWeight:'bold'}}>
                        Lucky Ads
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Introduction
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        FAQ's
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Contact Us
            </Typography>

        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm:4,lg: 2 }} sx={{mt:{xs:3,lg:0}}}>
      <Stack
          spacing={{ xs: 2 }}
          sx={{
            padding: { xs: 1, md:5 , lg: 7 },
            ml:{lg:5},
            color:'white'
           
          }}
        >
            <Typography variant="body1" sx={{fontSize:'16px',fontWeight:'bold'}}>
                        Legal
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px',minWidth:'143px'}}>
                        Terms and Condition
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Privacy Policy
            </Typography>
            

        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm:4,lg: 3 }} sx={{mt:{xs:3,lg:0}}}>
      <Stack
          spacing={{ xs: 2 }}
          sx={{
            padding: { xs: 1, md:5 , lg: 7 },
            ml:{lg:5},
            color:'white'
          }}
        >
            <Typography variant="body1" sx={{fontSize:'16px',fontWeight:'bold'}}>
                        Contact Us
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Facebook
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Instagram
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        LinkedIn 
            </Typography>
            <Typography variant="body1" sx={{fontSize:'15px'}}>
                        Twitter 
            </Typography>

        </Stack>
      </Grid>
      {/* © 2025 All rights reserved. */}
      <Grid size={{ xs:12, sm: 4, lg: 2 }} sx={{mt:{xs:2},mb:4}}>
      <Typography variant="body1" sx={{fontSize:'15px',mt:2,color:'white'}}>
      © 2025 All rights reserved. 
            </Typography>
      </Grid>
    
    </Grid>
  );
};

export default FooterSection;
