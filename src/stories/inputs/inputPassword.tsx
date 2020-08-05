import React, { useState, useMemo } from 'react';
import LabelDefault from '../labels/labelDefault';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { InputAdornment, IconButton } from '@material-ui/core';
import { getInputType } from './inputText';

const InputPassword = (props: {
  variant?: 'standard' | 'outlined' | 'fill';
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
  const inputLabel = useMemo(() => <LabelDefault content={{ text: 'password', forId: props.content.keyId }} />, [props.content.keyId]);
  return (
    <div>
      {inputLabel}
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

export default InputPassword;
