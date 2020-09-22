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

interface CardComplexStateType {
  title: string;
  subTitle: string;
  description: string;
}
// {
//   title: 'Shrimp and Chorizo Paella',
//   subTitle: 'September 14, 2016'
// }

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
    const [cardState, dispacth] = React.useReducer(
      (
        state: CardComplexStateType,
        action: { name: 'setTitle' | 'setSubTitle' | 'setDescription'; payload: any }
      ) => {
        let nState = { ...state };
        switch (action.name) {
          case 'setTitle':
            nState.title = action.payload;
            break;
          case 'setSubTitle':
            nState.subTitle = action.payload;
            break;
          case 'setDescription':
            nState.description = action.payload;
            break;
        }
        return { ...state, ...nState };
      },
      {
        title: 'Shrimp and Chorizo Paella',
        subTitle: 'September 14, 2016',
        description:
          'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the\r mussels, if you like.'
      }
    );
    const [onEdit, setOnEdit] = React.useState<boolean>(false);
    return (
      <React.Suspense fallback={<CardSkeleton />}>
        <CardComplex
          variant={CardVariant.elevation}
          shouldEdit={onEdit}
          hasSettings
          hasFavourate
          hasAvatar
          hasDescription
          // hasImage
          hasPannel
          hasShare
          cardActions={{
            onSaveClick: () => {
              console.log('save', !onEdit);
              setOnEdit(!onEdit);
            },
            onFavourateClick: () => console.log('Favourate Clicked'),
            onShareClick: () => console.log('Share Clicked'),
            onDescriptionChange: (e: any) =>
              dispacth({ name: 'setDescription', payload: e.target.value }),
            onSubTitleChange: (e: any) =>
              dispacth({ name: 'setSubTitle', payload: e.target.value }),
            onTitleChange: (e: any) => dispacth({ name: 'setTitle', payload: e.target.value })
          }}
          cardContent={{
            title: cardState.title,
            subTitle: cardState.subTitle,
            description: cardState.description,
            AvatarChar: 'R',
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
            pannel: (
              <React.Fragment>
                <Typography paragraph>Paragraph 1</Typography>
                <Typography paragraph>Paragraph 2</Typography>
                <Typography> anything </Typography>
              </React.Fragment>
            )
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
