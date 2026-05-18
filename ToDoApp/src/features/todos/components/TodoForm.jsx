import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { validateTodo } from '../../../utils/helpers'

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!validateTodo(text)) {
      setError('Task must be between 1-100 characters')
      return
    }
    onAdd(text)
    setText('')
    setError('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Row className="mb-4">
      <Col>
        <div className="d-flex gap-2">
          <Input
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            error={error}
            className="flex-grow-1"
          />
          <Button onClick={handleSubmit}>
            Add Task
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default TodoForm
