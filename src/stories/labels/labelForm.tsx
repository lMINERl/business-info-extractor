import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
const LabelForm = (props: { content: { text: string; forId?: string } }) => {
  return <FormLabel htmlFor={props.content.forId}>{props.content.text}</FormLabel>;
};

export default LabelForm;
