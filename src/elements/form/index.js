import React from "react"
import "../../style/index.css"

export const Form = props => (
  <form className="form" {...props}>
    {props.children}
  </form>
)

export const FormLabel = props => (
  <label className="form-label" {...props}>
    {props.children}
  </label>
)

export const FormLabelDanger = props => (
  <label className="form-label-danger" {...props}>
    {props.children}
  </label>
)

export const FormInput = props => <input className="form-input" {...props} />
