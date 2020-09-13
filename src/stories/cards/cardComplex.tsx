import React, { useMemo } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

// Icons
import ShareIcon from '@material-ui/icons/Share';
import PannelDefault from '../pannel/pannelDefault';
import CheckboxAddFavorite from '../checkbox/checkboxAddFavorite';
import MenuDefault from '../menu/menuDefault';
import { MoreVert } from '@material-ui/icons';
import { CardVariant } from './cardDefault';
import ReplaceableText from '../replaceable/replaceableText';

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

export interface CardShape {
  AvatarChar?: string;
  settings?: {
    name: string;
    icon?: JSX.Element;
    action?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }[];
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

const CardComplex = (props: {
  editMode?: boolean;
  variant: CardVariant;
  cardShape: CardShape;
  cardContent: CardContent;
}) => {
  const classes = cardComplexStyles();
  const editMode = props.editMode ?? false;

  const CardAvatar = useMemo(() => {
    return props.cardShape.AvatarChar ? (
      <Avatar aria-label="recipe" className={classes.avatar}>
        {props.cardShape.AvatarChar}
      </Avatar>
    ) : null;
  }, [props.cardShape.AvatarChar, classes.avatar]);

  const CardSettings = useMemo(() => {
    return props.cardShape.settings ? (
      <MenuDefault
        content={{ menuList: props.cardShape.settings }}
        // actions={{ buttonClick: props.cardShape.settings. }}
        shape={{ buttonIcon: <MoreVert /> }}
      />
    ) : null;
  }, [props.cardShape.settings]);

  const CardImage = useMemo(() => {
    return props.cardShape.image ? (
      <CardMedia
        className={classes.media}
        image={props.cardShape.image.path}
        title={props.cardShape.image.title}
      />
    ) : null;
  }, [props.cardShape.image, classes.media]);

  const CardFavourate = useMemo(() => {
    return props.cardShape.favourate ? (
      <CheckboxAddFavorite
        handleChange={props.cardShape.favourate.handleFavourate}
        keyId="add Fav"
      />
    ) : null;
  }, [props.cardShape.favourate]);

  const CardShare = useMemo(() => {
    return props.cardShape.share ? (
      <IconButton aria-label="share" onClick={props.cardShape.share.handleShare}>
        <ShareIcon />
      </IconButton>
    ) : null;
  }, [props.cardShape.share]);

  const CardPannel = props.cardShape.pannel
    ? PannelDefault(<CardContent>{props.cardShape.pannel.component}</CardContent>)
    : null;

  const cardHeader = useMemo(() => {
    return (
      <CardHeader
        avatar={CardAvatar}
        action={CardSettings}
        title={
          <ReplaceableText
            defaultText={props.cardContent.header.title}
            shouldReplace={editMode}
            change={() => {}}
            mainElement={() => (
              <Typography component="h6">{props.cardContent.header.title}</Typography>
            )}
          />
        }
        subheader={props.cardContent.header.subTitle || ''}
      />
    );
  }, [props.cardContent.header, CardAvatar, CardSettings]);

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

export default CardComplex;
