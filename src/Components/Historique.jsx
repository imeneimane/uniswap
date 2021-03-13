import React from 'react';
import {Typography, CardMedia,CardContent} from '@material-ui/core';
import image1 from "./SideDrawer/image1.jpg";
import {makeStyles
} from '@material-ui/styles'



const useStyles = makeStyles(() => ({
    media: {
        backgroundImage: `url(${image1})`,
        marginTop: 10,
        marginLeft:10,
        borderRadius: 3,
        boxShadow: "1px 1px 1px #9E9E9E",
      },
    


}));
const Historique = () => {
const classes = useStyles();
        return (
          
            <div >
                  <CardMedia style={{ height: "30vh"  }}
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
               
        )
}
export default Historique 