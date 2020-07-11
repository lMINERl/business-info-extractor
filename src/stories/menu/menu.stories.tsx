import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { MenuDefault } from '.';

storiesOf('Menu', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('MenuDefault', () => (
    <MenuDefault
      content={{
        menuList: [
          'None',
          'Atria',
          'Callisto',
          'Dione',
          'Ganymede',
          'Hangouts Call',
          'Luna',
          'Oberon',
          'Phobos',
          'Pyxis',
          'Sedna',
          'Titania',
          'Triton',
          'Umbriel'
        ],
        buttonName: 'Menu'
      }}
      actions={{ menuItemClick: () => {} }}
      shape={{
        buttonIcon: <MoreVert />
      }}
    />
  ));
