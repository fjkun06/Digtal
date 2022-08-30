import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function HomeCard({logo,text,heading,cname}) {
  return (
    <Card className={cname}>
      <CardMedia component="img" alt="green iguana" height="250" image={logo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {text}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {heading}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
