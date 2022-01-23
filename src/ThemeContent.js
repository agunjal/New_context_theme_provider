import React from 'react'

const ThemeContent = (props) => {
  let color = ''
  let background = ''
  switch (props.theme) {
    case 'dark':
      color = 'white'
      background = 'black'
      break
    default:
      color = 'black'
      background = 'white'
  }
  const contentDivStyle = {
    flex: '1 1 0%',
    padding: '40px',
    background: `${background}`,
    color: `${color}`
  }
  return (
    <div style={contentDivStyle}>
      <p>This is some text styled by the theme.</p>
    </div>
  )
}

export default ThemeContent
