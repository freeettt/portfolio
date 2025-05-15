import { Box, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const StepsToDream = () => {
   const steps = [
      {
         title: "Освоїти сучасні технології",
         description:
            "Глибоко вивчити TypeScript, React, Node.js та Next.js.",
         icon: <SchoolIcon sx={{ fontSize: 36, color: "#fff" }} />,
         bg: "#fb8c00", // насичений помаранчевий
      },
      {
         title: "Стажування або робота в IT-компанії",
         description:
            "Набути практичного досвіду в реальних проєктах.",
         icon: <WorkIcon sx={{ fontSize: 36, color: "#fff" }} />,
         bg: "#ffb74d", // світло-помаранчевий
      },
      {
         title: "Стати професіоналом та надихати інших",
         description:
            "Працювати в міжнародній компанії або створити власний продукт.",
         icon: <RocketLaunchIcon sx={{ fontSize: 36, color: "#fff" }} />,
         bg: "#fb8c00", // той самий яскравий для завершення
      },
   ];

   return (
      <Box
         sx={{
            py: 6,
            px: 3,
            background: "#fcefdc",
         }}
      >
         <Typography
            variant="h4"
            align="center"
            sx={{
               fontWeight: "bold",
               color: "#e65100", 
               mb: 5,
            }}
         >
            📈 3 кроки до мрії
         </Typography>

         <Grid container spacing={4} justifyContent="center">
            {steps.map((step, i) => (
               <Grid item xs={12} md={4} key={i}>
                  <Box
                     sx={{
                        background: "#fff",
                        borderRadius: 4,
                        p: 4,
                        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                        textAlign: "center",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                           transform: "translateY(-5px)",
                        },
                     }}
                  >
                     <Box
                        sx={{
                           width: 64,
                           height: 64,
                           borderRadius: "50%",
                           mx: "auto",
                           mb: 2,
                           backgroundColor: step.bg,
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                     >
                        {step.icon}
                     </Box>
                     <Typography
                        variant="subtitle1"
                        sx={{
                           fontWeight: "bold",
                           color: "#4e342e",
                           mb: 1,
                        }}
                     >
                        {`${i + 1}. ${step.title}`}
                     </Typography>
                     <Typography variant="body2" sx={{ color: "#5d4037" }}>
                        {step.description}
                     </Typography>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default StepsToDream;
