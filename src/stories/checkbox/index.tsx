import React, { useReducer, useEffect } from 'react';
import { FormLabel, IconButton } from '@material-ui/core';
import { FavoriteBorder, Favorite, CheckBox, CheckBoxOutlineBlank, IndeterminateCheckBox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const checkboxDefaultStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
});

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
  defaultValue: string | number | readonly string[] | undefined;
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

export const CheckboxDefault = (props: {
  handleChange: (event: any) => void;
  content: CheckBoxContent;
  options?: {
    iconShape?: CheckBoxIconShapes;
    iconValues?: CheckBoxIconValues;
  };
}) => {
  // Styles
  const classes = checkboxDefaultStyles();
  // State

  const options = props.options ? props.options : { iconShape: defaultCheckboxIconShapes, iconValues: defaultCheckboxIconValues };

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

  // effects
  return (
    <div className={classes.root}>
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
      {props.content.label ? <FormLabel htmlFor={props.content.keyId}>{props.content.label}</FormLabel> : null}
    </div>
  );
};

export const CheckboxAddFavorite = (handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, keyId: string) => {
  return (
    <CheckboxDefault
      handleChange={handleChange}
      content={{ keyId: keyId, defaultValue: undefined }}
      options={{
        iconShape: { unCheckedIcon: <FavoriteBorder />, checkedIcon: <Favorite /> }
      }}
    />
  );
};
