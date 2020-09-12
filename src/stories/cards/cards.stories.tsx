import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import CardDefault from './cardDefault';
import { CardVariant } from './cardDefault';
import CardSkeleton from './cardSkeleton';

// import CardComplex from './cardComplex';

const CardComplex = React.lazy(() => {
  return import('./cardComplex');
});

storiesOf('Card', module)
  .addDecorator((story) => (
    <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
      {/* <div key={Date.now()} style={{ marginLeft: '30%', display: 'flex', paddingTop: '100px', width: '' }}> */}
      {story()}
      {/* </div> */}
    </ThemeProvider>
  ))
  .add('CardDefault', () => CardDefault(CardVariant.outlined))
  .add('CardComplex', () => (
    <React.Suspense fallback={<CardSkeleton />}>
      <CardComplex
        variant={CardVariant.elevation}
        cardShape={{
          pannel: {
            component: (
              <React.Fragment>
                <Typography paragraph>Paragraph 1</Typography>
                <Typography paragraph>Paragraph 2</Typography>
                <Typography> anything </Typography>
              </React.Fragment>
            )
          },
          settings: { handleSettings: () => console.log('Settings Clicked') },
          favourate: { handleFavourate: () => console.log('Favourate Clicked') },
          share: { handleShare: () => console.log('Share Clicked') },
          AvatarChar: 'R'
          // image: {
          //   title: 'Paella dish',
          //   path: ''
          // }
        }}
        cardContent={{
          header: {
            title: 'Shrimp and Chorizo Paella',
            subTitle: 'September 14, 2016'
          },
          description:
            'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the\r mussels, if you like.'
        }}
      />
    </React.Suspense>
  ))
  .add('CardSkeleton', () => {
    return (
      <React.Suspense fallback={<CardSkeleton />}>
        <CardSkeleton />
      </React.Suspense>
    );
  });
