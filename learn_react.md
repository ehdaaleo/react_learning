- > React 
React is a JavaScript library for building user interfaces, developed by Facebook (now Meta). I'd like to clarify something important first: React itself is a library, not a full framework. However, we often call it a framework because of its ecosystem.
- > JSX javaSrcipt XML 
// This is JSX - looks like HTML but it's JavaScript

- React Core Fundamentals
// Traditional DOM Manipulation (Vanilla JS)
``` bash 
const element = document.getElementById('myDiv');
element.innerHTML = 'New Content';
element.style.color = 'red';

// React Way - Declarative
function MyComponent() {
  const [content, setContent] = useState('New Content');
  const [color, setColor] = useState('red');
  
  return <div style={{color}}>{content}</div>;
}
```


- Components Deep Dive
functional compnent and class compnent 
``` bash 
// ============ CLASS COMPONENT (Legacy) ============
class ClassCounter extends React.Component {
  constructor(props) {
    super(props); // should implement it  because we extends 
    // State initialization in constructor
    this.state = {
      count: 0,
      user: null
    };
    // Binding methods
    this.increment = this.increment.bind(this);
  }
  
  // Lifecycle methods
  componentDidMount() {
    console.log('Component mounted');
    this.fetchUser();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count changed:', this.state.count);
    }
  }
  
  componentWillUnmount() { // destroy 
    console.log('Component will unmount');
    this.cleanup();
  }
  
  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  
  fetchUser() {
    // API call
  }
  
  cleanup() {
    // Cleanup subscriptions
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// ============ FUNCTIONAL COMPONENT (Modern) ============
function FunctionalCounter() {
  // All state in one place
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  
  // componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log('Component mounted/updated');
    
    // componentWillUnmount
    return () => {
      console.log('Cleanup');
    };
  }, [count]); // Only re-run when 'count' changes
  
  useEffect(() => {
    fetchUser();
    return () => cleanup();
  }, []); // Empty array = componentDidMount
  
  const increment = () => {
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
- State Management Mastery
- Hooks Complete Guide
- Advanced Patterns
- Performance Optimization
- Routing
- Forms and Validation
- API Integration
- Testing React Apps
- Deployment and Build
