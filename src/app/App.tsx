import React, { useState, ChangeEvent } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import { Button } from '@material-ui/core';

import { InputTelephoneNumber, InputVariant, InputPassword, InputText } from '../stories/inputs';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { getAllData } from '../store/actions/DataActions';
const App: React.FC = () => {
  const [formState, setFromState] = useState<{ [key: string]: any }>({});
  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => setFromState({ ...formState, [event.target.id]: event.target.value });

  const reducers = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(getAllData);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console.log(reducers.filteredList);
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
        {InputTelephoneNumber(InputVariant.standard, changeHandle, 'textMast1')}
        {InputTelephoneNumber(InputVariant.standard, changeHandle, 'textMask2')}
        {InputPassword(InputVariant.outlined, changeHandle, 'password')}
        <br />
        {InputText(InputVariant.standard, 'AnyText', false, true, changeHandle, 'textinput')}
        <Button variant="outlined" onClick={handleSubmit}>
          submit
        </Button>
      </div>
    </div>
  );
};

export default App;
