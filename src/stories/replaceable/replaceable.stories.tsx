import React from 'react';

import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReplaceableTextArea from './replacableTextArea';
import ReplacableButton from './replacableButton';
import ReplaceableText from './replaceableText';

storiesOf('Replaceable', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('replaceableText', () => {
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
  })
  .add('replacableButton', () => {
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
      <React.Fragment>
        <Button onClick={() => setToggle(!toggle)}>Edit Please</Button>
        <br />
        <ReplacableButton
          mainElement={() => {
            return (
              <Button onClick={() => console.log('Im doing something')}>I'm doing Anything</Button>
            );
          }}
          defaultText={`I'm Doing someThing Else`}
          click={(e: any) => console.log('im doing something else')}
          shouldReplace={toggle}
        />
      </React.Fragment>
    );
  })
  .add('replacableTextArea', () => {
    const [toggle, setToggle] = React.useState<boolean>(false);

    const [description, setDescription] = React.useState<string>(
      `This is a long a$$ description Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel quo quisquam distinctio esse tempore ab totam tempora officia officiis exercitationem sapiente laudantium expedita cum inventore nemo? Ad, quisquam voluptatum?`
    );
    return (
      <React.Fragment>
        <Button onClick={() => setToggle(!toggle)}>Edit Please</Button>
        <br />
        <ReplaceableTextArea
          mainElement={() => {
            return <Typography component="p"> {description} </Typography>;
          }}
          defaultText={description || ''}
          change={(e: any) => setDescription(e.target.value)}
          shouldReplace={toggle}
          shape={{ rows: 10, cols: 30 }}
        />
      </React.Fragment>
    );
  });
