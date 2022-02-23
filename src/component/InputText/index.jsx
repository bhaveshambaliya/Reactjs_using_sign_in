import { FormControl, InputGroup } from "react-bootstrap";

const InputText = (props) => {
  const { faIcon, placeholder, type, required, value, ...otherProps } = props;
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className={faIcon}></i></InputGroup.Text>
        <FormControl
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby="basic-addon1"
          type={type}
          required={required}
          value={value}
          {...otherProps}
        />
      </InputGroup>
    </div>
  );
};

export default InputText;
