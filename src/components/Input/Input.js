import React from 'react'
import PropTypes from 'prop-types'
import './input.scss';

function Input(props) {
  return (
    <input className='input' {...props} />
  )
}

Input.propTypes = {}

export default Input;

