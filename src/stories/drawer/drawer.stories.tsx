import React from 'react';

import { storiesOf } from '@storybook/react';
// import DrawerDefault from './drawerDefault';
import { Inbox, Send, Drafts, AllInbox, Delete, ErrorOutline } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BackdropDefault from '../backdrop/backdropDefault';

const DrawerDefault = React.lazy(() => {
  return import('./drawerDefault');
});

const AnyComponent = (props: { num: number }) => {
  return <div>{props.num}</div>;
};

storiesOf('Drawer', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('DrawerDefault', () => {
    return (
      <React.Suspense fallback={<BackdropDefault />}>
        <DrawerDefault
          common={<React.Fragment></React.Fragment>}
          content={{
            toolbarTitle: 'Any Mail',
            items: [
              [
                { key: 'Inbox', icon: <Inbox />, component: <AnyComponent num={1} /> },
                { key: 'Send Email', icon: <Send />, component: <AnyComponent num={2} /> },
                { key: 'Drafts', icon: <Drafts />, component: <AnyComponent num={3} /> }
              ],
              [
                { key: 'All Mail', icon: <AllInbox />, component: <AnyComponent num={4} /> },
                { key: 'Trash', icon: <Delete />, component: <AnyComponent num={5} /> },
                { key: 'Spam', icon: <ErrorOutline />, component: <AnyComponent num={6} /> }
              ]
            ]
          }}
        />
      </React.Suspense>
    );
  });
