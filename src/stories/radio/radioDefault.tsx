import React, { useMemo } from 'react';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import uniqueId from 'lodash/uniqueId';

const RadioDefault = (props: {
  shape?: {
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  };
  content?: { label?: string; value?: any; checked?: boolean };
  actions?: {
    onClick?: any;
  };
}) => {
  const id = uniqueId('radioLabel-');
  const content = props.content ?? { label: '', value: '', checked: false };
  const lbl = content.label ?? '';
  const value = content.value ?? '';
  const [checked, setChecked] = React.useState<boolean>(content.checked ?? false);

  const shape = props.shape ?? { labelPosition: 'right' };
  const labelPosition = shape.labelPosition ?? 'right';

  const actions = props.actions ?? { onClick: () => {} };
  const onClick = actions.onClick ?? function () {};
  //   const selected = props.

  const label = useMemo(() => {
    return (
      <label
        onClick={(e) => {
          onClick({ target: { value: value } });
          setChecked(!checked);
        }}
        htmlFor={id}
      >
        <Typography component="h6">{lbl}</Typography>
      </label>
    );
  }, [lbl, id, checked, onClick, value]);

  const flexDirection =
    labelPosition === 'right'
      ? 'row'
      : labelPosition === 'left'
      ? 'row-reverse'
      : labelPosition === 'bottom'
      ? 'column'
      : labelPosition === 'top'
      ? 'column-reverse'
      : undefined;

  return (
    <div style={{ display: 'inline-flex', flexDirection: flexDirection, alignItems: 'center' }}>
      <Radio
        id={id}
        checked={checked}
        value={value}
        onClick={(e: any) => {
          onClick(e);
          setChecked(!checked);
        }}
      />
      {label}
    </div>
  );
};
export default RadioDefault;
