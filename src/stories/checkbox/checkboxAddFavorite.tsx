import React from 'react';
import CheckboxDefault from './checkboxDefault';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

const CheckboxAddFavorite = (props: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyId: string;
}) => {
  return (
    <CheckboxDefault
      handleChange={props.handleChange}
      content={{ keyId: props.keyId, defaultValue: undefined }}
      options={{
        iconShape: { unCheckedIcon: <FavoriteBorder />, checkedIcon: <Favorite /> }
      }}
    />
  );
};

export default CheckboxAddFavorite;
