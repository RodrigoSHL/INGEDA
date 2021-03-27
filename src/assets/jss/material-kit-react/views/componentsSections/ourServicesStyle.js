import { title } from "assets/jss/material-kit-react.js";
import {image} from "assets/img/sectionOurServices.jpg";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundColor: "#80AF28"

  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFFFFF"
  },
  description: {
    color: "#999"
  },
  media: {
    height: 140,
  },
  card: {
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  subtitulo:{
    color: "#FFFFFF"
  }
};

export default productStyle;
