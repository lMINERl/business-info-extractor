import React, { useState, useReducer, useEffect } from 'react';
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

export const CheckboxDefault = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  content: CheckBoxContent,
  options: {
    iconShape?: CheckBoxIconShapes;
    iconValues?: CheckBoxIconValues;
  } = {
    iconShape: defaultCheckboxIconShapes,
    iconValues: defaultCheckboxIconValues
  }
) => {
  // Styles
  const classes = checkboxDefaultStyles();
  // State
  const [countState, setCountState] = useState<number>(0);

  const iconShape = options.iconShape ? options.iconShape : defaultCheckboxIconShapes;
  const iconValue = options.iconValues ? options.iconValues : defaultCheckboxIconValues;

  const [state, dispatch] = useReducer(
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

  useEffect(() => {
    dispatch();
  }, []);

  // effects
  React.useEffect(() => {
    handleChange({
      target: {
        name: content.keyId,
        id: content.keyId,
        value: state.valueArr[countState]
      }
    } as any);
  }, [countState, content.keyId]);

  const handleClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (countState < state.valueArr.length - 1) {
      setCountState(countState + 1);
    } else {
      setCountState(0);
    }
  };
  return (
    <div className={classes.root}>
      <IconButton name={content.keyId} id={content.keyId} value={state.valueArr[countState]} onClick={handleClick}>
        {state.shapeArr[countState]}
      </IconButton>
      {content.label ? <FormLabel htmlFor={content.keyId}>{content.label}</FormLabel> : null}
    </div>
  );
};

export const CheckboxAddFavorite = (handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, keyId: string) => {
  return CheckboxDefault(
    handleChange,
    { keyId: keyId },
    {
      iconShape: { unCheckedIcon: <FavoriteBorder />, checkedIcon: <Favorite /> }
    }
  );
};
