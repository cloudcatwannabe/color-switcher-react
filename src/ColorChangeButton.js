import PropTypes from 'prop-types'
import React from 'react'

function ColorChangeButton({ color, setColor }) {
  return <button className={color} onClick={() => setColor(color)}>
    {color}
  </button>
}

ColorChangeButton.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired
}

export default ColorChangeButton
