import { Box, Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { fetchWeather } from "../api/fetchWeather";

const MyCity = () => {
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const loadWeatherData = async () => {
         setLoading(true);
         const data = await fetchWeather("Nizhyn");
         setTimeout(
            () => {
               setWeather(data);
               setLoading(false);
            },
            1,
            500
         );
      };
      loadWeatherData();
   }, []);

return (
   <Box
      sx={{
         py: 5,
         px: 2,
         minHeight: "100vh",
          background: "#fcefdc"
      }}
      
   >
      <Typography
         variant="h4"
         align="center"
         gutterBottom
         sx={{ fontWeight: "bold", color: "#e65100" }} // насичений оранжевий
      >
         Бердянськ - це там, де я народився
      </Typography>

      <Grid container spacing={4} justifyContent="center">
         <Grid item xs={12} md={6}>
            <Card
               sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "linear-gradient(135deg, #ff9800, #ffb74d)", // оранжевий градієнт
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(255, 152, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                     transform: "scale(1.03)",
                     boxShadow: "0 6px 25px rgba(255, 152, 0, 0.5)",
                  },
               }}
            >
               <CardContent>
                  <Typography variant="h6" gutterBottom>
                     📍 Про місто
                  </Typography>
                  <Typography variant="body1">
                     Бердянськ — місто на південному сході Запорізької області України, розташоване на узбережжі Азовського моря. Є адміністративним центром Бердянського району та Бердянської міської громади.
               </CardContent>
            </Card>
         </Grid>

         {/* Погода */}
         <Grid item xs={12} md={4}>
            <Paper
               elevation={3}
               sx={{
                  p: 3,
                  textAlign: "center",
                  background: "linear-gradient(135deg, #ffb74d, #ffe082)", // світліші тони оранжевого
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(255, 152, 0, 0.3)",
               }}
            >
               <LocationOnIcon sx={{ fontSize: 40 }} />

               {loading ? (
                  <Box sx={{ mt: 2 }}>
                     <Typography variant="body1" gutterBottom>
                        Завантаження погоди...
                     </Typography>
                     <CircularProgress color="inherit" />
                  </Box>
               ) : weather && weather.current ? (
                  <>
                     <Typography variant="h6" gutterBottom>
                        {`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}
                     </Typography>
                     <img
                        src={weather.current.condition.icon}
                        alt="weather-icon"
                     />
                     <Typography variant="h4">
                        {weather.current.temp_c}°C
                     </Typography>
                     <Typography variant="subtitle1">
                        {weather.current.condition.text}
                     </Typography>
                     <Typography variant="subtitle1">Кординати</Typography>
                     <div
                        className="cord-wrapper"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "space-evenly",
                        }}
                     >
                        <Typography variant="subtitle1">
                           {weather.location.lat}
                        </Typography>
                        <Typography variant="subtitle1">
                           {weather.location.lon}
                        </Typography>
                     </div>
                  </>
               ) : (
                  <Typography variant="body1" color="error">
                     Не вдалося завантажити погоду.
                  </Typography>
               )}
            </Paper>
         </Grid>
      </Grid>
   </Box>
);
};

export default MyCity;
