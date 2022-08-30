import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MiniArrows from "../MiniArrows";

export default function HomeCard({ logo, text, heading, cname, id }) {

  return (
    <Card className={cname} id={id}>
      <CardMedia component="img" alt="green iguana" height="250" image={logo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="large">Learn More</Button>
        <MiniArrows/>
      </CardActions>
    </Card>
  );
}
