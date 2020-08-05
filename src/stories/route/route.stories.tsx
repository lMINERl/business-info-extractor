import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import RouteDefault from './routeDefault';

storiesOf('Route', module)
  .addDecorator((story) => <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>{story()}</ThemeProvider>)
  .add('RouteDefault', () => {
    const [selected, setSelected] = React.useState('A');
    const A = (props: { a: string }) => <div>this is component{props.a}</div>;
    const B = (props: { b: string }) => <div>this is component{props.b}</div>;
    const C = (props: { c: string }) => <div>this is component{props.c}</div>;
    return (
      <div>
        <div style={{ display: 'inline-flex' }}>
          <button onClick={() => setSelected('A')}>Select A</button>
          <button onClick={() => setSelected('B')}>Select B</button>
          <button onClick={() => setSelected('C')}>Select C</button>
        </div>
        <RouteDefault
          selectedKey={selected}
          components={[
            { key: 'A', component: A, props: { a: 'A' } },
            { key: 'B', component: B, props: { b: 'B' } },
            { key: 'C', component: C, props: { c: 'C' } }
          ]}
        />
      </div>
    );
  });
