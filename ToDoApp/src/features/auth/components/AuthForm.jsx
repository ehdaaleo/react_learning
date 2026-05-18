import { useState } from 'react'
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  Alert,
  InputGroup,
  Spinner
} from 'react-bootstrap'
import { 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaEye, 
  FaEyeSlash,
  FaArrowRight,
  FaUserPlus
} from 'react-icons/fa'

const AuthCard = ({ 
  type = 'login', // 'login' or 'register'
  onSubmit, 
  isLoading = false,
  error = null,
  clearError 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  // Validate form before submission
  const validateForm = () => {
    const errors = {}
    
    if (type === 'register') {
      if (!formData.name.trim()) {
        errors.name = 'Name is required'
      } else if (formData.name.length < 3) {
        errors.name = 'Name must be at least 3 characters'
      }
    }
    
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    
    if (type === 'register') {
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
      }
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear specific error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (error && clearError) clearError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    const submitData = type === 'login'
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password }
    
    await onSubmit(submitData)
  }

  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="justify-content-center w-100">
        <Col xs={11} sm={10} md={8} lg={6} xl={5} xxl={4}>
          <Card className="shadow-lg border-0 rounded-4">
            {/* Header with gradient */}
            <Card.Header className="bg-primary text-white text-center py-4 rounded-top-4 border-0">
              <div className="mb-3">
                {type === 'login' ? (
                  <FaArrowRight size={40} className="opacity-75" />
                ) : (
                  <FaUserPlus size={40} className="opacity-75" />
                )}
              </div>
              <h2 className="h3 mb-1 fw-bold">
                {type === 'login' ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="mb-0 opacity-75 small">
                {type === 'login' 
                  ? 'Sign in to manage your tasks' 
                  : 'Join us and start organizing your life'}
              </p>
            </Card.Header>

            <Card.Body className="p-4 p-lg-5">
              {/* Error Alert */}
              {(error || Object.keys(validationErrors).length > 0) && (
                <Alert variant="danger" className="mb-4 rounded-3">
                  <Alert.Heading className="h6 mb-2">
                    {error ? 'Authentication Failed' : 'Validation Errors'}
                  </Alert.Heading>
                  {error || Object.values(validationErrors).filter(Boolean).join(', ')}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* Name Field - Register only */}
                {type === 'register' && (
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold mb-2">
                      <FaUser className="me-2 text-primary" />
                      Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      isInvalid={!!validationErrors.name}
                      className="py-2 rounded-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      {validationErrors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                {/* Email Field */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold mb-2">
                    <FaEnvelope className="me-2 text-primary" />
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    isInvalid={!!validationErrors.email}
                    className="py-2 rounded-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold mb-2">
                    <FaLock className="me-2 text-primary" />
                    Password
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      disabled={isLoading}
                      isInvalid={!!validationErrors.password}
                      className="py-2 rounded-3"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                      className="rounded-3"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.password}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted small">
                    {type === 'register' 
                      ? 'Password must be at least 6 characters long'
                      : 'Enter your password to sign in'}
                  </Form.Text>
                </Form.Group>

                {/* Confirm Password - Register only */}
                {type === 'register' && (
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold mb-2">
                      <FaLock className="me-2 text-primary" />
                      Confirm Password
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={isLoading}
                        isInvalid={!!validationErrors.confirmPassword}
                        className="py-2 rounded-3"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="rounded-3"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {validationErrors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-100 mb-3 rounded-3 py-2 fw-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      {type === 'login' ? 'Signing In...' : 'Creating Account...'}
                    </>
                  ) : (
                    type === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </Button>

                {/* Switch Auth Mode Link */}
                <div className="text-center">
                  <hr className="my-4" />
                  {type === 'login' ? (
                    <p className="mb-0 text-muted">
                      Don't have an account?{' '}
                      <Button 
                        variant="link" 
                        className="p-0 text-decoration-none fw-semibold"
                        onClick={() => window.location.href = '/register'}
                      >
                        Register here
                      </Button>
                    </p>
                  ) : (
                    <p className="mb-0 text-muted">
                      Already have an account?{' '}
                      <Button 
                        variant="link" 
                        className="p-0 text-decoration-none fw-semibold"
                        onClick={() => window.location.href = '/login'}
                      >
                        Sign in here
                      </Button>
                    </p>
                  )}
                </div>
              </Form>
            </Card.Body>

            <Card.Footer className="bg-light text-center py-3 rounded-bottom-4">
              <small className="text-muted">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthCard
