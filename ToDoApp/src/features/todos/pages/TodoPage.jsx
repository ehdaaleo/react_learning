import { Row, Col, Card } from 'react-bootstrap'
import { useTodos } from '../hooks/useTodos'
import TodoForm from '../components/TodoForm'
import TodoStats from '../components/TodoStats'
import TodoList from '../components/TodoList'

const TodoPage = () => {
  const {
    todos,
    stats,
    filter,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    setFilter,
    clearCompleted,
  } = useTodos()

  return (
    <Row className="justify-content-center">
      <Col md={8} lg={7}>
        <Card className="shadow-sm">
          <Card.Header className="bg-primary text-white">
            <h3 className="h4 mb-0 text-center">
              My Todo List
            </h3>
          </Card.Header>
          
          <Card.Body>
            <TodoForm onAdd={addTodo} />
            <TodoStats
              stats={stats}
              currentFilter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </Card.Body>
          
         
        </Card>
      </Col>
    </Row>
  )
}

export default TodoPage
