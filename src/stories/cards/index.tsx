import React, { useMemo } from 'react';
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
import { CheckboxAddFavorite } from '../checkbox';

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
  favourate?: {
    handleFavourate: (event: { target: { name: string; value: any } }) => void;
  };
}
export interface CardContent {
  header: {
    title: string;
    subTitle?: string;
  };
  description?: string;
}

export const CardComplex = (props: { variant: CardVariant; cardShape: CardShape; cardContent: CardContent }) => {
  const classes = cardComplexStyles();

  const CardAvatar = useMemo(() => {
    return props.cardShape.AvatarChar ? (
      <Avatar aria-label="recipe" className={classes.avatar}>
        {props.cardShape.AvatarChar}
      </Avatar>
    ) : null;
  }, [props.cardShape.AvatarChar]);

  const CardSettings = useMemo(() => {
    return props.cardShape.settings ? (
      <IconButton aria-label="settings" onClick={props.cardShape.settings.handleSettings}>
        <MoreVertIcon />
      </IconButton>
    ) : null;
  }, [props.cardShape.settings]);

  const CardImage = useMemo(() => {
    return props.cardShape.image ? (
      <CardMedia className={classes.media} image={props.cardShape.image.path} title={props.cardShape.image.title} />
    ) : null;
  }, [props.cardShape.image]);

  const CardFavourate = useMemo(() => {
    return props.cardShape.favourate ? <CheckboxAddFavorite handleChange={props.cardShape.favourate.handleFavourate} keyId="add Fav" /> : null;
  }, [props.cardShape.favourate]);

  const CardShare = useMemo(() => {
    return props.cardShape.share ? (
      <IconButton aria-label="share" onClick={props.cardShape.share.handleShare}>
        <ShareIcon />
      </IconButton>
    ) : null;
  }, [props.cardShape.share]);

  const CardPannel = props.cardShape.pannel ? PannelDefault(<CardContent>{props.cardShape.pannel.component}</CardContent>) : null;

  const cardHeader = useMemo(() => {
    return (
      <CardHeader
        avatar={CardAvatar}
        action={CardSettings}
        title={props.cardContent.header.title}
        subheader={props.cardContent.header.subTitle || ''}
      />
    );
  }, [props.cardContent.header]);

  return (
    <Card className={classes.root}>
      {cardHeader}
      {CardImage}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.cardContent.description}
        </Typography>
      </CardContent>
      <CardActions>
        {CardFavourate}
        {CardShare}
        {CardPannel ? CardPannel.Icon : null}
      </CardActions>
      {CardPannel ? CardPannel.Pannel : null}
    </Card>
  );
};
