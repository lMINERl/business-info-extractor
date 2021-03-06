import React, { useReducer, useEffect, useMemo } from 'react';
import { IconButton } from '@material-ui/core';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import LabelForm from '../labels/labelForm';

interface CheckBoxIconShapes {
  checkedIcon: JSX.Element;
  unCheckedIcon: JSX.Element;
  intermidiateIcon?: JSX.Element;
}

interface CheckBoxIconValues {
  checkIconValue: any;
  unCheckedIconValue: any;
  intermidateIconValue?: any;
}

interface CheckBoxContent {
  keyId: string;
  label?: string;
  defaultValue?: string | number | readonly string[];
}

const defaultCheckboxIconShapes: CheckBoxIconShapes = {
  checkedIcon: <CheckBox />,
  unCheckedIcon: <CheckBoxOutlineBlank />,
  intermidiateIcon: <IndeterminateCheckBox />
};

const defaultCheckboxIconValues: CheckBoxIconValues = {
  unCheckedIconValue: false,
  checkIconValue: true,
  intermidateIconValue: undefined
};

const CheckboxDefault = (props: {
  handleChange: (event: any) => void;
  content: CheckBoxContent;
  options?: {
    iconShape?: CheckBoxIconShapes;
    iconValues?: CheckBoxIconValues;
  };
}) => {
  // State

  const options = props.options
    ? props.options
    : { iconShape: defaultCheckboxIconShapes, iconValues: defaultCheckboxIconValues };

  const iconShape = options.iconShape ? options.iconShape : defaultCheckboxIconShapes;
  const iconValue = options.iconValues ? options.iconValues : defaultCheckboxIconValues;

  const [optionsState, optionsDispatch] = useReducer(
    (state: any, action?: number) => {
      let newState = { ...state };
      let newValueArr = [...newState.valueArr];
      let newShapeArr = [...newState.shapeArr];
      if (options.iconValues && options.iconValues.intermidateIconValue) {
        newValueArr.push(iconValue.intermidateIconValue);
        newShapeArr.push(iconShape.intermidiateIcon);
      }
      return { ...newState, valueArr: newValueArr, shapeArr: newShapeArr };
    },
    {
      valueArr: [iconValue.unCheckedIconValue, iconValue.checkIconValue],
      shapeArr: [iconShape.unCheckedIcon, iconShape.checkedIcon]
    }
  );

  const [countState, changeCountDispatch] = useReducer(
    (state: any, payload?: any) => {
      let newState = { ...state };
      if (newState.count < optionsState.valueArr.length - 1) {
        newState.count = newState.count + 1;
      } else {
        newState.count = 0;
      }
      return { ...newState };
    },
    { count: 0 }
  );

  const [changeHandleState, changeHandleDispatch] = useReducer(
    (state: any, payload: any) => {
      let newState = { ...state };
      newState.value = optionsState.valueArr[payload];
      return { ...newState };
    },
    {
      name: props.content.keyId,
      id: props.content.keyId,
      value: optionsState.valueArr[countState.count]
    }
  );

  useEffect(() => {
    optionsDispatch();
  }, []);

  const formLabel = useMemo(() => {
    return props.content.label ? (
      <LabelForm content={{ text: props.content.label, forId: props.content.keyId }} />
    ) : null;
  }, [props.content.keyId, props.content.label]);

  const iconButton = useMemo(() => {
    return (
      <IconButton
        name={props.content.keyId}
        id={props.content.keyId}
        defaultValue={props.content.defaultValue}
        value={optionsState.valueArr[countState.count]}
        onClick={() => {
          changeCountDispatch();
          changeHandleDispatch(countState.count);
          props.handleChange({ target: { ...changeHandleState } } as any);
        }}
      >
        {optionsState.shapeArr[countState.count]}
      </IconButton>
    );
  }, [countState.count, props, optionsState, changeHandleState]);
  // effects
  return (
    <div>
      {iconButton}
      {formLabel}
    </div>
  );
};

export default CheckboxDefault;
