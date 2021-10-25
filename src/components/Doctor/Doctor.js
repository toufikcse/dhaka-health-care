import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const { id, img, name, specialities } = props.doctor;
    const url = `/doctor/${id}`;

    return (
        <div className="col-lg-4 col-sm-6 col-12 card-gap p-3 border bg-light">
            <img src={img} alt="image" />
            <h5>{name}</h5>
            <p>{specialities}</p>
            <Link to={url}><button className="button-cl">Details</button></Link>

        </div>
    );
};

export default Doctor;