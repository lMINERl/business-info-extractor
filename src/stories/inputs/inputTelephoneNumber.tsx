import React, { useMemo } from 'react';
import { getInputType } from './inputText';
import LabelDefault from '../labels/labelDefault';
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
export const TelephoneMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', '+', '2', ')', ' ', '0', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
      // placeholderChar={'\u2000'}
      placeholder={'(+2) 0XX-XXX-XXXXX'}
      showMask
    />
  );
};

const InputTelephoneNumber = (props: {
  variant?: 'standard' | 'outlined' | 'fill';
  changeHandle: any;
  content: {
    keyId: string;
    defaultValue?: string;
  };
}): JSX.Element => {
  let InputVariant = getInputType(props.variant);
  const inputLabel = useMemo(() => <LabelDefault content={{ text: 'Telephone', forId: props.content.keyId }} />, [props.content.keyId]);
  return (
    <div>
      {inputLabel}
      <InputVariant
        type="text"
        defaultValue={props.content.defaultValue}
        onChange={(e) => props.changeHandle({ target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value } } as any)}
        name={props.content.keyId}
        id={props.content.keyId}
        inputComponent={TelephoneMaskCustom as any}
      />
    </div>
  );
};

export default InputTelephoneNumber;
