import React from 'react';

export default function ChildData(props) {
    return (
        <div className="container mt-5 ">
         <div className="row d-flex justify-content-center">
         <div className="card col-md-5" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.contact}</h6>
                    <p className="card-text">Email: {props.email}</p>
                    <p className="card-text">Password: {props.password}</p>
                </div>
            </div>
         </div>
        </div>
    );
}



