import React from 'react';
import clsx from 'clsx';
import { makeStyles,Box, useTheme ,Drawer,AppBar,Toolbar,List,CssBaseline,Typography
,IconButton,InputBase,ListItemIcon,ListItem,Badge,Avatar,Button,Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from "@material-ui/icons/Settings";
import {AiFillMessage} from "react-icons/ai";
import {FaHome} from "react-icons/fa"
import {HiUserGroup} from "react-icons/hi"
import {MdSettings} from "react-icons/md"
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Tooltip from '@material-ui/core/Tooltip';
//import ClickAwayListener from '@material-ui/core/ClickAwayListener';
const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#fff',
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom:10,
  },
  title: {
    width: 100,
    marginBottom:10,
  },
 hide:{
display:'none',
 },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  name:{
    marginTop: 12 ,
    marginLeft: 10 ,
    cursor: 'pointer',
    color:'black',
    fontWeight:500
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  
  search: {
    flexGrow: 0.3,
    height: 40,
    position: 'relative',
    borderRadius: 15,
    backgroundColor:' #f5fbff',
   border:'1px solid #f1f1f1',
   bottom: 5,
    height: 34,
    width: 52,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#a09e9e',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  drawerPaper:{
    backgroundColor:'#50b5ff',
    width:230,
    overflowX:'hidden',
  },  
  drClose:{
    width:60,
    backgroundColor:'#50b5ff',
    overflowX:'hidden',

  },
}));
 
const NavBar= () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    
    setOpen(!open);
  };
  
    
  
    
    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
       style={{backgroundColor:'#fff',
       height: 55,
      }}
       
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>

       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
            edge="start"
            className={clsx(classes.menuButton, {
            })}
          >
            <MenuIcon style={{color:'#50b5ff'}}/>
          </IconButton>
         

          <Typography variant="h6"className={classes.title} noWrap >
               UniSwap
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color:'#50b5ff'}} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box display="flex"justifyContent="flex-end" flexGrow= {1}  style={{marginBottom: 10}}   >

          <Tooltip disableFocusListener title="Profil">
            <Button style={{textTransform:'lowercase',
        }}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{width: 40,
    height: 40}} />
          <h6 href="#text-buttons" className={classes.name}>
                        Lamia 
                   </h6>
                   </Button>
                   </Tooltip>
                   <Tooltip disableFocusListener title="Paramètres">

         <IconButton aria-label="" style={{color:'#50b5ff',paddingTop: 0,
             paddingBottom: 0,height: 45,top: 7,}}>

    < SettingsIcon/>

</IconButton>
</Tooltip>
            
            <Tooltip disableFocusListener title="Déconnexion">

            <IconButton aria-label="" style={{color:'#50b5ff',paddingTop: 0,
    paddingBottom: 0,height: 45,top: 7,}}>
          
                < PowerSettingsNewIcon />
          
            </IconButton>
            </Tooltip>
           </Box>
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
            [classes.drClose]: !open,
            [classes.drawerPaper]: open,
          }),
          
        }}
      >
       
        <List style={{marginTop:90}}>


        <ListItem button style={{paddingRight: 16,marginBottom:15}}>
          <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
          <FaHome style={{marginLeft: 3, marginBottom: 5,fontSize: 24}}/>
         
          </ListItemIcon >
          <Typography style={{color:'#fff',fontSize: 18}}
           className={clsx( {
            [classes.hide]: !open,
          })}
          >Home</Typography>
          </ListItem>



          <ListItem button style={{paddingRight: 16,marginBottom:15}}>
          <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
          <AiFillMessage style={{marginLeft: 3, marginBottom: 5,fontSize: 24}}/>
          
          </ListItemIcon >
          <Typography style={{color:'#fff',fontSize: 18}}
           className={clsx( {
            [classes.hide]: !open,
          })}

          >Messages</Typography>
          </ListItem>




          <ListItem button style={{paddingRight: 16,marginBottom:15}}>
          <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
          <HiUserGroup style={{marginLeft: 3, marginBottom: 5,fontSize: 24}}/>
         
          </ListItemIcon >
          <Typography style={{color:'#fff',fontSize: 18}}
           className={clsx( {
            [classes.hide]: !open,
          })}

          >Groupes</Typography>
          </ListItem>





          <ListItem button style={{paddingRight: 16,marginBottom:15}}>
          <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
          <MdSettings style={{marginLeft: 3, marginBottom: 5,fontSize: 24}}/>
          
          </ListItemIcon >
          <Typography style={{color:'#fff',fontSize: 18}}
           className={clsx( {
            [classes.hide]: !open,
          })}

          >Paramétres</Typography>
          </ListItem>



<Typography style={{color:'#fff',fontSize: 16,marginTop: 80,marginLeft: 30,}}

className={clsx( {
  [classes.hide]: !open,
})}
>
Copyright ©2021 <br/>All rights reserved <br/><span 
style={{marginLeft: 25,fontSize: 19}}    >UniSwap</span>
</Typography>

          
         
         

          
        </List>
        
      </Drawer>
      </div>
    )
}

export default NavBar
