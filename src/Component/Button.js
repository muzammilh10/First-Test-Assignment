import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  variant2: {
    backgroundColor: '#FFD84D',
    color: 'black',
  },
  variant3: {
    backgroundColor: '#FFCE22',
    color: 'black',
  },
  default: {
    backgroundColor: '#FFCE22',
    color: 'black',
  },
});

const Button = ({ variant, children, style, ...props }) => {
  const classes = useStyles();

  return (
    <button
      className={`${classes.root} ${classes[variant]}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'variant2', 'variant3', 'default'
  ]),
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  variant: 'default',
  style: {},
};

export default Button;
