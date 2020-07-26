import React from 'react';
import { EchartDefault, EchartSkills } from '.';
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
  ));
