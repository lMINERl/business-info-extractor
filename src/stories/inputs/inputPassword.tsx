import React, { useState, useMemo } from 'react';
import LabelDefault from '../labels/labelDefault';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { getInputType } from './inputText';

const InputPassword = (props: {
  variant?: 'standard' | 'outlined' | 'fill';
  changeHandle: any;
  isError?: boolean;
  content: {
    keyId: string;
    defaultValue?: string;
    placeholder?: string;
    errotText?: string;
  };
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const label = useMemo(() => , [keyId]);

  let InputVariant = getInputType(props.variant);
  const inputLabel = useMemo(
    () => <LabelDefault content={{ text: 'Password', forId: props.content.keyId }} />,
    [props.content.keyId]
  );
  const inputAdornment = useMemo(
    () => (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setShowPassword(!showPassword)}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
    [showPassword]
  );
  const errorText = useMemo(
    () => (
      <Typography variant="inherit" style={{ color: 'red' }}>
        {props.isError ? props.content.errotText : ''}
      </Typography>
    ),
    [props.isError, props.content.errotText]
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {inputLabel}
      <InputVariant
        type={showPassword ? 'text' : 'password'}
        onChange={(e) =>
          props.changeHandle({
            target: { name: props.content.keyId, id: props.content.keyId, value: e.target.value }
          } as any)
        }
        required={true}
        error={props.isError}
        name={props.content.keyId}
        defaultValue={props.content.defaultValue}
        id={props.content.keyId}
        placeholder={props.content.placeholder}
        endAdornment={inputAdornment}
      />
      {errorText}
    </div>
  );
};

export default InputPassword;
