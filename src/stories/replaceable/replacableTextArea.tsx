import React from 'react';

const ReplaceableTextArea = (props: {
  mainElement: (props: any) => JSX.Element;
  change: any;
  defaultText: string;
  forceElement?: JSX.Element;
  shouldReplace?: boolean;
  shape: { rows: number; cols: number };
}) => {
  const replacer = React.useMemo(() => {
    return (
      <textarea
        onChange={props.change}
        defaultValue={props.defaultText}
        name="cardtext"
        cols={props.shape.cols}
        rows={props.shape.rows}
      />
    );
  }, [props.defaultText, props.change, props.shape]);

  return <React.Fragment>{props.shouldReplace ? replacer : <props.mainElement />}</React.Fragment>;
};

export default ReplaceableTextArea;
