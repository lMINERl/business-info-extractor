import React, { useMemo, useCallback } from 'react';
import { Radio, Typography } from '@material-ui/core';
import uniqueId from 'lodash/uniqueId';
export const RadioDefault = (props: {
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
        onClick={(e) => {
          onClick(e);
          setChecked(!checked);
        }}
      />
      {label}
    </div>
  );
};

export const RadioGroup = (props: {
  shape?: { labelPosition?: 'top' | 'bottom' | 'left' | 'right' };
  content: { uniqueLables: string[]; values: any[]; checkedLabel: string };
  actions?: {
    onClick?: any;
  };
}) => {
  const content = props.content ?? { uniqueLables: [], value: [], checkedLabel: '' };
  const values = content.values ?? [];
  const lbls = content.uniqueLables ?? Array(values.length).fill('');
  const [checked, setChecked] = React.useState<string>(content.checkedLabel ?? '');

  const shape = props.shape ?? { labelPosition: 'right' };
  const labelPosition = shape.labelPosition ?? 'right';

  const actions = props.actions ?? { onClick: () => {} };
  const onClick = actions.onClick ?? function () {};

  const isChecked = useCallback(() => (str: string) => str === checked, [checked]);

  const Radios = React.useMemo(() => {
    return values.map((v: any, index: number) => (
      <div style={{ display: 'inline-flex' }} key={uniqueId('radioGroup-')} onClick={() => setChecked(isChecked()(lbls[index]) ? '' : lbls[index])}>
        <RadioDefault
          actions={{ onClick }}
          shape={{ labelPosition: labelPosition }}
          content={{ label: lbls[index], value: isChecked()(lbls[index]) ? '' : v, checked: isChecked()(lbls[index]) }}
        />
      </div>
    ));
  }, [values, onClick, labelPosition, lbls, isChecked]);

  return <React.Fragment>{Radios}</React.Fragment>;
};
