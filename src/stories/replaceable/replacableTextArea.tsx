import React from 'react';

const ReplaceableTextArea = (props: {
  mainElement: (props: any) => JSX.Element;
  change: any;
  defaultText: string;
  forceElement?: JSX.Element;
  shouldReplace?: boolean;
  shape?: { rows: number; cols: number };
}) => {
  const shape = props.shape ?? { rows: 0, cols: 0 };
  const replacer = React.useMemo(() => {
    return (
      <textarea
        onChange={props.change}
        value={props.defaultText}
        name="cardtext"
        cols={shape.cols}
        rows={shape.rows}
      />
    );
  }, [props.defaultText, props.change, shape]);

  return <React.Fragment>{props.shouldReplace ? replacer : <props.mainElement />}</React.Fragment>;
};

export default ReplaceableTextArea;
