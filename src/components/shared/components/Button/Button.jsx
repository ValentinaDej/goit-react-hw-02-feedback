import PropTypes from 'prop-types';

const Button = ({ children, onClickAction, type }) => {
  return (
    <button onClick={onClickAction} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.prototypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.element.isRequired,
};
