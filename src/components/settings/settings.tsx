import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Button } from '@material-ui/core';
import InputText from '../../stories/inputs/inputText';
import validator from 'validator';
import InputPassword from '../../stories/inputs/inputPassword';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { loginComponentState } from '../../store/actions/login';

const Settings = (props: {}) => {
  const login = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const title = React.useMemo(() => <Typography variant="h5">LogIn</Typography>, []);

  const inputEmail = React.useMemo(() => {
    return (
      <div style={{ padding: '1rem' }}>
        <InputText
          changeHandle={(e: any) => dispatch(loginComponentState(e))}
          isRequired
          variant="outlined"
          content={{
            keyId: 'email',
            labelText: 'Email',
            defaultValue: login.email || '',
            placeholder: 'me@example.com',
            errorText: 'invalid email'
          }}
          isError={!validator.isEmail(login.email || '')}
        />
      </div>
    );
  }, [login.email, dispatch]);

  const inputPassword = React.useMemo(() => {
    return (
      <div style={{ padding: '1rem' }}>
        <InputPassword
          changeHandle={(e: any) => dispatch(loginComponentState(e))}
          variant="outlined"
          isError={true}
          content={{
            keyId: 'password',
            defaultValue: login.password || '',
            placeholder: 'me@example.com',
            errotText: 'password error'
          }}
        />
      </div>
    );
  }, [login.password, dispatch]);

  const container = React.useMemo(() => {
    return (
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={9} md={6} lg={4} xl={4}>
          <Paper style={{ padding: '2rem' }} elevation={3}>
            {title}
            {inputEmail}
            {inputPassword}
            <Grid container justify="center">
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Button variant="contained" style={{ width: '100%' }}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }, [inputEmail, inputPassword, title]);
  return container;
};

export default Settings;
