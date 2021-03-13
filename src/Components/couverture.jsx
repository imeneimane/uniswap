import React from 'react';
import {Paper,IconButton,Box} from '@material-ui/core';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {makeStyles} from '@material-ui/styles';
import image1 from './SideDrawer/image1.jpg';

const useStyles = makeStyles(() => ({
    paper: {
       
        marginRight: 9,
        width: "100%",
        borderRadius: 3,
        marginBottom: 2,
        height:"35vh",
        marginTop: -2,
        backgroundColor: "#eaeaf0",
        backgroundImage: `url(${image1})`,
      },
      input:{
        display: "none",

      }


}));
const PhotoCouverture = () => {
const classes = useStyles();
        return (
            <>
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
                </>
        )
}
        export default PhotoCouverture