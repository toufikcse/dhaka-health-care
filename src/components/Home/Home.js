import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    const [service, setUsers] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1 className="home-serv">Services</h1>
            <div className="container ">
                <div className="row g-4">
                    {
                        service.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>
                        )
                    }

                </div>

            </div>



            <Footer></Footer>
        </div>
    );
};

export default Home;


