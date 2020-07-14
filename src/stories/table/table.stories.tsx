import React from 'react';

import { storiesOf } from '@storybook/react';
import { TableDefault } from '.';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import validator from 'validator';

// const [openSnack, setOpenSnack] = useState<boolean>(false);

interface Data {
  id: string | number;
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

storiesOf('Table', module)
  .addDecorator((story) => <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>{story()}</ThemeProvider>)
  .add('TableDefault', () => {
    const [state, dispatchData] = React.useReducer(
      (state: { data: Data[] }, action: { name: 'add' | 'update' | 'delete'; payload: { oldDataId?: string | number; newData: Data } }) => {
        let newState = { ...state };
        let newData = [...newState.data];
        switch (action.name) {
          case 'add':
            newData.push({ ...action.payload.newData, id: Date.now() });
            break;
          case 'delete':
            {
              const index = newData.findIndex((value) => value.id === action.payload.oldDataId);
              if (index !== -1) {
                newData = [].concat(newData.slice(0, index) as any, newData.slice(index + 1, newData.length) as any);
              }
            }
            break;
          case 'update':
            {
              const index = newData.findIndex((value) => value.id === action.payload.oldDataId);
              if (index !== -1 && action.payload.oldDataId) {
                newData[index] = { ...action.payload.newData, id: action.payload.oldDataId };
              }
            }
            break;
          default:
            break;
        }
        return { ...state, data: newData };
      },
      {
        data: []
      }
    );
    return (
      <React.Fragment>
        <TableDefault
          content={{ title: 'Editable Preview' }}
          columns={[
            { title: 'id', field: 'id', hidden: true },
            {
              title: 'Name',
              field: 'name',
              validate: (data: Data) => {
                const name = data.name ?? '';
                const valid =
                  !validator.isEmpty(name, { ignore_whitespace: true }) &&
                  validator.isLength(name, { max: 15, min: 4 }) &&
                  !validator.isAlphanumeric(name);

                return { isValid: valid, helperText: valid ? '' : 'Name : 4 ~ 15 characters from a~z' };
              }
            },
            { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
            }
          ]}
          data={state.data}
          actions={{
            onRowAdd: (newData) => {
              dispatchData({ name: 'add', payload: { newData: newData } });
              return new Promise<any>((res) => res());
            },
            onRowUpdate: (newData, oldData) => {
              dispatchData({ name: 'update', payload: { oldDataId: oldData.id, newData: newData } });
              return new Promise<any>((res) => res());
            },
            onRowDelete: (oldData) => {
              dispatchData({ name: 'delete', payload: { oldDataId: oldData.id, newData: oldData } });
              return new Promise<any>((res) => res());
            }
          }}
        />
      </React.Fragment>
    );
  });
