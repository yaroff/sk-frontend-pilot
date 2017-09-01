import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Card from 'material-ui/Card';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './forms/Login/';
import SignupForm from './forms/Signup/';
import './styles/auth.css';

export class AuthPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    function isCurrentRoute(route){
      return props.location.pathname.indexOf(route) !== -1;
    }
    this.state = {
      isSignup: isCurrentRoute('signup'),
      isLogin: isCurrentRoute('login'),
    };
  };

  toggleForm() {
    this.setState({
      isSignup: !this.state.isSignup,
      isLogin: !this.state.isLogin,
    });
  }

  render() {
    const { isLogin, isSignup } = this.state;
    return (
      <div className='auth-wrapper'>
        <Helmet>
          <title>AuthPage</title>
          <meta name='description' content='Description of AuthPage' />
        </Helmet>
        <Card className='auth-card'>
          {console.dir(this.props)}
          {LoginForm(isLogin, this.toggleForm.bind(this))}
          {SignupForm(isSignup, this.toggleForm.bind(this))}
        </Card>
      </div>
    );
  }
}
//
// AuthPage.getInitialState = {
//   isSignup: !!this.props.location.indexOf('signup'),
//   isLogin: !!this.props.location.pathname.indexOf('login') || this.props.location.pathname === '/',
// };

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
