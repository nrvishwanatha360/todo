import React from 'react'

export default function Navbar(prop) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{prop.title}</a>
  </div>
</nav>
    </div>
  )
}
