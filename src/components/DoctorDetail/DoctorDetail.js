import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './DoctorDetail.css'

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctordetail, setServicedetail] = useState({})

    useEffect(() => {
        fetch('/doctors.JSON')
            .then(res => res.json())
            .then(data => {

                let result = data.find(service => service.id == doctorId);

                setServicedetail(result);
            })

    }, [doctorId])

    const { img, name, specialities, practice_day, branch, experiance, practice_branch } = doctordetail;

    return (
        <div>
            <Header></Header>
            <div className="card-style" >
                <img src={img} alt="..." />
                <h5 >{name}</h5>
                <h5 >{specialities}</h5>
                <h5 >{practice_day}</h5>
                <h5 >{branch}</h5>
                <h5 >{experiance}</h5>
                <h5 >{practice_branch}</h5>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default DoctorDetail;