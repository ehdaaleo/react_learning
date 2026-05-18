import { Form } from 'react-bootstrap'

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyPress,
  className = '',
  disabled = false,
  error = '',
  ...props
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={className}
        disabled={disabled}
        isInvalid={!!error}
        {...props}
      />
      {error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

export default Input
