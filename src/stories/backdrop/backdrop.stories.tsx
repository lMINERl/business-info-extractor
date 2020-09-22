import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import BackdropDefault from '../backdrop/backdropDefault';

storiesOf('BackDrop', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      <div
        key={Date.now()}
        style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
      >
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('BackDropDefault', () => <BackdropDefault />);
