import React from 'react'

export default function Lampak(props) {
  function katt() {
    props.katt(props.index)
  }

  return (
    <div className="lampak" onClick={katt}>{props.adat}</div>
  )
}
