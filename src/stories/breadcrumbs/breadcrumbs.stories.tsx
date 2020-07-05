import React from 'react';
import { storiesOf } from '@storybook/react';
import { BreadcrumbsDefault } from '.';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CheckboxDefault } from '../checkbox';

storiesOf('Breadcrumbs', module)
  .addDecorator((story) => <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>{story()}</ThemeProvider>)
  .add('BreadcrumbsDefault', () => {
    const [breadcrumbsState, dispatchCurrentLocation] = React.useReducer(
      (
        state: { prevLoc: { text: string; href: string }[]; currLoc: { text: string; href: string } },
        action: { text: string; href: string; index: number }
      ) => {
        let newState = { ...state };
        let newPrevLoc = [...newState.prevLoc];
        let newCurrLoc = { text: action.text, href: action.href };
        newPrevLoc = newPrevLoc.slice(0, action.index);
        return { ...state, prevLoc: newPrevLoc, currLoc: newCurrLoc };
      },
      {
        prevLoc: [
          { text: 'Home', href: `/` },
          { text: 'Contacts', href: `/contacts` }
        ],
        currLoc: { text: 'Ahmed', href: `/ahmed` }
      }
    );
    console.log(breadcrumbsState);
    return (
      <BrowserRouter>
        <BreadcrumbsDefault
          dispatchCurrentLocation={dispatchCurrentLocation}
          currentLocation={{ text: breadcrumbsState.currLoc.text, href: breadcrumbsState.currLoc.href }}
          previousLocations={breadcrumbsState.prevLoc}
        />
        <Switch>
          <Route path="/ahmed" exact component={() => <CheckboxDefault content={{ keyId: 'a', label: 'Ahmed' }} handleChange={() => {}} />} />
          <Route path="/contacts" exact component={() => <CheckboxDefault content={{ keyId: 'c', label: 'Contacts' }} handleChange={() => {}} />} />
          <Route path="/" exact component={() => <CheckboxDefault content={{ keyId: 'h', label: 'Home' }} handleChange={() => {}} />} />
        </Switch>
      </BrowserRouter>
    );
  });
