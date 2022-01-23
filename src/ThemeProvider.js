import React from 'react'

export const ThemeContext = React.createContext()

export default class ThemeProvider extends React.Component {
  state = {
    theme: 'light'
  }

  changeTheme = (e) => {
    this.setState({ theme: e.target.value })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          themeState: this.state,
          handler: this.changeTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
