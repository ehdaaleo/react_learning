import { Row, Col, Badge, Button } from 'react-bootstrap'

const TodoStats = ({ stats, currentFilter, onFilterChange, onClearCompleted }) => {
  const filters = [
    { label: 'All', value: 'all', variant: 'secondary' },
    { label: 'Active', value: 'pending', variant: 'warning' },
    { label: 'Completed', value: 'completed', variant: 'success' },
  ]

  return (
    <Row className="mb-3">
      <Col>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="d-flex gap-2">
            <Badge bg="info" pill className="p-2">
              Total: {stats.total}
            </Badge>
            <Badge bg="warning" pill className="p-2">
              Pending: {stats.pending}
            </Badge>
            <Badge bg="success" pill className="p-2">
              Completed: {stats.completed}
            </Badge>
          </div>
          
          <div className="d-flex gap-2">
            {filters.map(filter => (
              <Button
                key={filter.value}
                size="sm"
                variant={currentFilter === filter.value ? filter.variant : 'outline-secondary'}
                onClick={() => onFilterChange(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
            {stats.completed > 0 && (
              <Button
                size="sm"
                variant="danger"
                onClick={onClearCompleted}
              >
                Clear Completed
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default TodoStats
