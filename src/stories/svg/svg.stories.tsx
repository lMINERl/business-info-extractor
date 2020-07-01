import React from 'react';

import { storiesOf } from '@storybook/react';
import { CloseSquare, MinusSquare, PlusSquare } from '.';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

storiesOf('Svg', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('CloseSquare', () => <CloseSquare />)
  .add('MinusSquare', () => <MinusSquare />)
  .add('PlusSquare', () => <PlusSquare />);
