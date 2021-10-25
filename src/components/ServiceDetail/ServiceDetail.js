import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [servicedetail, setServicedetail] = useState({})

    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => {

                let result = data.find(service => service.id == serviceId);

                setServicedetail(result);
            })

    }, [serviceId])

    const { img, name, description } = servicedetail;

    return (

        <div >

            <Header></Header>

            <div className="card-style" >


                <img src={img} alt="..." />
                <h5 >{name}</h5>
                <p >{description}</p>

            </div>
            <Footer></Footer>
        </div>

    );

};

export default ServiceDetail;