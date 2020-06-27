import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PannelDefault } from '../pannel';

const cardComplexStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
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

export const CardDefault = (variant: CardVariant) => {
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

export interface CardShape {
  AvatarChar?: string;
  settings?: { handleSettings: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };
  image?: {
    path: string;
    title: string;
  };
  pannel?: { component: JSX.Element };
  share?: { handleShare: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };
  favourate?: { handleFavourate: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void };
}
export interface CardContent {
  header: {
    title: string;
    subTitle?: string;
  };
  description: string;
}

export const CardComplex = (variant: CardVariant, cardShape: CardShape, cardContent: CardContent) => {
  const classes = cardComplexStyles();

  const CardAvatar = cardShape.AvatarChar ? (
    <Avatar aria-label="recipe" className={classes.avatar}>
      {cardShape.AvatarChar}
    </Avatar>
  ) : null;

  const CardSettings = cardShape.settings ? (
    <IconButton aria-label="settings" onClick={cardShape.settings.handleSettings}>
      <MoreVertIcon />
    </IconButton>
  ) : null;

  const CardImage = cardShape.image ? <CardMedia className={classes.media} image={cardShape.image.path} title={cardShape.image.title} /> : null;

  const CardFavourate = cardShape.favourate ? (
    <IconButton aria-label="add to favorites" onClick={cardShape.favourate.handleFavourate}>
      <FavoriteIcon />
    </IconButton>
  ) : null;

  const CardShare = cardShape.share ? (
    <IconButton aria-label="share" onClick={cardShape.share.handleShare}>
      <ShareIcon />
    </IconButton>
  ) : null;

  const CardPannel = cardShape.pannel ? PannelDefault(<CardContent>{cardShape.pannel.component}</CardContent>) : null;

  return (
    <Card className={classes.root}>
      <CardHeader avatar={CardAvatar} action={CardSettings} title={cardContent.header.title} subheader={cardContent.header.subTitle || ''} />
      {CardImage}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cardContent.description}
        </Typography>
      </CardContent>
      {/* <CardActions></CardActions> */}
      {CardFavourate}
      {CardShare}
      {CardPannel}
    </Card>
  );
};
