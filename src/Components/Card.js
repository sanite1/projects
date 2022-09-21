import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {VscGithub} from "react-icons/vsc"
import {RiSendPlaneFill} from "react-icons/ri"


export default function CardT(prop) {
  return (
    <Card sx={{ widt: 345 }}>
      <CardMedia
        sx={{height: "200px"}}
        component="img"
        alt="green iguana"
        height="140"
        image="./img1.jpg"
      />
      <CardContent>
      <a href="/" className="p-icon"><RiSendPlaneFill size={30} /></a>
        <Typography
            sx={{fontFamily: "monospace", textAlign: "center"}}
            gutterBottom variant="h4" component="div" >
          Lizard
        </Typography>
        
        <div className="langs">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
        </div>
      </CardContent>
      <CardActions className='footer' sx={{padding: 0}}>
        <div className="card-footer">
            <VscGithub />
            <a href="/" className="txt">Source Code</a>
        </div>
      </CardActions>
    </Card>
  );
}
