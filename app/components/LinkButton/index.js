import React from 'react';


import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.css';

class LinkButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const link = this.props.link;

    return (
      <Link className=`${this.props.linkClassName}` to=`${this.props.to}`>
        <Button className='auth-signup-button'>
          sign update
        </Button>
      </Link>
    )
  }
}

LinkButton.propTypes = {
  to: React.PropTypes.string.isRequired,
  buttonClassName: React.PropTypes.string.isRequired,
  linkClassName: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
};

export default LinkButton;
