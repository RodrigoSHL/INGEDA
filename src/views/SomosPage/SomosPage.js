import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Link } from "react-router-dom";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import logoIngeda from "assets/img/png_ingeda.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SomosPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        leftLinks=
        {
          <List>
            <ListItem >  
            <Link to="/"><img className={classes.img} src={logoIngeda}/></Link>
            </ListItem> 
          </List>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/portada_ingeda.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>INGEDA</h1>
              <h4>
              Conócenos más en el siguiente video.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://youtu.be/vlbKdeE49SY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Ver video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
