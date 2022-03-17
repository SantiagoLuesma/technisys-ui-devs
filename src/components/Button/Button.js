import './_Button.scss';

const Button = ({
  ariaLabel,
  value,
  theme = 'default'
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`button button__${theme || 'alt'}`}
      type='submit'
    >
      { value }
    </button>
  );
};

export default Button;
