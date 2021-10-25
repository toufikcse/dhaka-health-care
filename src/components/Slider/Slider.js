import React from 'react';
import slide1 from '../../slider/slide1.jpg';
import slide2 from '../../slider/slide2.jpg';
import slide3 from '../../slider/slide3.jpg';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slide1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slide2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slide3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Slider;