import React, { useState, ChangeEvent } from 'react';
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
const getInputType = (variant: InputVariant) => {
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

export const InputPassword = (variant: InputVariant, changeHandle: (event: ChangeEvent<HTMLInputElement>) => void, key: string) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let InputVariant = getInputType(variant);
  return (
    <div>
      <InputLabel htmlFor={key}>Password</InputLabel>
      <InputVariant
        type={showPassword ? 'text' : 'password'}
        onChange={changeHandle}
        required={true}
        name={key}
        defaultValue=""
        id={key}
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

export const InputTelephoneNumber = (
  variant: InputVariant,
  changeHandle: (event: ChangeEvent<HTMLInputElement>) => void,
  key: string
): JSX.Element => {
  let InputVariant = getInputType(variant);
  return (
    <div>
      <InputLabel htmlFor={key}>Telephone</InputLabel>
      <InputVariant
        type="text"
        // value={value}
        onChange={changeHandle}
        name={key}
        id={key}
        inputComponent={TelephoneMaskCustom as any}
      />
    </div>
  );
};

export const InputText = (
  variant: InputVariant,
  labelText: string,
  isError: boolean,
  isRequired: boolean,
  changeHandle: (event: ChangeEvent<HTMLInputElement>) => void,
  key: string
) => {
  let InputVariant = getInputType(variant);
  return (
    <div>
      <InputLabel htmlFor={key}>{labelText}</InputLabel>
      <InputVariant error={isError} required={isRequired} type="text" onChange={changeHandle} name={key} id={key} />
    </div>
  );
};
