import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Doctors = () => {
    const [doctors, setUsers] = useState([]);
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <Header></Header>

            <h1 className="home-serv">Doctors</h1>
            <div className="container ">
                <div className="row g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>
                        )
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Doctors;

