import {
   Box,
   Typography,
   Button,
   Grid,
   Card,
   CardContent,
   CardActions,
   Divider,
} from "@mui/material";
import { styled } from "@mui/system"; // Для стилізації через styled API

const projects = {
   htmlCss: [
      {
         title: "Інтернет магазин",
         url: "https://github.com/veneracode/layout_landing-page.git",
      },
   ],
   javascript: [
      {
         title: "Календар",
         url: "https://github.com/veneracode/layout_calendar.git",
      },
   ],
   react: [
      {
         title: "Add Books",
         url: "https://github.com/veneracode/react_movies-list-add-form.git",
      },
      {
         title: "Goods Selector",
         url: "https://github.com/veneracode/react_goods-selector-js.git",
      },
   ],
};

const StyledCard = styled(Card)(({ theme }) => ({
   width: 300,
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-between",
   minHeight: 100,
   background: "linear-gradient(135deg, #ff9800, #ffb74d)",
   color: "white",
   borderRadius: 16,
   boxShadow: "0 4px 20px rgba(255, 112, 67, 0.3)",
   transition: "transform 0.3s ease, box-shadow 0.3s ease",
   "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 25px rgba(255, 112, 67, 0.5)",
   },
}));

const AboutMe = () => {
   return (
      <div>
         <Box sx={{ px: 4, py: 6, background: "#fff3e0", borderRadius: 4 }}>
            <Typography
               variant="h4"
               gutterBottom
               sx={{ color: "#e65100", fontWeight: 700, textAlign: "center" }}
            >
               Про мене
            </Typography>
            <Typography
               variant="body1"
               sx={{ color: "#bf360c", textAlign: "center", fontSize: "1.2rem" }}
            >
               Привіт! Мене звати Іван. Я — фронтенд-розробник, який любить створювати зручні та інтуїтивно зрозумілі інтерфейси.
               Моя мета — поєднувати дизайн, технології та досвід користувача для створення найкращих продуктів.
            </Typography>
            <Typography
               variant="body1"
               sx={{
                  color: "#bf360c",
                  mt: 2,
                  textAlign: "center",
                  fontSize: "1.1rem",
               }}
            >
               🎯 Мені близькі такі цінності як чесність, відкритість і командна робота. Приділяю велику увагу якості коду та продуманій архітектурі.
            </Typography>
            <Typography
               variant="body1"
               sx={{
                  color: "#bf360c",
                  mt: 2,
                  textAlign: "center",
                  fontSize: "1.1rem",
               }}
            >
               📚 Навчаюсь за спеціальністю "Комп'ютерні науки", вдосконалюю знання JavaScript, TypeScript, React та інших технологій.
            </Typography>

            <Typography
               variant="h5"
               sx={{
                  mt: 6,
                  mb: 2,
                  color: "#e65100",
                  textAlign: "center",
                  fontWeight: 700,
               }}
            >
               Мої проєкти
            </Typography>

            <Divider sx={{ my: 4, backgroundColor: "#e65100", height: 2 }} />

            {Object.entries(projects).map(([category, repos]) => (
               <Box key={category} sx={{ mt: 4 }}>
                  <Typography
                     variant="h6"
                     gutterBottom
                     sx={{ color: "#e65100", textAlign: "center", fontWeight: 600 }}
                  >
                     {category === "htmlCss"
                        ? "HTML + CSS"
                        : category === "javascript"
                        ? "JavaScript"
                        : "React + TypeScript/JavaSript"}
                  </Typography>

                  <Grid container spacing={2} justifyContent="center">
                     {repos.map((repo, index) => (
                        <Grid item xs={12} md={4} key={index}>
                           <StyledCard>
                              <CardContent sx={{ flexGrow: 1 }}>
                                 <Typography variant="h6">{repo.title}</Typography>
                              </CardContent>
                              <CardActions sx={{ justifyContent: "center" }}>
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                       borderRadius: 20,
                                       fontWeight: 600,
                                       textTransform: "none",
                                        backgroundColor: "#e65100"
                                    }}
                                 >
                                    GitHub
                                 </Button>
                              </CardActions>
                           </StyledCard>
                        </Grid>
                     ))}
                  </Grid>
               </Box>
            ))}
         </Box>
      </div>
   );
};

export default AboutMe;
