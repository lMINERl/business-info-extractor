import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import MenuDefault from './menuDefault';

storiesOf('Menu', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      <div
        key={Date.now()}
        style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
      >
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('MenuDefault', () => (
    <MenuDefault
      content={{
        menuList: [
          { name: 'None' },
          { name: 'Atria' },
          { name: 'Callisto' },
          { name: 'Dione' },
          { name: 'Ganymede' },
          { name: 'Hangouts Call' },
          { name: 'Luna' },
          { name: 'Oberon' },
          { name: 'Phobos' },
          { name: 'Pyxis' },
          { name: 'Sedna' },
          { name: 'Titania' },
          { name: 'Triton' },
          { name: 'Umbriel' }
        ],
        buttonName: 'Menu'
      }}
      shape={{
        buttonIcon: <MoreVert />
      }}
    />
  ));
