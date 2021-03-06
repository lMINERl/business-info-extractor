import React from 'react';
import Button from '@material-ui/core/Button';

const ReplaceableButton = (props: {
  mainElement: (props: any) => JSX.Element;
  click: any;
  defaultText: string;
  forceElement?: JSX.Element;
  shouldReplace?: boolean;
}) => {
  const replacer = React.useMemo(() => {
    return (
      <Button variant="outlined" color="secondary" onClick={props.click}>
        {props.defaultText}
      </Button>
    );
  }, [props.defaultText, props.click]);

  return <React.Fragment>{props.shouldReplace ? replacer : <props.mainElement />}</React.Fragment>;
};

export default ReplaceableButton;
