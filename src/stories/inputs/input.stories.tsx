import '../_config';
import React, { ChangeEvent } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/addons';
import InputPassword from './inputPassword';
import InputTelephoneNumber from './inputTelephoneNumber';
import InputText from './inputText';

storiesOf('Input', module)
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
  .add('InputTelephoneNumber', () => (
    <InputTelephoneNumber
      variant="standard"
      changeHandle={(event: any) => console.log(event.target.value)}
      content={{ keyId: 'telephoneNumber' }}
    />
  ))
  .add('InputPassword', () => {
    return (
      <InputPassword
        variant="standard"
        changeHandle={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)}
        content={{ keyId: 'password' }}
      />
    );
  })
  .add('InputText', () => (
    <InputText
      variant="standard"
      isRequired={false}
      isError={true}
      changeHandle={(event: ChangeEvent<HTMLInputElement>) => useState(event.target.value)}
      content={{
        keyId: 'NormalInput',
        labelText: 'any label Text'
      }}
    />
  ));
