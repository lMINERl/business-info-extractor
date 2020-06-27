import '../_config';
import React, { ChangeEvent } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/addons';
import { InputPassword, InputTelephoneNumber, InputText, InputVariant } from '.';

storiesOf('Input', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('InputTelephoneNumber', () =>
    InputTelephoneNumber(InputVariant.standard, (event: ChangeEvent<HTMLInputElement>) => useState(event.target.value), 'telephoneNumber')
  )
  .add('InputPassword', () =>
    InputPassword(InputVariant.standard, (event: ChangeEvent<HTMLInputElement>) => useState(event.target.value), 'password')
  )
  .add('InputText', () =>
    InputText(
      InputVariant.standard,
      'any label Text',
      false,
      true,
      (event: ChangeEvent<HTMLInputElement>) => useState(event.target.value),
      'NormalInput'
    )
  );
