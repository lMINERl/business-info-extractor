import '../_config';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import CardDefault from './cardDefault';
import { CardVariant } from './cardDefault';
import CardSkeleton from './cardSkeleton';
import { Add, DeleteOutlineOutlined, Edit } from '@material-ui/icons';

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
  .add('CardComplex', () => {
    const [onEdit, setOnEdit] = React.useState<boolean>(false);
    return (
      <React.Suspense fallback={<CardSkeleton />}>
        <CardComplex
          variant={CardVariant.elevation}
          editMode={onEdit}
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
            settings: [
              {
                name: 'Delete',
                icon: <DeleteOutlineOutlined />,
                action: () => console.log('Delete Action')
              },
              {
                name: 'Edit',
                icon: <Edit />,
                action: () => {
                  console.log('edit', !onEdit);
                  setOnEdit(!onEdit);
                }
              },
              { name: 'Add to Cart', icon: <Add />, action: () => console.log('Add to cart') }
            ],
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
    );
  })
  .add('CardSkeleton', () => {
    return (
      <React.Suspense fallback={<CardSkeleton />}>
        <CardSkeleton />
      </React.Suspense>
    );
  });
