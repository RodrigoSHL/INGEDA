import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Tooltip from "@material-ui/core/Tooltip";


// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";




// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SectionPolitica from "./Sections/SectionPolitica.js";
import SectionOurServices from "./Sections/SectionOurServices.js";
import SectionGaleria from "./Sections/SectionGaleria.js";
import SectionOurs from "./Sections/SectionOurs.js";


import logo from "assets/img/logov1.png";
import logoIngeda from "assets/img/png_ingeda.png";

import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        leftLinks=
        {
          <List>
            <ListItem className={classes.listItemLeft}>  
                 <Link to="/"><img className={classes.img} src={logoIngeda}/></Link>
            </ListItem> 
          </List>
        }
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400, 
          color: "white"
        }}
        {...rest}
      />
      
      <Parallax className={classes.hero} image={require("assets/img/portada_gris.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>INGEDA</h1>
                <h3 className={classes.subtitle}>
                Ingeniería - Gestión - Capacitación Ambiental. 
                </h3>
                <br/>
                <p className={classes.parrafo}>Arica, Iquique y Alto Hospicio</p>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      
        <SectionOurs />
        <SectionPolitica />     
        <SectionOurServices/>
        <SectionGaleria />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/contacto"} className={classes.link}>
            <Button color="danger" size="lg" simple>
              Contáctanos
            </Button>
          </Link>
        </GridItem>
        
      </div>
      <Footer />
    </div>
  );
}
