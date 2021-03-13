import React from 'react';
import {Typography, Button,Divider,Avatar} from '@material-ui/core';
import image3 from './SideDrawer/image3.jpeg';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    AvatarStyles:{
        height: "20vh",
      width:"20vh",
       marginTop: 10,
       marginLeft:"15vh",
    

    }
    


}));
const ProfileInfo = () => {
const classes = useStyles();
        return (
            <div>
            <Avatar alt="Remy Sharp"   src={image3} className={classes.AvatarStyles} />
            <Typography style={{ marginLeft: 95, fontWeight: "600" }}>
              {" "}
              Jenna Smith
            </Typography>
            <Typography>
              {" "}
              <span style={{ fontWeight: 600, marginLeft: 95, marginButtom:20 }}>
                {" "}
                200{" "}
              </span>{" "}
              followers{" "}
            </Typography>
            <Divider />
            <Button
              style={{
                backgroundImage:
                "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                color: "#ffff",
                marginTop: 20,
                marginButtom: 10,
                marginRight: 20,
                marginLeft: 35,
                boxShadow: "1px 1px 1px #9E9E9E",
              }}
            >
              S'abonner
            </Button>
            <Button
              style={{
                backgroundImage:
                "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                color: "#ffff",
                marginTop: 20,
                marginButtom: 50,
                marginLeft:45,
                boxShadow: "1px 1px 1px #9E9E9E",
              }}
            >
              Contacter
            </Button>

            <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
              {" "}
              <span style={{ fontWeight: 600 }}> Nom: </span>Jenna
            </Typography>
            <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
              <span style={{ fontWeight: 600 }}> Prénom : </span> Smith
            </Typography>
            <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Age: </span>25
            </Typography>
            <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Département:</span>{" "}
              Informatique
            </Typography>
            <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
              {" "}
              <span style={{ fontWeight: 600 }}> Spécialité:</span> ISI
            </Typography>
            <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
              {" "}
              <span style={{ fontWeight: 600 }}> Niveau d'étude: </span> Master2
            </Typography>
                
            </div>
        )}

export default ProfileInfo
