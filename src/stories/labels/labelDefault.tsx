import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

const LabelDefault = (props: { content: { text: string; forId?: string } }) => {
  return <InputLabel htmlFor={props.content.forId}>{props.content.text}</InputLabel>;
};

export default LabelDefault;
