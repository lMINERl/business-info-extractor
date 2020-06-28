import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

export const CheckboxDefault = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  keyId: string,
  label: string,
  icon?: {
    checked: any;
    unChecked: any;
  }
) => {
  const checkedIcon = icon ? icon.checked : null;
  const uncheckedIcon = icon ? icon.unChecked : null;
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={keyId}
          icon={uncheckedIcon}
          checkedIcon={checkedIcon}
          defaultChecked={false}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label={label}
    />
  );
};

export const CheckboxAddFavorite = (handleChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void, keyId: string) => {
  return CheckboxDefault(handleChange, keyId, '', {
    unChecked: <FavoriteBorder />,
    checked: <Favorite />
  });
};
