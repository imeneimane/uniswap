import React from 'react';
import {TextField, form ,Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
   root:{
      
       backgroundColor: "#eaeaf0",
     
    
   }


}));
const Textfield = () => {
const classes = useStyles();
        return (
     <div>
        
         <form  noValidate autoComplete="off"   className={classes.root}>
         <TextField id="outlined-basic" label="Bio"  />
        </form> 
     </div>

        )}
        export default Textfield 
