import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: `The [Guesses Remaining] countdown only goes down if you guess the wrong letter -- check to see the wrong guesses you already made at the bottom to narrow down your choices Tools/Languages Used: -- Javascript -- HTML`,
    image: project1,
    demo: "https://deep-1995.github.io/word-guess-game/",
  },
  {
    name: "Project 2",
    description: `Its weather forcasting app which display weather of current day as well as weather of next 5 days too.This app also define temperature,humidity and wind speed parameters.`,
    image: project2,
    demo: "https://deep-1995.github.io/weather-prediction/",
  },
  {
    name: "Project 3",
    description: `A web app that located parks, trails, outdoor spaces, and provides information about them.

    1 link search bar to park API
    
    2 link response to map
    
    3 add icon based on location
    
    parksapikey: DXHf7mtBPyQrZjhVR5gVEtXyCTzLkMyJ5UOYauui`,
    image: project3,
    demo: "https://deep-1995.github.io/park-locator/",
  },
  {
    name: "Project 4",
    description: `Food Lover is a developing application/tool to help people with a limited amount of time make meals easily based on ingredients they already have in their kitchen .they can also add recipes, share recipes with friends and add friends too.`,
    image: project4,
    demo: "https://food-lover-tarabh.herokuapp.com/signin",
  },
  {
    name: "Project 5",
    description: `react app  `,
    image: project5,
    demo: "https://tarabh-employees.herokuapp.com/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={project.demo}>Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
