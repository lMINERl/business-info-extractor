import React from 'react';

import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReplaceableText from './replaceableText';
import { Button, Typography } from '@material-ui/core';

storiesOf('Replaceable', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('replaceableDefault', () => {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('hello from replacer story');

    return (
      <React.Fragment>
        <Button onClick={() => setToggle(!toggle)}>Edit Please</Button>
        <br />
        <ReplaceableText
          mainElement={() => {
            return <Typography>{text}</Typography>;
          }}
          defaultText={text}
          change={(e: any) => setText(e.target.value)}
          shouldReplace={toggle}
        />
      </React.Fragment>
    );
  });
