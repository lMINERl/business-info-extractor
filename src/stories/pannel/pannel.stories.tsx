import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import PannelDefault from './pannelDefault';
import { Typography } from '@material-ui/core';

storiesOf('Pannel', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('PannelDefault', () => {
    const pannel = PannelDefault(
      <React.Fragment>
        <Typography paragraph>Paragraph 1</Typography>
        <Typography paragraph>Paragraph 2</Typography>
        <Typography> anything </Typography>
      </React.Fragment>
    );
    return (
      <div>
        {pannel.Icon}
        {pannel.Pannel}
      </div>
    );
  });
