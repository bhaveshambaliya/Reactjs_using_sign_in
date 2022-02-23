import Button from "react-bootstrap/Button";

const CustomeButton = (props) => {
  const { type, className, variant, content ,...otherProps } = props;

  return (
    <Button type={type} className={className} variant={variant} {...otherProps}>
      {content}
    </Button>
  );
};

export default CustomeButton;
