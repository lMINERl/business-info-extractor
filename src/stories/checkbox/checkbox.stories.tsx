import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { CheckboxDefault, CheckboxAddFavorite } from '.';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

storiesOf('Checkbox', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('CheckboxDefault', () =>
    CheckboxDefault(
      (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        console.log({ [event.target.name]: checked });
      },
      'key1',
      'Agree on Privacy and Policy',
      {
        unChecked: <FavoriteBorder />,
        checked: <Favorite />
      }
    )
  )
  .add('CheckBoxAddFavorite', () =>
    CheckboxAddFavorite((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      console.log({ [event.target.name]: checked });
    }, 'key2')
  );
