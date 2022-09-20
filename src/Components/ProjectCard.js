
import {RiSendPlaneFill} from "react-icons/ri"
import {VscGithub} from "react-icons/vsc"
import projectData from "../data";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ProjectCard = () => {

    const cards = projectData.map((item, pos) => {
        const langs = item.languages.map((item, pos) => {
            return(
                <p key={pos}>{item}</p>
            )
        })
        // console.log(item);
        return(
            <Grid key={pos} item xs={12} md={4} sm={6}>
                <Card sx={{ heigh: 416, boxShadow: "0 3px 5px 0 rgb(153, 147, 147)" }} className="p-card" >
                    <CardMedia
                        // sx={{height: "200px"}}
                        component="img"
                        alt="img"
                        height="200"
                        image={item.img}
                    />
                    <CardContent>
                        <a href={item.link} className="p-icon"><RiSendPlaneFill size={30} /></a>
                        <Typography
                            sx={{fontFamily: "monospace", textAlign: "center", height: 70 }}
                            gutterBottom variant="h4" component="div" >
                        {item.name}
                        </Typography>
                        
                        <div className="langs">
                            {langs}
                        </div>
                    </CardContent>
                    <CardActions className='footer' sx={{padding: 0}}>
                        <div className="card-footer">
                            <VscGithub />
                            <a href={item.source} className="txt">Source Code</a>
                        </div>
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
            <Grid container spacing={2}>
                { cards }
            </Grid>
        </Box>
    );
}
 
export default ProjectCard;