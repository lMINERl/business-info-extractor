import React, { useMemo } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import red from '@material-ui/core/colors/red';

// Icons
import ShareIcon from '@material-ui/icons/Share';
import PannelDefault from '../pannel/pannelDefault';
import CheckboxAddFavorite from '../checkbox/checkboxAddFavorite';
import MenuDefault from '../menu/menuDefault';
import MoreVert from '@material-ui/icons/MoreVert';
import { CardVariant } from './cardDefault';
import ReplaceableText from '../replaceable/replaceableText';
import ReplaceableTextArea from '../replaceable/replacableTextArea';
import ReplaceableButton from '../replaceable/replacableButton';

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

export interface CardContent {
  settings?: {
    name: string;
    icon?: JSX.Element;
    action?: any;
  }[];
  AvatarChar?: string;
  title?: string;
  subTitle?: string;
  image?: {
    path: string;
    title: string;
  };
  description?: string;
  pannel?: JSX.Element;
}
const CardComplex = (props: {
  hasAvatar?: boolean;
  hasSettings?: boolean;
  hasShare?: boolean;
  hasFavourate?: boolean;
  hasDescription?: boolean;
  hasPannel?: boolean;
  hasImage?: boolean;
  shouldEdit?: boolean;
  variant: CardVariant;
  cardContent?: CardContent;
  onSaveClick?: any;
  onFavourateClick?: any;
  onShareClick?: any;
  onTitleChange?: any;
  onSubTitleChange?: any;
  onDescriptionChange?: any;
}) => {
  const classes = cardComplexStyles();
  const [editMode, setEditMode] = React.useState<any>(false);

  const [cardContent, setCardContent] = React.useState<any>({
    settings: [],
    AvatarChar: '',
    title: '',
    subTitle: '',
    image: {
      path: '',
      title: ''
    },
    description: '',
    pannel: <></>
  });

  React.useEffect(() => {
    setCardContent((old: any) => {
      return { ...old, ...props.cardContent };
    });
  }, [props.cardContent]);

  React.useEffect(() => {
    setEditMode(props.shouldEdit ?? false);
  }, [props.shouldEdit]);

  const CardAvatar = useMemo(() => {
    console.log('avatarChanged');
    return props.hasAvatar ? (
      <Avatar aria-label="recipe" className={classes.avatar}>
        {cardContent.AvatarChar}
      </Avatar>
    ) : null;
  }, [props.hasAvatar, classes.avatar, cardContent.AvatarChar]);

  const CardSettings = useMemo(() => {
    return props.hasSettings && cardContent.settings.length ? (
      <ReplaceableButton
        shouldReplace={editMode}
        defaultText={'Save'}
        click={props.onSaveClick}
        mainElement={() => (
          <MenuDefault
            content={{ menuList: cardContent.settings }}
            // actions={{ buttonClick: props.cardShape.settings. }}
            shape={{ buttonIcon: <MoreVert /> }}
          />
        )}
      />
    ) : null;
  }, [props.hasSettings, cardContent.settings, editMode, props.onSaveClick]);

  const CardImage = useMemo(() => {
    return props.hasImage ? (
      <CardMedia
        className={classes.media}
        image={cardContent.image.path}
        title={cardContent.image.title}
      />
    ) : null;
  }, [props.hasImage, cardContent.image, classes.media]);

  const CardFavourate = useMemo(() => {
    return props.hasFavourate ? (
      <CheckboxAddFavorite handleChange={props.onFavourateClick} keyId="add Fav" />
    ) : null;
  }, [props.hasFavourate, props.onFavourateClick]);

  const CardShare = useMemo(() => {
    return props.hasShare ? (
      <IconButton aria-label="share" onClick={props.onShareClick}>
        <ShareIcon />
      </IconButton>
    ) : null;
  }, [props.hasShare, props.onShareClick]);

  const CardPannel = props.hasPannel
    ? PannelDefault(<CardContent>{cardContent.pannel}</CardContent>)
    : null;

  const Title = React.useMemo(() => {
    return (
      <ReplaceableText
        defaultText={cardContent.title}
        shouldReplace={editMode}
        change={props.onTitleChange}
        mainElement={() => <Typography component="h6">{cardContent.title}</Typography>}
      />
    );
  }, [editMode, cardContent.title, props.onTitleChange]);

  const SubTitle = React.useMemo(() => {
    return (
      <ReplaceableText
        defaultText={cardContent.subTitle}
        shouldReplace={editMode}
        change={props.onSubTitleChange}
        mainElement={() => (
          <Typography component="a" color="textSecondary">
            {cardContent.subTitle || ''}
          </Typography>
        )}
      />
    );
  }, [editMode, cardContent.subTitle, props.onSubTitleChange]);

  const cardHeader = useMemo(() => {
    return (
      <CardHeader avatar={CardAvatar} action={CardSettings} title={Title} subheader={SubTitle} />
    );
  }, [SubTitle, Title, CardAvatar, CardSettings]);

  const descriptionCom = React.useMemo(() => {
    return props.hasDescription ? (
      <ReplaceableTextArea
        change={props.onDescriptionChange}
        defaultText={cardContent.description}
        shouldReplace={editMode}
        shape={{ rows: 5, cols: 30 }}
        mainElement={() => (
          <Typography variant="body2" color="textSecondary" component="p">
            {cardContent.description}
          </Typography>
        )}
      />
    ) : null;
  }, [props.hasDescription, cardContent.description, editMode, props.onDescriptionChange]);

  return (
    <Card className={classes.root}>
      {cardHeader}
      {CardImage}
      <CardContent>{descriptionCom}</CardContent>
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
