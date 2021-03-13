import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from  './drawer';
import ProfileInfo from './ProfileInfo';
import PhotoCouverture from './couverture'; 
import Historique from './Historique';
import Textfield from './TextField';


function New (){
        return (
            <>
           <Grid container direction="column">
            <Grid item  xs={2}> <NavBar/> </Grid>
           
            <Grid  item   container direction="row" >
             <Grid item  xs={3} style={{ marginTop:65, justifyItems: "center", marginLeft:80,height:'89vh', backgroundColor: "#eaeaf0",
              borderRadius: 3,
              boxShadow: "1px 1px 1px #9E9E9E",}} >
                 <ProfileInfo/>
             </Grid>
             <Grid item container direction="column" xs={8}>
                 <Grid item  style={{ height:'35vh',marginTop:65,marginLeft:20,marginRight:9}} >
                 <PhotoCouverture/>
                 </Grid>
               <Grid item container  direction="row" style={{ marginLeft:20,marginTop:9}} >
               <Grid item xs={7} style={{  marginRight:18 , backgroundColor: "#ffff" ,height:'52vh',
                 overflowY: "scroll", boxShadow: "1px 1px 1px  #9E9E9E",
                }}>      
                    <Historique/> 
                   </Grid> 
                 <Grid item xs={4}  style={{ backgroundColor: "#eaeaf0", height:'20vh',  boxShadow: "1px 1px 1px  #9E9E9E",}}>
                 <Textfield/>
                   </Grid>
                     
                 </Grid>
                 
                 </Grid>



            </Grid>
            </Grid>
            </>
        )
    }


export default New
