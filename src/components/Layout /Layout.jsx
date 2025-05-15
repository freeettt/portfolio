import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
   return (
      <>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               minHeight: "100vh",
            }}
         >
            <Header />
            <Box sx={{ flexGrow: 1 }}>
               <main>
                  <Outlet />
               </main>
            </Box>
            <Footer />
         </Box>
      </>
   );
};

export default Layout;
