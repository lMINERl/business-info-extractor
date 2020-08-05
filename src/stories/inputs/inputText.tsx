import React, { useMemo } from 'react';
import { Input, FilledInput, OutlinedInput } from '@material-ui/core';
import LabelDefault from '../labels/labelDefault';

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
  };
}) => {
  let InputVariant = getInputType(props.variant);
  const inputLabel = useMemo(() => <LabelDefault content={{ text: props.content.labelText, forId: props.content.keyId }} />, [
    props.content.keyId,
    props.content.labelText
  ]);
  return (
    <div>
      {inputLabel}
      <InputVariant
        error={props.isError}
        required={props.isRequired}
        type="text"
        defaultValue={props.content.defaultValue}
        onChange={(e) => props.changeHandle({ target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value } } as any)}
        name={props.content.keyId}
        id={props.content.keyId}
        inputComponent={props.inputComponent as any}
      />
    </div>
  );
};

export default InputText;
