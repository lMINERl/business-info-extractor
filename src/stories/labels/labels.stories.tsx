import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelDefault from './labelDefault';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

storiesOf('Labels', module)
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
  .add('LabelDefault', () => <LabelDefault content={{ text: 'anyText' }} />);
