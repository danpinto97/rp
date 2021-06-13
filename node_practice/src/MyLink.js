import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import LinkTemp from './LinkTemp';
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

export default function MyLink( { mylink }) {
    const classes = useStyles();
    return (
      
<Container maxWidth="lg">
    <LinkTemp></LinkTemp>
</Container>

    )
}
