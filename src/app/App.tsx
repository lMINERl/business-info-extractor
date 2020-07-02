import React, { useMemo, useReducer } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import { Button, ThemeProvider, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { InputTelephoneNumber, InputVariant, InputPassword, InputText } from '../stories/inputs';
import { CheckboxDefault } from '../stories/checkbox';
import { DrawerDefault } from '../stories/drawer';
import { Home } from '@material-ui/icons';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { CheckboxDefault } from '../stories/checkbox';
// import { getAllData } from '../store/actions/DataActions';

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

  // memo function shouldnt be arrow fn

  // let handleChange = (event: ChangeEvent<HTMLInputElement>) => setFromState({ ...formState, [event.target.id]: event.target.value });

  const telephoneNumber = useMemo(
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
    event.preventDefault();
    // console.log(reducers.filteredList);
    console.log(formState);
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
  );

  return <DrawerDefault content={{ container: app, toolbarTitle: 'React App', items: [[{ key: 'Home', icon: <Home /> }]] }} />;
};

export default App;
