import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles/auth.css';

export class AuthPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='auth-wrapper'>
        <Helmet>
          <title>AuthPage</title>
          <meta name='description' content='Description of AuthPage' />
        </Helmet>
        <Card className='auth-card'>
          <h3> <FormattedMessage {...messages.header} /> </h3>
          <span> <FormattedMessage {...messages.startTip} /> </span>

          <TextField
            id='auth-email-input'
            className=''
            label={<FormattedMessage {...messages.email} />}
            InputProps={{ placeholder: messages.email.defaultMessage }}
            fullWidth
            margin='normal'
          />
          <TextField
            id='auth-password-input'
            className=''
            label={<FormattedMessage {...messages.password} />}
            InputProps={{ placeholder: messages.password.defaultMessage }}
            fullWidth
            margin='normal'
          />
          <div className='auth-buttons-wrapper'>
            <Button className='auth-signup-button'>Sign up</Button>
            <Button raised color='primary' className='auth-login-button'>
              Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authpage: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'authPage', reducer });
const withSaga = injectSaga({ key: 'authPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);
