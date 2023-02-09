import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styled/defaultTheme'
import { Global } from './styled/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { ContextDataIssuesProvider } from './context'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <BrowserRouter>
        <ContextDataIssuesProvider>
          <Router />
        </ContextDataIssuesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
