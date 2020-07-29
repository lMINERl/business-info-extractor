import React from 'react';
import { EchartDefault, EchartSkills, EchartGraph, EchartNetwork } from '.';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

storiesOf('Echart', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('EchartDefault', () => (
    <EchartDefault
      content={{
        title: 'Customized Pie',
        data: [
          { value: 153, name: 'lowestValue' },
          { value: 335, name: 'upper mid value' },
          { value: 310, name: 'lower mid value' },
          { value: 274, name: 'upper low value' },
          { value: 235, name: 'lower low value' },
          { value: 400, name: 'largest value' }
        ],
        dataLabel: 'sales'
      }}
    />
  ))
  .add('EchartSkills', () => (
    <EchartSkills
      content={{
        title: 'Player',
        indicators: [
          { text: 'Attack', max: 100 },
          { text: 'Speed', max: 100 },
          { text: 'Defence', max: 100 },
          { text: 'Magic', max: 100 }
        ],
        legends: ['Sp1', 'Sp2'],
        data: [
          { value: [60, 73, 85, 40], legendName: 'Sp1' },
          { value: [85, 90, 90, 95, 95], legendName: 'Sp2' }
        ]
      }}
    />
  ))
  .add('EchartGraph', () => (
    <EchartGraph
      content={{
        title: 'salesman',
        data: [
          {
            name: 'ax',
            value: 5,
            children: [
              { name: 'az', weight: 1 },
              { name: 'ay', weight: 2 }
            ]
          },
          {
            name: 'as',
            value: 5,
            children: [
              { name: 'az', weight: 1 },
              { name: 'ay', weight: 4 }
            ]
          },
          {
            name: 'ay',
            value: 5,
            children: [
              { name: 'aw', weight: 1 },
              { name: 'ae', weight: 1 },
              { name: 'az', weight: 1 }
            ]
          },
          {
            name: 'az',
            value: 5,
            children: [
              { name: 'aw', weight: 1 },
              { name: 'ae', weight: 1 },
              { name: 'ax', weight: 1 },
              { name: 'ay', weight: 1 }
            ]
          },
          { name: 'aw', value: 5, children: [] },
          { name: 'ae', value: 5, children: [] }
        ]
      }}
    />
  ))
  // node names should be regex /node[0-9]*|output[0-9]*|input[0-9]*/gm
  .add('EchartNetwork', () => (
    <EchartNetwork
      content={{
        title: 'salesman',
        data: [
          {
            name: 'input1',
            value: 5,
            children: [
              { name: 'node1', weight: 1 },
              { name: 'node3', weight: 2 }
            ]
          },
          {
            name: 'input2',
            value: 5,
            children: [
              { name: 'node1', weight: 1 },
              { name: 'node3', weight: 4 }
            ]
          },
          {
            name: 'node1',
            value: 5,
            children: [
              { name: 'output1', weight: 1 },
              { name: 'output2', weight: 1 }
            ]
          },
          {
            name: 'node2',
            value: 5,
            children: [
              { name: 'output1', weight: 1 },
              { name: 'output2', weight: 1 }
            ]
          },
          {
            name: 'node3',
            value: 5,
            children: [
              { name: 'output1', weight: 1 },
              { name: 'output2', weight: 1 }
            ]
          },
          { name: 'output1', value: 5, children: [] },
          { name: 'output2', value: 5, children: [] }
        ]
      }}
    />
  ));
