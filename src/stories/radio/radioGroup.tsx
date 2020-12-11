import React, { useCallback } from 'react';
import uniqueId from 'lodash/uniqueId';
import RadioDefault from './radioDefault';

const RadioGroup = (props: {
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
      <div
        style={{ display: 'inline-flex' }}
        key={uniqueId('radioGroup-')}
        onClick={() => setChecked(isChecked()(lbls[index]) ? '' : lbls[index])}
      >
        <RadioDefault
          actions={{ onClick }}
          shape={{ labelPosition: labelPosition }}
          content={{
            label: lbls[index],
            value: isChecked()(lbls[index]) ? '' : v,
            checked: isChecked()(lbls[index])
          }}
        />
      </div>
    ));
  }, [values, onClick, labelPosition, lbls, isChecked]);

  return <React.Fragment>{Radios}</React.Fragment>;
};
export default RadioGroup;
