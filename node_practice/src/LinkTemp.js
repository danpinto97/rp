import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import horse_link from './horse_link.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white'
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    marginBottom: 0
  },
}));

export default function LinkTemp() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" component="div">Useful Links</Typography>
        <Divider style={{ padding: "2px 4px", marginBottom: 5 }} ></Divider>
        <Grid container spacing={3} justify="center" alignContent="center" alignItems="center">
          <Grid item>
            <Card className={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="350"
                  image="https://theplaidhorse.s3.amazonaws.com/media/uploads/2020/08/AdobeStock_326500445-1-768x512.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>

                  <Typography gutterBottom variant="h5" component="h2">
                    Rally Markets Knowledge Base
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Click here for access to the Rally Markets Knowledge Base
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary"
                  href='http://wiki.rally.markets:3000/login'
                >
                  Rally Markets
              </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item >
            <Card className={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="350"
                  image="https://blog.hubspot.com/hubfs/image8-2.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>

                  <Typography gutterBottom variant="h5" component="h2">
                    Google Dashboard
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Click here for access to the Rally Google Dashboard link
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary"
                  href='https://workspace.google.com/dashboard'
                >
                  Google Dashboard
        </Button>
              </CardActions>
            </Card>
          </Grid>


          <Grid item >
            <Card className={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="350"
                  image="https://grafana.com/static/img/about/grafana_logo_swirl_fullcolor.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>

                  <Typography gutterBottom variant="h5" component="h2">
                    Grafana
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Click here for access to the Grafana Analytics link
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary"
                  href='http://grafana.rally.markets/d/yru6Tk9Gz/rally-overview?orgId=1'
                >
                  Grafana
        </Button>
              </CardActions>
            </Card>

          </Grid>

          <Grid item >
            <Card className={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="350"
                  image="https://logos-world.net/wp-content/uploads/2021/02/Jira-Symbol.png"
                  title="Contemplative Reptile"
                />
                <CardContent>

                  <Typography gutterBottom variant="h5" component="h2">
                    Jira
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Click here for access to the Jira page
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary"
                  href='https://rallymarkets.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=RALLY&selectedIssue=RALLY-65'
                >
                  Grafana
        </Button>
              </CardActions>
            </Card>

          </Grid>

        </Grid>
      </Container>
    </div>
  )
}
