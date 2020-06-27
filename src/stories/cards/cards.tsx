import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    minWidth: 275
    // width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
});
export const CardDefault = () => (
  <Card className={useStyles().root}>
    <CardContent>
      <Typography className={useStyles().title} color="textSecondary" gutterBottom>
        Text1
      </Typography>
      <Typography variant="h5" component="h2">
        Text2
      </Typography>
      <Typography className={useStyles().pos} color="textSecondary">
        Text3
      </Typography>
      <Typography variant="body2" component="p">
        Text$
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">button1</Button>
    </CardActions>
  </Card>
);
