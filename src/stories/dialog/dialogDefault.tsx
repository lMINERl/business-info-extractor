import React, { useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { useTheme } from '@material-ui/core';

const DialogDefault = (props: {
  open: boolean;
  onCloseHandle: any;
  shape?: {
    buttonAgree?: { text: string; handle: any };
    buttonClose?: { text: string; handle: any };
  };
  content?: { title?: string; description?: string };
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const shape = props.shape ?? null;
  const agree = shape ? shape.buttonAgree ?? null : null;
  const close = shape ? shape.buttonClose ?? null : null;

  const content = props.content ?? { title: '', description: '' };
  const title = content.title ?? '';
  const description = content.description ?? '';

  const closeButton = useMemo(
    () =>
      close ? (
        <Button autoFocus onClick={close.handle}>
          {close.text}
        </Button>
      ) : null,
    [close]
  );

  const agreeButton = useMemo(
    () =>
      agree ? (
        <Button onClick={agree.handle} autoFocus>
          {agree.text}
        </Button>
      ) : null,
    [agree]
  );

  const dialogTitle = useMemo(
    () => <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>,
    [title]
  );
  const dialogContent = useMemo(
    () => (
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
    ),
    [description]
  );

  const dialogActions = useMemo(
    () => (
      <DialogActions>
        {agreeButton}
        {closeButton}
      </DialogActions>
    ),
    [closeButton, agreeButton]
  );

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={() => props.onCloseHandle()}
        aria-labelledby="responsive-dialog-title"
      >
        {dialogTitle}
        {dialogContent}
        {dialogActions}
      </Dialog>
    </div>
  );
};

export default DialogDefault;
