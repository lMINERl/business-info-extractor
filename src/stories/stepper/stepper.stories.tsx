import React from 'react';

import { storiesOf } from '@storybook/react';
import { ThemeProvider, createMuiTheme, Grid } from '@material-ui/core';
import CardSkeleton from '../cards/cardSkeleton';
import BackdropDefault from '../backdrop/backdropDefault';

const StepperDefault = React.lazy(() => {
  return import('./stepperDefault');
});

// const [openSnack, setOpenSnack] = useState<boolean>(false);

storiesOf('Stepper', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'light' } })}>{story()}</ThemeProvider>
  ))
  .add('StepperDefault', () => {
    return (
      <React.Suspense fallback={<BackdropDefault />}>
        <StepperDefault
          shouldSkip
          stepComplete
          shouldBack
          shouldReset
          content={{
            steps: [
              {
                message: 'Select master blaster campaign settings',
                description: 'Select campaign settings...'
              },
              { message: 'Create an ad group', description: 'What is an ad group anyways?' },
              { message: 'Create an ad', description: 'This is the bit I really care about!' }
            ],
            stepComponents: [
              <Grid style={{ margin: '0 auto' }} item xs={12} sm={6} md={4} lg={3} xl={3}>
                Component1
                <CardSkeleton />
              </Grid>,
              <Grid style={{ margin: '0 auto' }} item xs={12} sm={6} md={4} lg={3} xl={3}>
                Component2
                <CardSkeleton />
              </Grid>,
              <Grid style={{ margin: '0 auto' }} item xs={12} sm={6} md={4} lg={3} xl={3}>
                Component3
                <CardSkeleton />
              </Grid>
            ]
          }}
        />
      </React.Suspense>
    );
  });
