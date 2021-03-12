import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import image1 from "./image1.jpg";
import Box from "@material-ui/core/Box";
//import Card from '@material-ui/core/Card';
//import PerfectScrollbar from 'react-perfect-scrollbar'
import image3 from "./image3.jpeg";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import ScrollPage from '@material-ui/core';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from "@material-ui/core/TextField";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundImage: "#ffff",
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 1100,
  },
  media: {
    height: "80%",
    backgroundImage: `url(${image1})`,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 3,
    boxShadow: "1px 1px 1px #9E9E9E",
  },

  hide: {
    display: "none",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    justifyItems: "space-around",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  large: {
    height: 100,
    width: 100,
    position: "flex",
    justify: "center",
    marginLeft: 80,
    marginTop: 10,
  },
  input: {
    display: "none",
  },
  grid: {
    marginLeft: 20,
    marginTop: -2,

    padding: 10,
  },
  paper: {
    marginLeft: 30,
    marginRight: 10,
    width: "109%",
    borderRadius: 3,
    height: 250,
    marginBottom: 2,
    marginTop: -2,
    backgroundColor: "#eaeaf0",
    backgroundImage: `url(${image1})`,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundImage:
            "linear-gradient( 95deg,rgb(0,0,70) 0%,rgb(21,153,87) 100%)",
        }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton style={{ color: "#ffff", marginRight: 40 }}>
            <SettingsIcon />
          </IconButton>
          <IconButton style={{ color: "#ffff" }}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Typography>Home</Typography>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <Typography>Messages</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LaptopChromebookIcon />
            </ListItemIcon>
            <Typography>Cours</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <Typography>Vous Groupes</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Typography>Paramètres</Typography>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Grid container  xs={12}>
          <Grid
            xs={3}
            alignItems="center"
            justify="center"
            style={{
              backgroundColor: "#eaeaf0",
              borderRadius: 3,
              boxShadow: "1px 1px 1px #9E9E9E",
              justifyItem: "center",
              height: "80%",
              padding: 20,
            }}
          >
            <Avatar alt="Remy Sharp" src={image3} className={classes.large} />
            <Typography style={{ marginLeft: 70, fontWeight: "600" }}>
              {" "}
              Jenna Smith
            </Typography>
            <Typography>
              {" "}
              <span style={{ fontWeight: 600, marginLeft: 70 }}>
                {" "}
                200{" "}
              </span>{" "}
              followers{" "}
            </Typography>
            <Divider />
            <Button
              style={{
                backgroundImage:
                  "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
                color: "#ffff",
                marginTop: 20,
                marginButtom: 10,
                marginRight: 20,
                marginLeft: 20,
                boxShadow: "1px 1px 1px #9E9E9E",
              }}
            >
              S'abonner
            </Button>
            <Button
              style={{
                backgroundImage:
                  "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
                color: "#ffff",
                marginTop: 20,
                marginButtom: 50,
                boxShadow: "1px 1px 1px #9E9E9E",
              }}
            >
              Contacter
            </Button>

            <Typography style={{ marginTop: 20 }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Nom: </span>Jenna
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              <span style={{ fontWeight: 600 }}> Prénom : </span> Smith
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Département:</span>{" "}
              Informatique
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Spécialité:</span> ISI
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Niveau d'étude: </span> Master2
            </Typography>
          </Grid>

          <Grid xs={8}>
            <Grid >
              <Box>
                <Paper className={classes.paper} direction="row" display="flex">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      style={{ marginLeft: 380, marginTop: 90 }}
                    >
                      <PhotoCamera/>
                    </IconButton>
                  </label>
                </Paper>
              </Box>
            </Grid>

            <Grid
              xs={8}
              style={{
                backgroundColor: "#eaeaf0",
                height: "46vh",
                marginTop: 10,
                marginLeft:30,
                marginRight:0,
                width: "80%",
                overflowY: "scroll",
              }}
            >
                             <div>
                  <CardMedia
                    style={{ height: "46vh" }}
                    className={classes.media}
                    title="Skyskaraper"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      What a great view !!
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Character cannot be developed in ease and quiet. Only
                      through experience of trial and suffering can the soul be
                      strengthened, ambition inspired, and success achieved.
                    </Typography>
                  </CardContent>
                  
                </div>
               
            </Grid>
            
            <div>
            
            <TextField
              id="outlined-basic"
              label="biographie"
              variant="outlined"
            />
         
        </div>
            
          </Grid>
          
        </Grid>
      </main>
    </div>
  );
}
