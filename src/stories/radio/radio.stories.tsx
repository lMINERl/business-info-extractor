import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioDefault, RadioGroup } from '.';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

storiesOf('Radio', module)
  .addDecorator((story) => <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>{story()}</ThemeProvider>)
  .add('RadioDefault', () => {
    return (
      <React.Fragment>
        <RadioDefault
          content={{ label: 'Radio label1', value: true }}
          shape={{ labelPosition: 'top' }}
          actions={{ onClick: (e: any) => console.log(e.target.value) }}
        />
        <RadioDefault
          content={{ label: 'Radio label1', value: true }}
          shape={{ labelPosition: 'top' }}
          actions={{ onClick: (e: any) => console.log(e.target.value) }}
        />
        <RadioDefault
          content={{ label: 'Radio label1', value: true }}
          shape={{ labelPosition: 'top' }}
          actions={{ onClick: (e: any) => console.log(e.target.value) }}
        />
      </React.Fragment>
    );
  })
  .add('RadioGroup', () => {
    return (
      <React.Fragment>
        <RadioGroup
          content={{
            uniqueLables: ['Radio label1', 'Radio label2', 'Radio label3', 'Radio label4'],
            values: ['value1', 'value2', 'value3', 'value4'],
            checkedLabel: 'Radio label1'
          }}
          shape={{ labelPosition: 'right' }}
          actions={{ onClick: (e: any) => console.log(e.target.value) }}
        />
      </React.Fragment>
    );
  });
