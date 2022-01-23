import React from 'react'
import { render } from 'react-dom'
import './style.css'
import ThemeContent from './ThemeContent'
import ThemeHeader from './ThemeHeader'
import ThemeProvider, { ThemeContext } from './ThemeProvider'

const mainSyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ themeState, handler }) => (
        <main style={mainSyle}>
          <ThemeHeader theme={themeState.theme} handler={handler} />
          <ThemeContent theme={themeState.theme} />
        </main>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
