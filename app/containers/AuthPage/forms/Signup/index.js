import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import authMessages from '../../messages';
import messages from './messages';

function SignupForm(isShouldRender, toggleForm) {
  if (!isShouldRender){return null;}
  return (
    <div className='auth-signup-form'>
      <h3> <FormattedMessage {...messages.header} /> </h3>
      <span> <FormattedMessage {...messages.tip} /> </span>
      <TextField
        id='auth-email-input'
        className='auth-signup-email-input'
        label={<FormattedMessage {...messages.name} />}
        InputProps={{ placeholder: messages.name.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <TextField
        id='auth-email-input'
        className='auth-signup-email-input'
        label={<FormattedMessage {...authMessages.email} />}
        InputProps={{ placeholder: authMessages.email.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <TextField
        id='auth-password-input'
        className='auth-signup-password-input'
        label={<FormattedMessage {...authMessages.password} />}
        InputProps={{ placeholder: authMessages.password.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <TextField
        id='auth-password-input'
        className='auth-signup-password-input'
        label={<FormattedMessage {...messages.repeatPassword} />}
        InputProps={{ placeholder: messages.repeatPassword.defaultMessage }}
        fullWidth
        margin='normal'
      />
      <div className='auth-buttons-wrapper'>
        <Link to='/auth/login'>
          <Button onClick={toggleForm} className='auth-to-login-button'>
            Go to login
          </Button>
        </Link>
        <Button raised color='primary' className='auth-signup-button'>
          Sign up
        </Button>
      </div>
    </div>
  );
}

SignupForm.propTypes = {
};

export default SignupForm;
