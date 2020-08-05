import React, { useMemo } from 'react';
import { makeStyles, Theme, Paper } from '@material-ui/core';
import ChipDefault from './chipDefault';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));
const ChipArray = (props: { list: string[]; onDeleteDispatch: any }) => {
  const classes = useStyles();
  //   const [chipData, setChipData] = React.useState(props.list);

  const chipList = useMemo(
    () =>
      props.list.length ? (
        props.list.map((value: string, index: number) => {
          return (
            <li key={index}>
              <ChipDefault text={value} options={{ onDelete: () => props.onDeleteDispatch({ valueToDel: value }) }} />
            </li>
          );
        })
      ) : (
        <ChipDefault text={'no Tags'} />
      ),
    [props]
  );

  return (
    <Paper component="ul" className={classes.root}>
      {chipList}
    </Paper>
  );
};
export default ChipArray;
