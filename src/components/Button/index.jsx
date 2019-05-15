import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, className } = this.props;
    return (
      <button type="button" className={`${className} Button`}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  children: '',
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
