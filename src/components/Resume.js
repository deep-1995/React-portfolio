import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Work Experiences
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Electronic Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Sofcon Company
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Displayed expertise in handling embedded system programming and
            practical electronics as well as in utilizing computers in operating
            equipment Conducted server testing process to ensure efficiency of
            operation, configuration, and remote management Provided first-rate
            support to team in overseeing all areas of plant, while maintaining
            and monitoring the current and voltage reading through ammeter and
            voltmeter Handled the operation, installation, troubleshooting and
            maintenance
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Electronic and Communication Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Telcocrats PVT. LTD
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Demonstrated broad knowledge of using various electrical and
            engineer tools and software, such MapInfo, mobile communications
            network application (MCOM), ATOLL, OMT, and RL Tool Performed
            outdoor services for setting up new antennas Contributed key
            insights in the attainment of overall systems with network
            efficiency with organized group of individuals with tight deadlines
            Oversaw the development and management of long- and short-term
            projects based on individual priorities Also work on RL coding amd
            troubleshooting them
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Trainer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Apple Inc.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Take charge of assembling work stations including hardware and
            software services, such as GSX and Apple connect Proactively
            interacted with users and customers to communicate technical terms
            Resolved network operating failure and interruptions by
            troubleshooting hardware and software
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Electronic and Communication Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Comsonic inc
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Working on RF amplifiers and troubleshooting them. Checking signals
            of each unit and also doing SNR tests too. Handled the operation,
            installation, troubleshooting and maintenance of different
            electrical equipment, including router, direct current/alternating
            current (DC/AC) motor, resistance, capacitor, and microcontroller
            integrated circuit (IC) for both computer and printer circuit board
            (PCB)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
