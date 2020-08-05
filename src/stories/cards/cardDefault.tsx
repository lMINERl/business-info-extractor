import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const cardDefaultStyles = makeStyles({
  root: {
    minWidth: 275
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
export enum CardVariant {
  outlined,
  elevation
}
const getCardType = (variant: CardVariant) => {
  switch (variant) {
    case CardVariant.outlined:
      return 'outlined';
    default:
      return 'elevation';
  }
};

const CardDefault = (variant: CardVariant) => {
  const cardType = getCardType(variant);
  return (
    <Card className={cardDefaultStyles().root} variant={cardType}>
      <CardContent>
        <Typography className={cardDefaultStyles().title} color="textSecondary" gutterBottom>
          Text1
        </Typography>
        <Typography variant="h5" component="h2">
          Text2
        </Typography>
        <Typography className={cardDefaultStyles().pos} color="textSecondary">
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
};

export default CardDefault;
