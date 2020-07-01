import React from 'react';

import { storiesOf } from '@storybook/react';
import { TreeDefault } from '.';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

storiesOf('Tree', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('TreeDefault', () => (
    <TreeDefault
      nestedObject={{
        Main: {
          welcome: 'Hello',
          'Subtree With Children': {
            welcome: 'Hello',
            'Sub-subtree with children': {
              child1: 'Child1',
              child2: 'Child2',
              child3: 'child3'
            },
            welcomeAgain: 'Hello'
          },
          world: 'World',
          something: 'Something Something'
        }
      }}
      shapes={{ expandIcon: <Add />, closeIcon: undefined, collapseIcon: <Remove /> }}
    />
  ));
