import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import authMessages from '../../messages';
import messages from './messages';


function LoginForm(isShouldRender, toggleForm) {
  if (!isShouldRender){return null;}
  return (
    <div className='auth-login-form'>
      {console.dir(this)}
      <h3> <FormattedMessage {...messages.header} /> </h3>
      <span> <FormattedMessage {...messages.startTip} /> </span>
      <TextField
        id='auth-login-email-input'
        className=''
        label={<FormattedMessage {...authMessages.email} />}
        InputProps={{ placeholder: authMessages.email.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <TextField
        id='auth-login-password-input'
        className=''
        label={<FormattedMessage {...authMessages.password} />}
        InputProps={{ placeholder: authMessages.password.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <div className='auth-buttons-wrapper'>
        <Link onClick={toggleForm} to='/auth/signup'>
          <Button className='auth-to-signup-button'>
            Go to sign up
          </Button>
        </Link>
        <Button raised color='primary' className='auth-login-button'>
          Login
        </Button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
