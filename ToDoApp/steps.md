- structure
src/
├── app/           # Application core configuration
├── assets/        # Static files
├── components/    # Reusable UI components
├── features/      # Feature-based modules
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── services/      # API services
├── utils/         # Helper functions
├── App.jsx        # Root component
└── main.jsx       # Entry point


1- Entry point Files 
 - src/main.jsx - Application Entry Point
      Import React and ReactDOM for rendering
      BrowserRouter - Enables routing functionality (URL navigation)
      Provider - Makes Redux store available to all components
      Main App component
      Redux store configuration
      Bootstrap CSS for styling
    
   -  createRoot(): React 18's new rendering API
    - React.StrictMode: Development helper that highlights potential problems
    - Wrapping order matters: Provider → Router → App

- src/App.jsx - Root Component

    Simply renders the router configuration
    RouterProvider connects the router to the app
    This keeps App.jsx clean and focused on routing
2- App Configuration (/app)

  - src/app/router.jsx - Route Definitions
   createBrowserRouter: Modern React Router v6 API
   Nested Routes: TodoPage renders inside MainLayout
   index: true: This route renders at parent's path ('/')
   Layout pattern: Consistent UI (navbar) across multiple pages

   -  src/app/store.js - Redux Store Configuration
    configureStore: Redux Toolkit's improved store setup
    Reducer: Function that manages state updates
   todos: todosReducer: State structure → state.todos contains todo data
   Redux Toolkit automatically adds Redux DevTools and middleware

3️- Services Layer (/services)
 
 - src/services/api.js - API Configuration
     
     axios.create(): Configurable axios instance with defaults
    baseURL: All requests will use this as prefix
    timeout: Auto-cancel requests taking too long
    process.env.REACT_APP_API_URL: Environment variable (for production)
    Interceptors: Middleware for all API calls
    Automatically adds authentication token to every request
    Useful for user authentication
4-  Utility Functions (/utils)

 - src/utils/helpers.js - Helper Functions
  Date.now().toString(36): Current timestamp in base-36 (e.g., 'l9g6z')
  Math.random().toString(36).substr(2): Random string
 Combines both for guaranteed uniqueness
 
 5- Custom Hooks (/hooks)
  
  - src/hooks/useLocalStorage.js - Local Storage Hook
   Lazy initialization: Function passed to useState runs only once
  JSON.parse(): Convert stored string back to object
  Try-catch prevents crashes if JSON is invalid
   useEffect: Runs after every state change
   JSON.stringify(): Convert object to string for storage
   Returns same API as useState (value, setter)
   
6- Layout Components (/layouts)
 
 - src/layouts/MainLayout.jsx - Main Layout

   <Outlet />: Placeholder where nested routes render
   This creates consistent layout across pages
   Example: Navbar stays same, content changes

- src/layouts/Navbar.jsx - Navigation Bar
  useSelector: Redux hook to read state
 Selects only needed data to prevent unnecessary re-renders
  Calculates pending count on the fly 
7- Reusable Components (/components)
  - src/components/Button/Button.jsx
    Wrapper component: Adds default props and consistent behavior
    Destructuring with defaults: Makes props optional
    ...props: Passes any additional props to Bootstrap Button
    This pattern allows easy changes across all buttons.   
8- Feature (/features/todos)

  - Redux Slice: todoSlice.js - State Management
    Initial state: Defines the shape of our state
   Load todos from localStorage so they persist after page refresh

User Action → Component Event → Custom Hook → Redux Action → Reducer → New State → Component Re-render → UI Update

TodoPage (uses useTodos hook)
    ↓
useTodos (connects to Redux)
    ↓
Redux Store (central state)
    ↓
todoSlice (reducers + actions)
    ↓
localStorage (persistence)