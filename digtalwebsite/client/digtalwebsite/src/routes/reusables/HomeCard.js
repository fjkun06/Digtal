import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MiniArrows from "../MiniArrows";
import { Slide } from "@mui/material";

export default function HomeCard({ logo, text, heading, cname, id, visible, appear }) {
  // const containerRef = React.useRef(null);

  React.useEffect(() => {
    //  console.log("currid: ",containerRef.current.id);
  }, []);
  return (
    <Card className={cname} id={id}>
      <CardMedia component="img" alt="green iguana" height="250" image={logo} />

      <CardContent>
        <Slide direction="right" in={visible} mountOnEnter timeout={{ enter: 1000 }}>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
        </Slide>

        <Slide direction="right" in={visible} mountOnEnter timeout={{ enter: 1500 }}>
          <Typography variant="body1" className="home-card-text">
            {/* <Typography variant="body1" color="text.secondary" textOverflow={'ellipsis'} whiteSpace="nowrap" overflow={"hidden"}> */}
            {text.length > 130 ? text.substring(0, 130) + "..." : text}
          </Typography>
        </Slide>
      </CardContent>
      <CardActions>
        <Slide direction="right" in={visible} mountOnEnter timeout={{ enter: 1700 }}>
          {/* <Slide direction="right" in={visible} mountOnEnter  timeout={{appear: appear}} container={containerRef.current}> */}

          {/* <Button size="small">Share</Button> */}
          <Button size="large" className={cname + '-button'}>Learn More</Button>
          {/* <MiniArrows /> */}
        </Slide>
        {/* <Slide direction="right" in={visible} mountOnEnter> */}
          {/* <Slide direction="right" in={visible} mountOnEnter  timeout={{appear: appear}} container={containerRef.current}> */}

          {/* <Button size="small">Share</Button> */}
          {/* <Button size="large">Learn More</Button> */}
          <MiniArrows />
        {/* </Slide> */}
      </CardActions>
    </Card>
  );
}
