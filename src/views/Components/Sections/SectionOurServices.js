import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/ourServicesStyle.js";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imagen1 from "assets/img/portadaLantterra.jpg"
import imagen2 from "assets/img/our2.jpg"
import imagen3 from "assets/img/our1.jpg"


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(styles);

/*<CardActions>
    <Button size="small" color="primary">
        Share
    </Button>
    <Button size="small" color="primary">
        Learn More
    </Button>
</CardActions>*/

export default function MediaCard() {
  const classes = useStyles();

  return (
 
    <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} >
             <h1 className={classes.title}>Conoce nuestros servicios</h1>
             <h4 className={classes.subtitulo}>
            Somos una empresa de consultoría, ingeniería y capacitación ambiental 
            conformada por un equipo de profesionales organizado para brindar una consultoría integral,
            de calidad y en tiempos óptimos para dar solución a las necesidades de cada cliente.
            </h4>
          </GridItem>
      </GridContainer>
      <div className={classes.seccion}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          </GridItem>

          <GridItem xs={12} sm={12} md={5} className={classes.root}>
           
           <Card  className={classes.card} style={{margin: "30px"}}>
               <CardActionArea >
                   <CardMedia
                   component="img"
                   alt="Contemplative Reptile"
                   height="140"
                   image={imagen3}
                   title="Contemplative Reptile"
                   />
                   <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                       Educación Ambiental
                   </Typography>
                   
                   </CardContent>
               </CardActionArea>
                   <CardActions className={classes.seccion}>
                       <List >
                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Educación Ambiental y Capacitaciones. (en este caso se podría certificar por SEREMI de Salud, SGA y Norma Chilena 2728)" />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Higiene ambiental y control de Vectores. (¿Se requiere autorización sanitaria y capacitar a un aplicador?" />
                            </ListItem> 

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Permisos Sectoriales (Mi experiencia principalmente 140, 142)" />
                            </ListItem>  

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Industria, taller y bodega." />
                           </ListItem>

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Aplicación de plaguicidas uso sanitario y domestico" />
                           </ListItem> 
                        
                       </List>
                   </CardActions>
               </Card>
         </GridItem>
         

         <GridItem xs={12} sm={12} md={5} className={classes.root}>
           
           <Card  className={classes.card} style={{margin: "30px"}}>
               <CardActionArea >
                   <CardMedia
                   component="img"
                   alt="Contemplative Reptile"
                   height="140"
                   image={imagen2}
                   title="Contemplative Reptile"
                   />
                   <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                       Asesorías
                   </Typography>
                   
                   </CardContent>
               </CardActionArea>
                   <CardActions className={classes.seccion}>
                       <List >
                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Declaración de residuos peligrosos" />
                            </ListItem>

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Autorización de transporte de residuos peligrosos y no peligroso" />
                            </ListItem> 

                            <ListItem className={classes.card}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Autorización de almacenamiento de residuos peligrosos y no peligrosos" />
                            </ListItem>  

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Autorización de destinatario de residuos peligrosos y no peligrosos" />
                           </ListItem>

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Aprobación de planes de manejo de residuos peligrosos" />
                           </ListItem> 

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="Cartas de pertinencias (rubro eléctrico)" />
                           </ListItem> 

                           <ListItem className={classes.card}>
                           <ListItemIcon>
                               <ArrowRightIcon />
                           </ListItemIcon>
                           <ListItemText primary="DIA (rubro eléctrico)" />
                           </ListItem> 

                            
                       </List>
                   </CardActions>
               </Card>
         </GridItem>

         
         <GridItem xs={12} sm={12} md={1}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
      
    
  );
}