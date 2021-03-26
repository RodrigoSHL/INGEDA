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
          
          <GridItem xs={12} sm={12} md={8}>
            <h1 className={classes.title}>Quiénes Somos</h1>
            <h4>
            Somos una empresa de consultoría, ingeniería y capacitación ambiental 
            conformada por un equipo de profesionales organizado para brindar una consultoría integral,
            de calidad y en tiempos óptimos para dar solución a las necesidades de cada cliente.
            </h4>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#80AF28", height: "30px", marginTop:"60px" }}>

          </GridItem>                 
        </GridContainer>
      </div>
    </div>
  );
}
