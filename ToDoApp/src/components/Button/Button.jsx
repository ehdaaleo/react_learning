import { Button as BootstrapButton } from 'react-bootstrap'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </BootstrapButton>
  )
}

export default Button
