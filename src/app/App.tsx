import React, { useState, ChangeEvent, useCallback } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import { Button } from '@material-ui/core';

import { InputTelephoneNumber, InputVariant, InputPassword, InputText } from '../stories/inputs';
import { CheckboxDefault } from '../stories/checkbox';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { CheckboxDefault } from '../stories/checkbox';
// import { getAllData } from '../store/actions/DataActions';

const App: React.FC = () => {
  const [formState, setFromState] = useState<{ [key: string]: any }>({});
  // const [formState, setFromState] = useState<();

  // all render Update Issue

  const changeHandle =
    // useCallback(
    //   () =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFromState({ ...formState, [event.target.id]: event.target.value });
    };
  //   [formState]
  // );

  const telephoneNumber = InputTelephoneNumber(InputVariant.standard, changeHandle, 'textMask');

  const password = InputPassword(InputVariant.outlined, changeHandle, 'password');

  const anytext = InputText(InputVariant.standard, 'AnyText', false, true, changeHandle, 'textinput');

  const termsOfService = CheckboxDefault(changeHandle, { keyId: 'chkbx1', label: 'Agree on terms of services' });
  const privacy = CheckboxDefault(changeHandle, { keyId: 'chkbx2', label: 'Agree on Privacy and Policy' });
  const userAgreement = CheckboxDefault(changeHandle, { keyId: 'chkbx3', label: 'Agree on User Agreement' });

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

  return (
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
        {telephoneNumber}
        {password}
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
};

export default App;
