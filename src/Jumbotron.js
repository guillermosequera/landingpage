import React from 'react'
import './Jumbotron.css'


function Jumbotron() {
    return (
        <div className="container ">
        <div className="row">
        <div className="col-11 col-lg-12 ml-lg-0 ml-3 mt-3 jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/#" role="button">Learn more</a>
            </p>
        </div>
        </div>
        </div>
    )
}

export default Jumbotron