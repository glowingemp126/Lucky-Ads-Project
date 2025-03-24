import { Box } from "@mui/material";
import Navbar from "../../components/NavBar";
import MainPortion from "./addons/main";

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: "#282b30" }}>
      <Box sx={{position:'relative' }}>
      <Navbar />
      </Box>
        <Box sx={{ width: "100%" }}>
          <MainPortion />
        </Box>
    </Box>
  );
};

export default LandingPage;
