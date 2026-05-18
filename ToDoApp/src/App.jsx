import { RouterProvider } from 'react-router-dom'

import { router } from './app/router'
import { LanguageProvider } from './context/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App
