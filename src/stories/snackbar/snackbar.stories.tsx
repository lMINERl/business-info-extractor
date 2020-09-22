import React, { useReducer } from 'react';

import { storiesOf } from '@storybook/react';
import SnackbarDefault from './snackbarDefault';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

// const [openSnack, setOpenSnack] = useState<boolean>(false);

storiesOf('Snackbar', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>{story()}</ThemeProvider>
  ))
  .add('SnackbarDefault', () => {
    const [snack, dispatchSnack] = useReducer(
      (state: { open: boolean }, action: 'close' | 'open') => {
        const newState = { ...state };
        switch (action) {
          case 'open':
            newState.open = true;
            break;
          default:
            newState.open = false;
            break;
        }
        return newState;
      },
      { open: false }
    );
    return (
      <React.Fragment>
        <button onClick={() => dispatchSnack('open')}>click me</button>
        <SnackbarDefault message="i love snacks" open={snack.open} trigger={dispatchSnack} />
      </React.Fragment>
    );
  });
