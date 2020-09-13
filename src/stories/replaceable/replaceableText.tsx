import React from 'react';
import InputText from '../inputs/inputText';

const ReplaceableText = (props: {
  mainElement: (props: any) => JSX.Element;
  change: any;
  defaultText: string;
  forceElement?: JSX.Element;
  shouldReplace?: boolean;
}) => {
  const replacer = React.useMemo(() => {
    return (
      <InputText
        content={{ keyId: 'text', labelText: '', defaultValue: props.defaultText }}
        changeHandle={props.change}
        variant="outlined"
      />
    );
  }, [props.defaultText, props.change]);

  return <React.Fragment>{props.shouldReplace ? replacer : <props.mainElement />}</React.Fragment>;
};

export default ReplaceableText;
