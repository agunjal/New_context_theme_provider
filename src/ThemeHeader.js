import React from 'react'

const headerDivStyle = {
  borderBottom: '1px solid rgb(204, 204, 204)',
  fontSize: '0.8125rem',
  padding: '8px 40px',
  textAlign: 'center'
}

const ThemeHeader = (props) => {
  return (
    <div style={headerDivStyle}>
      <label style={{ marginRight: '8px' }}>Theme:</label>
      <select onChange={props.handler}>
        <option
          selected={'dark' === props.theme ? 'selected' : ''}
          value="dark"
        >
          Dark
        </option>
        <option
          selected={'light' === props.theme ? 'selected' : ''}
          value="light"
        >
          Light
        </option>
      </select>
    </div>
  )
}

export default ThemeHeader
