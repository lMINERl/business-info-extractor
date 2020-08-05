import React from 'react';
import { storiesOf } from '@storybook/react';
import ChipDefault from './chipDefault';
import ChipArray from './chipArray';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

storiesOf('Chip', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('ChipDefault', () => <ChipDefault text="React Chip" options={{ onDelete: () => {} }} />)
  .add('ChipArray', () => {
    const [chipData, dispatchDelChip] = React.useReducer(
      (state: { list: string[] }, action: { valueToDel: string }) => {
        let newState = { ...state };
        let newList = [...newState.list];
        newList = newList.filter((value) => value !== action.valueToDel);
        return { ...state, list: [...newList] };
      },
      { list: ['Angular', 'jQuery', 'Polymer', 'React', 'vue.js'] }
    );

    return <ChipArray list={chipData.list} onDeleteDispatch={dispatchDelChip} />;
  });
