import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Input, InputAdornment, IconButton, InputLabel, FilledInput, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export enum InputVariant {
  standard,
  outlined,
  fill
}

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const getInputType = (variant: InputVariant | undefined) => {
  switch (variant) {
    case InputVariant.fill:
      return FilledInput;
    case InputVariant.outlined:
      return OutlinedInput;
    default:
      return Input;
  }
};
const TelephoneMaskCustom = (props: TextMaskCustomProps) => {
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

export const InputPassword = (props: {
  variant?: InputVariant;
  changeHandle: any;
  content: {
    keyId: string;
    defaultValue?: string;
  };
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const label = useMemo(() => , [keyId]);

  const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let InputVariant = getInputType(props.variant);

  return (
    <div>
      <InputLabel htmlFor={props.content.keyId}>Password</InputLabel>
      <InputVariant
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => props.changeHandle({ target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value } } as any)}
        required={true}
        name={props.content.keyId}
        defaultValue={props.content.defaultValue}
        id={props.content.keyId}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export const InputTelephoneNumber = (props: {
  variant?: InputVariant;
  changeHandle: any;
  content: {
    keyId: string;
    defaultValue?: string;
  };
}): JSX.Element => {
  let InputVariant = getInputType(props.variant);
  return (
    <div>
      <InputLabel htmlFor={props.content.keyId}>Telephone</InputLabel>
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

export const InputText = (props: {
  variant?: InputVariant;
  isError?: boolean;
  isRequired?: boolean;
  changeHandle: any;
  content: {
    labelText: string;
    keyId: string;
    defaultValue?: string;
  };
}) => {
  let InputVariant = getInputType(props.variant);
  return (
    <div>
      <InputLabel htmlFor={props.content.keyId}>{props.content.labelText}</InputLabel>
      <InputVariant
        error={props.isError}
        required={props.isRequired}
        type="text"
        defaultValue={props.content.defaultValue}
        onChange={(e) => props.changeHandle({ target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value } } as any)}
        name={props.content.keyId}
        id={props.content.keyId}
      />
    </div>
  );
};

export default { InputText, InputTelephoneNumber, InputVariant, InputPassword };
