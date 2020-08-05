import React, { useMemo, useReducer, useState } from 'react';
import validator from 'validator';
// import logo from '../assets/logo.svg';
import './App.css';

// import { Button } from '@material-ui/core';

// import { InputTelephoneNumber, InputVariant, InputPassword, InputText } from '../stories/inputs';
// import { CheckboxDefault } from '../stories/checkbox';
import { DrawerDefault } from '../stories/drawer';
import { Home, ViewColumnSharp } from '@material-ui/icons';
import { TableDefault } from '../stories/table';
import { Column } from 'material-table';
import { Settings as SettingsIcon } from '@material-ui/icons';
import { Input, Link } from '@material-ui/core';
import { BreadcrumbsNoRoute } from '../stories/breadcrumbs';
import { useSelector } from 'react-redux';
import { BreadcrumbsReducer } from '../store/reducers/BreadcrumbsReducer';
import { RouteDefault } from '../stories/route';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { CheckboxDefault } from '../stories/checkbox';
// import { getAllData } from '../store/actions/DataActions';

interface tblData {
  id: number | string;
  question: string;
  answer: string;
}

const App: React.FC = () => {
  // const [formState, setFromState] = useState<{ [key: string]: any }>({});
  const [formState, formStateDispatch] = useReducer(
    (state: { [key: string]: any }, payload: { target: { name: string; id: string; value: any } }) => {
      let newState = { ...state };
      // debugger;
      newState = { ...state, [payload.target.id]: payload.target.value };
      return { ...newState };
    },
    {}
  );

  const [columns, setColumns] = useState<Column<any>[]>([
    {
      title: 'Question',
      field: 'question',
      type: 'string',
      validate: (data: tblData) => {
        const valid = !validator.isEmpty(data.question ?? '', { ignore_whitespace: true });
        return { isValid: valid, helperText: valid ? '' : 'Invalid Question' };
      }
    },
    {
      title: 'Answer',
      field: 'answer',
      type: 'string',
      validate: (data: tblData) => {
        const valid = !validator.isEmpty(data.answer ?? '', { ignore_whitespace: true });
        return { isValid: valid, helperText: valid ? '' : 'Invalid Answer' };
      }
    },
    {
      title: 'id',
      field: 'id',
      hidden: true
    }
  ]);
  const [state, dispatchData] = React.useReducer(
    (state: { data: tblData[] }, action: { name: 'add' | 'update' | 'delete'; payload: { oldDataId?: string | number; newData: tblData } }) => {
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
  // memo function shouldnt be arrow fn

  // let handleChange = (event: ChangeEvent<HTMLInputElement>) => setFromState({ ...formState, [event.target.id]: event.target.value });
  const ignore = (
    <React.Fragment>
      {/* const telephoneNumber = useMemo(
    () => (
      <InputTelephoneNumber
        variant={InputVariant.standard}
        changeHandle={formStateDispatch}
        content={{ keyId: 'textMask', defaultValue: formState.textMask }}
      />
    ),
    [formState.textMask]
  );

  const password = useMemo(
    () => (
      <InputPassword
        variant={InputVariant.standard}
        changeHandle={(e: any) => formStateDispatch(e)}
        content={{ keyId: 'password', defaultValue: formState.password }}
      />
    ),
    [formState.password]
  );

  const anytext = useMemo(
    () => (
      <InputText
        variant={InputVariant.standard}
        changeHandle={(e: any) => formStateDispatch(e)}
        content={{ keyId: 'textinput', defaultValue: formState.textinput, labelText: 'anytext' }}
      />
    ),
    [formState.textinput]
  );

  const termsOfService = useMemo(() => {
    return (
      <CheckboxDefault
        handleChange={(e) => formStateDispatch(e)}
        content={{ keyId: 'chkbx1', label: 'Agree on terms of services', defaultValue: formState.chkbx1 }}
      />
    );
  }, [formState.chkbx1]);
  const privacy = useMemo(
    () => (
      <CheckboxDefault
        handleChange={(e) => formStateDispatch(e)}
        content={{ defaultValue: formState.chkbx2, keyId: 'chkbx2', label: 'Agree on Privacy and Policy' }}
      />
    ),
    [formState.chkbx2]
  );
  const userAgreement = useMemo(
    () => (
      <CheckboxDefault
        handleChange={(e) => formStateDispatch(e)}
        content={{ keyId: 'chkbx3', label: 'Agree on User Agreement', defaultValue: formState.chkbx3 }}
      />
    ),
    [formState.chkbx3]
  );

  // const reducers = useSelector((state: RootState) => state.data);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   // dispatch(getAllData);
  // }, []);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    // console.log(reducers.filteredList);
    console.log({ ...formState });
  };

  const app = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn Reacts
        </a>
      </header>
      <div className="App">
        <div>{telephoneNumber}</div>
        <div>{password}</div>
        <br />
        <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
          {termsOfService}
          {privacy}
          {userAgreement}
        </div>
        {anytext}
        <Button variant="outlined" onClick={handleSubmit}>
          submit
        </Button>
      </div>
    </div>
  ); */}
    </React.Fragment>
  );

  const QuestionsBank = (props: {}) => (
    <TableDefault
      columns={columns}
      data={state.data}
      content={{ title: 'Questions Bank' }}
      actions={{
        onRowAdd: (newData) => {
          if (Object.keys(newData).length < columns.length - 1) {
            dispatchData({ name: 'add', payload: { newData: newData } });
          }
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
  );

  const Settings = (props: {}) => {
    const [x, setX] = React.useState();
    return (
      <div>
        <div>Im Settings</div>
      </div>
    );
  };
  const Dashboard = (props: {}) => {
    const [selected, setSelected] = useState('A');

    const A = (props: {}) => <div>A</div>;
    const B = (props: {}) => <div>B</div>;
    const C = (props: {}) => <div>C</div>;

    const tabs = useMemo(
      () => (
        <div style={{ display: 'inline-flex' }}>
          <button onClick={() => setSelected('A')}>Select A</button>
          <button onClick={() => setSelected('B')}>Select B</button>
          <button onClick={() => setSelected('C')}>Select C</button>
        </div>
      ),
      []
    );

    return (
      <div>
        <div>Im Dashboard</div>
        {tabs}
        <RouteDefault
          selectedKey={selected}
          components={[
            { component: A, key: 'A', props: {} },
            { component: B, key: 'B' },
            { component: C, key: 'C', props: {} }
          ]}
        />
      </div>
    );
  };

  const [content, setContent] = useState({
    toolbarTitle: 'React App',
    items: [
      [
        { key: 'Home', icon: <Home />, component: <Dashboard /> },
        { key: 'Settings', icon: <SettingsIcon />, component: <Settings /> }
      ]
    ]
  });

  // const breadcrumbsState = useSelector((state: RootState) => state.breadcrumbs);
  // const dispatchCurrentLocation = useDispatch();
  const [breadcrumbsState, dispatchBreadcrumbs] = useReducer(BreadcrumbsReducer, { currLoc: { key: 'Home' }, prevLoc: [] });

  const breadcrumbs = useMemo(() => {
    return (
      <BreadcrumbsNoRoute
        dispatchCurrentLocation={dispatchBreadcrumbs}
        previousLocations={breadcrumbsState.prevLoc}
        currentLocation={breadcrumbsState.currLoc}
      />
    );
  }, [dispatchBreadcrumbs, breadcrumbsState]);
  return (
    <DrawerDefault
      common={breadcrumbs}
      selectedItemKey={breadcrumbsState.currLoc.key}
      content={{ ...content }}
      actions={{ menuItemClick: (event, key) => dispatchBreadcrumbs({ key }) }}
    />
  );
};

export default App;
