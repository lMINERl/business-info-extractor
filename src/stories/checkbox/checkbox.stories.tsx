import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

// import CheckboxDefault from './checkboxDefault';
// import CheckboxAddFavorite from './checkboxAddFavorite';

const CheckboxAddFavorite = React.lazy(() => {
  return import('./checkboxAddFavorite');
});

const CheckboxDefault = React.lazy(() => {
  return import('./checkboxDefault');
});

storiesOf('Checkbox', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('CheckboxDefault', () => (
    <React.Suspense fallback={<div>...</div>}>
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
    </React.Suspense>
  ))
  .add('CheckBoxAddFavorite', () => (
    <React.Suspense fallback={<div>...</div>}>
      <CheckboxAddFavorite
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log({ [event.target.name]: event.target.value })
        }
        keyId="key2"
      />
    </React.Suspense>
  ));
