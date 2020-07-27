import React from 'react'

export const ButtonStandard = props => {
  const { label, onClick, disabled } = props
  return (
    <button
      className={`btn btn-dark-gray ${disabled && 'btn-disabled'}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
