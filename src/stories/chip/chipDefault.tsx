import React from 'react';
import { Chip, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const ChipDefault = (props: {
  text?: string;
  shape?: {
    icon?: JSX.Element;
    variant?: 'outlined' | 'default';
    size?: 'small' | 'medium';
    deleteIcon?: JSX.Element;
  };
  options?: {
    onDelete?: any;
  };
}) => {
  const classes = useStyles();
  const shape = props.shape ?? { icon: undefined };
  const options = props.options ?? {};

  const icon = shape.icon;
  const deleteHandle = options.onDelete ?? undefined;
  const deleteIcon = shape.deleteIcon ?? undefined;

  return (
    <Chip
      variant={shape.variant ? shape.variant : 'default'}
      icon={icon}
      label={props.text}
      deleteIcon={deleteIcon}
      onDelete={deleteHandle}
      size={shape.size}
      className={classes.chip}
    />
  );
};

export default ChipDefault;
