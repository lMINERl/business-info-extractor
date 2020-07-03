import React from 'react';

import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { DrawerDefault } from '.';
import { Inbox, Send, Drafts, AllInbox, Delete, ErrorOutline } from '@material-ui/icons';

storiesOf('Drawer', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('DrawerDefault', () => (
    <DrawerDefault
      container={<React.Fragment></React.Fragment>}
      content={{
        toolbarTitle: 'Any Mail',
        items: [
          [
            { key: 'Inbox', icon: <Inbox /> },
            { key: 'Send Email', icon: <Send /> },
            { key: 'Drafts', icon: <Drafts /> }
          ],
          [
            { key: 'All Mail', icon: <AllInbox /> },
            { key: 'Trash', icon: <Delete /> },
            { key: 'Spam', icon: <ErrorOutline /> }
          ]
        ]
      }}
    />
  ));
