import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
   return (
      <Box
         component="footer"
         sx={{
            py: 6,
            px: 2,
            mt: "auto",
            backgroundColor: "#ffb74d", 
            color: "#fff",
         }}
      >
         <Container maxWidth="lg">
            <Grid container spacing={4}>

               <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                     📬 Контакти
                  </Typography>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     Зв'язатися зі мною
                  </Link>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     Підтримка
                  </Link>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     LinkedIn / GitHub
                  </Link>
               </Grid>

               <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                     ⚡ Швидкі посилання
                  </Typography>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     Мої проєкти
                  </Link>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     Портфоліо
                  </Link>
                  <Link href="#" underline="hover" sx={{ display: "block", color: "#fff" }}>
                     Відгуки
                  </Link>
               </Grid>
            </Grid>

            <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.3)" }} />

            <Typography
               variant="body2"
               align="center"
               sx={{ color: "rgba(255,255,255,0.7)" }}
            >
               © {new Date().getFullYear()}. Усі права захищені.
            </Typography>
         </Container>
      </Box>
   );
};

export default Footer;
