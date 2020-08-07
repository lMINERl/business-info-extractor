import React, { useMemo } from 'react';
import { Input, FilledInput, OutlinedInput, InputAdornment, IconButton, Typography } from '@material-ui/core';
import LabelDefault from '../labels/labelDefault';
import { VisibilityOff } from '@material-ui/icons';

export const getInputType = (variant: 'standard' | 'outlined' | 'fill' | undefined) => {
  switch (variant) {
    case 'fill':
      return FilledInput;
    case 'outlined':
      return OutlinedInput;
    default:
      return Input;
  }
};

const InputText = (props: {
  variant?: 'standard' | 'outlined' | 'fill';
  isError?: boolean;
  isRequired?: boolean;
  changeHandle: any;
  inputComponent?: JSX.Element;
  content: {
    labelText: string;
    keyId: string;
    defaultValue?: string;
    placeholder?: string;
    errorText?: string;
  };
}) => {
  let InputVariant = getInputType(props.variant);
  const inputLabel = useMemo(() => <LabelDefault content={{ text: props.content.labelText, forId: props.content.keyId }} />, [
    props.content.keyId,
    props.content.labelText
  ]);
  const inputAdorment = useMemo(
    () => (
      <InputAdornment position="end" style={{ width: '0%' }}>
        <IconButton style={{ visibility: 'hidden' }} aria-label="toggle password visibility">
          <VisibilityOff />
        </IconButton>
      </InputAdornment>
    ),
    []
  );
  const errorText = useMemo(
    () => (
      <Typography variant="inherit" style={{ color: 'red' }}>
        {props.isError ? props.content.errorText : ''}
      </Typography>
    ),
    [props.isError, props.content.errorText]
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {inputLabel}
      <InputVariant
        className=""
        error={props.isError}
        required={props.isRequired}
        type="text"
        defaultValue={props.content.defaultValue}
        onChange={(e) => props.changeHandle({ target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value } } as any)}
        name={props.content.keyId}
        id={props.content.keyId}
        placeholder={props.content.placeholder}
        inputComponent={props.inputComponent as any}
        endAdornment={inputAdorment}
      />
      {errorText}
    </div>
  );
};

export default InputText;
