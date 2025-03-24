import { TextField, Button, Box, Typography } from "@mui/material";
import {  Grid } from "@mui/system";
const ContactUsSection = () =>{

    return(

        <Grid
        container
        sx={{
          width: "100%",
          height: {lg:"85vh"},
        //   backgroundImage: `url(/introSectionBackground.png)`,
        //   backgroundSize: {sm:'cover',lg:"100% 80vh"},
          // backgroundPosition: "center",
          // mt: { xs: 2 },
        //   backgroundRepeat: "no-repeat",
        bgcolor:"#303231",
          px: { sm: 5 },pt:3,pb:{xs:3,lg:5}
        }}
        spacing={0}
      >
        <Grid size={{ xs: 12}} sx={{my:0}}>
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
                width: {xs:"130px",sm:'260px',md:"230px"},
                // borderBottom: "3px solid #ceb03e",
                my:0
              }}
            >
              Contact Us
            </Typography>
            </Box>
            </Grid>
        <Grid container size={{ xs: 11 }} sx={{px:{xs:3,sm:5,md:7},py:{xs:5} , borderRadius:4, border:'1px solid gray',mt:2,mx:'auto'}}>
        <Grid  size={{ sm: 12, lg: 6 }} sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{ flex: 1, maxWidth: {xs:'100%',sm:"100%",md:'80%'} }}>
        <TextField
          fullWidth
          variant="standard"
          label="Your Name"
          InputLabelProps={{ sx: { color: "#ccc" } }}
          sx={{
            mb: 2,
            input: { color: "#fff" },
            "& .MuiInput-underline:before": { borderBottomColor: "#666" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#ffd700" },
            "& .MuiInput-underline:after": { borderBottomColor: "#ffd700" },
          }}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Email Address"
          InputLabelProps={{ sx: { color: "#ccc" } }}
          sx={{
            mb: 2,
            input: { color: "#fff" },
            "& .MuiInput-underline:before": { borderBottomColor: "#666" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#ffd700" },
            "& .MuiInput-underline:after": { borderBottomColor: "#ffd700" },
          }}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Message"
          rows={3}
          InputLabelProps={{ sx: { color: "#ccc" } }}
          sx={{
            mb: 3,
            input: { color: "#fff" },
            "& .MuiInput-underline:before": { borderBottomColor: "#666" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#ffd700" },
            "& .MuiInput-underline:after": { borderBottomColor: "#ffd700" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#d4af37",
            color: "white",
            textTransform: "none",
            borderRadius: "6px",
            "&:hover": { bgcolor: "#c9a12f" },
          }}
        >
          Submit
        </Button>
      </Box>

          </Grid>
          
          <Grid size={{ sm: 12, lg: 6 }} sx={{ px: { xs: 0, sm: 8 },display:'flex',justifyContent:'center' }}>
        <Box
          component="img"
          sx={{ width: {md:'60%',xs:'100%',sm:'80%'}, ml: {md:10},mt:{xs:5,md:0} }}
          src="contactFormSideImage.png"
          p={2}
        />
      </Grid>
        </Grid>
  
       
      </Grid>
    );
}

export default ContactUsSection;