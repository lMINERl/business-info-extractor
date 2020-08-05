import React, { useReducer } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme, Button } from '@material-ui/core';
import DialogDefault from './dialogDefault';

// const [openSnack, setOpenSnack] = useState<boolean>(false);

storiesOf('Dialog', module)
  .addDecorator((story) => <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>{story()}</ThemeProvider>)
  .add('DialogDefault', () => {
    const [dialog, dispatchDialog] = useReducer(
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
        <Button variant="outlined" color="primary" onClick={() => dispatchDialog('open')}>
          Open responsive dialog
        </Button>
        <DialogDefault
          content={{
            title: `Use Google's location service?`,
            description: `Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`
          }}
          open={dialog.open}
          onCloseHandle={() => dispatchDialog('close')}
          shape={{
            buttonClose: {
              text: 'Close',
              handle: () => dispatchDialog('close')
            },
            buttonAgree: { text: 'Ok', handle: () => dispatchDialog('close') }
          }}
        />
      </React.Fragment>
    );
  });
