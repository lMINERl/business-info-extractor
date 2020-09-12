import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import BackdropDefault from '../backdrop/backdropDefault';

const ChipDefault = React.lazy(() => {
  return import('./chipDefault');
});
const ChipArray = React.lazy(() => {
  return import('./chipArray');
});

storiesOf('Chip', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      <div key={Date.now()} style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        {story()}
      </div>
    </ThemeProvider>
  ))
  .add('ChipDefault', () => (
    <React.Suspense fallback={<BackdropDefault />}>
      <ChipDefault text="React Chip" options={{ onDelete: () => {} }} />
    </React.Suspense>
  ))
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

    return (
      <React.Suspense fallback={<BackdropDefault />}>
        <ChipArray list={chipData.list} onDeleteDispatch={dispatchDelChip} />
      </React.Suspense>
    );
  });
