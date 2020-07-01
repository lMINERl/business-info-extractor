import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { CheckboxDefault, CheckboxAddFavorite } from '.';

storiesOf('Checkbox', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('CheckboxDefault', () => (
    <CheckboxDefault
      handleChange={(event: any) => {
        console.log({ [event.target.name]: event.target.value });
      }}
      content={{ defaultValue: undefined, keyId: 'key1', label: 'Agree on Privacy and Policy' }}
      options={{
        iconValues: {
          checkIconValue: 'checked',
          unCheckedIconValue: 'unchecked',
          intermidateIconValue: 'intermidate'
        }
      }}
    />
  ))
  .add('CheckBoxAddFavorite', () => (
    <CheckboxAddFavorite
      handleChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log({ [event.target.name]: event.target.value })}
      keyId="key2"
    />
  ));
