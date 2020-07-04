import React, { useMemo } from 'react';
import { useMediaQuery, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, useTheme } from '@material-ui/core';

export const DialogDefault = (props: {
  open: boolean;
  onCloseHandle: any;
  shape?: { buttonAgree?: { text: string; handle: any }; buttonClose?: { text: string; handle: any } };
  content?: { title?: string; description?: string };
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const shape = props.shape ? props.shape : null;
  const agree = shape ? (shape.buttonAgree ? shape.buttonAgree : null) : null;
  const close = shape ? (shape.buttonClose ? shape.buttonClose : null) : null;

  const content = props.content ? props.content : { title: '', description: '' };
  const title = content.title ? content.title : '';
  const description = content.description ? content.description : '';

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

  const dialogTitle = useMemo(() => <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>, [title]);
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
      <Dialog fullScreen={fullScreen} open={props.open} onClose={() => props.onCloseHandle()} aria-labelledby="responsive-dialog-title">
        {dialogTitle}
        {dialogContent}
        {dialogActions}
      </Dialog>
    </div>
  );
};
