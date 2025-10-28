export const Button = (props) => {
  const { type, className, children, onClick } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
