import React from 'react';
import { Snackbar, Slide, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export const SnackbarDefault = (props: { message: string; open: boolean; trigger: (action: 'open' | 'close') => void }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.open}
      autoHideDuration={2000}
      onClose={() => props.trigger('close')}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      message={props.message}
      key={props.open ? 'right' : ''}
      action={
        <IconButton aria-label="close" color="inherit" onClick={() => props.trigger('close')}>
          <Close />
        </IconButton>
      }
    />
  );
};
