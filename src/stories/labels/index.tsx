import React from 'react';
import { InputLabel, FormLabel } from '@material-ui/core';

export const LabelDefault = (props: { content: { text: string; forId?: string } }) => {
  return <InputLabel htmlFor={props.content.forId}>{props.content.text}</InputLabel>;
};

export const FormLabelDefault = (props: { content: { text: string; forId?: string } }) => {
  return <FormLabel htmlFor={props.content.forId}>{props.content.text}</FormLabel>;
};
