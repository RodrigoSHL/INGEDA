import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#999999", height: "30px", marginBottom:"60px" }}>

          </GridItem>
          
          <GridItem xs={12} sm={12} md={8}>
            <h1 className={classes.title}>Nuestra Misión</h1>
            <h4>
            Generar soluciones estratégicas en el ámbito de las ciencias ambientales, ingeniería y gestión de proyectos de inversión, 
            equilibrando el beneficio con la sustentabilidad, preocupándonos de garantizar la satisfacción de nuestros clientes al 
            proporcionar la mejor calidad de atención.
            </h4>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#80AF28", height: "30px", marginTop:"60px" }}>

          </GridItem>                 
        </GridContainer>
      </div>
    </div>
  );
}
