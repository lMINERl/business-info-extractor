import React, { useMemo } from 'react';
import { TreeItem, TreeItemProps, TreeView } from '@material-ui/lab';
import { withStyles, createStyles, Theme, Collapse, makeStyles, fade } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { useSpring, animated } from 'react-spring/web.cjs';
import { CloseSquare, PlusSquare, MinusSquare } from '../svg';

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` }
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = withStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      '& .close': {
        opacity: 0.3
      }
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
    }
  })
)((props: TreeItemProps) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400
    }
  })
);

const GenerateTreeObjectEntries = (props: { arrOfEntries: any; objKey: string; value: any; count: number }): any => {
  if (props.count === props.arrOfEntries.length) {
    return null;
  }
  const rslt =
    props.count + 1 < props.arrOfEntries.length ? (
      <GenerateTreeObjectEntries
        arrOfEntries={props.arrOfEntries}
        objKey={props.arrOfEntries[props.count + 1][0]}
        value={props.arrOfEntries[props.count + 1][1]}
        count={props.count + 1}
      />
    ) : null;

  if (typeof props.value === 'object') {
    let entries = Object.entries(props.value);

    return (
      <React.Fragment>
        <StyledTreeItem nodeId={props.objKey} label={props.objKey}>
          <GenerateTreeObjectEntries arrOfEntries={entries} objKey={entries[0][0]} value={entries[0][1]} count={0} />
        </StyledTreeItem>
        {rslt}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <StyledTreeItem nodeId={props.objKey} label={props.value} />
        {rslt}
      </React.Fragment>
    );
  }
};

export const TreeDefault = (props: {
  nestedObject: any;
  shapes?: { collapseIcon?: JSX.Element; expandIcon?: JSX.Element; closeIcon?: JSX.Element };
}) => {
  const classes = useStyles();

  const shapes = props.shapes ? props.shapes : { collapseIcon: <MinusSquare />, expandIcon: <PlusSquare />, closeIcon: <CloseSquare /> };

  const closeIcon = shapes.closeIcon ? shapes.closeIcon : null;
  const expandIcon = shapes.expandIcon ? shapes.expandIcon : <PlusSquare />;
  const collapseIcon = shapes.collapseIcon ? shapes.collapseIcon : <MinusSquare />;

  const closeSquare = useMemo(() => closeIcon, [closeIcon]);
  const plusSquare = useMemo(() => expandIcon, [expandIcon]);
  const minusSquare = useMemo(() => collapseIcon, [collapseIcon]);

  const objectEntries = Object.entries(props.nestedObject);
  const tree = useMemo(
    () => <GenerateTreeObjectEntries arrOfEntries={objectEntries} objKey={objectEntries[0][0]} value={objectEntries[0][1]} count={0} />,
    [objectEntries]
  );
  return (
    <TreeView className={classes.root} defaultEndIcon={closeSquare} defaultExpandIcon={plusSquare} defaultCollapseIcon={minusSquare}>
      {tree}
    </TreeView>
  );
};
