import React from 'react'

export default function Card({place}) {
    return (
        <div className="container d-sm-flex justify-cotent-between">
        

        <div className="d-inline-flex card mr-3 mb-3 "> 
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div className="d-inline-flex card mr-3 mb-3"> 
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div className="d-inline-flex card mr-3 mb-3"> 
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div className="d-inline-flex card mr-lg-0 mr-3 mb-3"> 
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        </div>
        
    )
}
