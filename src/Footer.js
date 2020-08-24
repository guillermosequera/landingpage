import React from 'react'

export default function Footer({day}) {
    return (
        
        <div className="row">
        <nav className="col navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
            <a className="navbar-brand font-weight-bold" href="#"> Copyright &copy; Your Website {day}</a>
        </nav>
        </div>
    )
}
