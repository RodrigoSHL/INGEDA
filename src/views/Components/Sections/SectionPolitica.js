import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import EcoIcon from '@material-ui/icons/Eco';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <div id="navigation-pills">
        <h1 className={classes.title}>Nuestro Compromiso</h1>
       
          <GridContainer style={{marginTop:"30px"}}>
        
          <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Misión",
                    tabIcon: ThumbUpIcon,
                    tabContent: (
                      <span>
                        
                        <h4 className={classes.parrafo}>
                        Generar soluciones estratégicas en el ámbito de las ciencias ambientales, 
                        ingeniería y gestión de proyectos de inversión, equilibrando el beneficio con 
                        la sustentabilidad, preocupándonos de garantizar la satisfacción de nuestros 
                        clientes al proporcionar la mejor calidad de atención.
                         
                        </h4>
                      </span>
                    )
                  },
                  {
                    tabButton: "Visión",
                    tabIcon: EcoIcon,
                    tabContent: (
                      <span>
                        <h4>
                        Ser reconocida como una empresa de excelencia en asesoría, 
                        ingeniería, capacitación y en el apoyo integral a clientes 
                        en sus proyectos a nivel nacional por su responsabilidad con 
                        sus clientes, así como con el medio Ambiente.  
                        </h4>
                        
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} style={{ backgroundColor: "#999999", height: "30px", marginTop:"60px", marginBottom : "60px" }}>

</GridItem>    
      </GridContainer>
        </div>
      </div>
    
  );
}
