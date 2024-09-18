import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css';
import photo1 from '../../assets/photo4.webp';
import photo2 from '../../assets/photo2.webp';
import photo4 from '../../assets/photo4.webp';
import photo5 from '../../assets/photo5.webp';
import image1 from '../../assets/image1-url.webp';
import image2 from '../../assets/image2-url.webp';
import image3 from '../../assets/image3-url.webp'
import girl from '../../assets/girlPhoto.webp';

import { IoIosArrowRoundForward } from "react-icons/io";

function Header(props) {

    function ImageSlider() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={photo1} alt="Image 1" className="slider-image"/>
                    </div>
                    <div>
                        <img src={photo2} alt="Image 2" className="slider-image"/>
                    </div>
                    <div>
                        <img src={photo4} alt="Image 3" className="slider-image"/>
                    </div>
                    <div>
                        <img src={photo5} alt="Image 4" className="slider-image"/>
                    </div>
                </Slider>
            </div>
        );
    }

    return (
        <div className="header-container">
            <ImageSlider />
            <div className="product-info">
                <h2>DreamEase™ Slaapband | Heerlijk slapen en geen hoofdpijn meer!
                </h2>
                <hr/>
                <p className="price">
                    <span className="old-price">€60</span>
                    <span className="new-price">€29,95</span>
                    <span className="discount">50% KORTING</span>
                </p>
                <ul className="text-container">
                    <li className="text-item">Diepe ontspanning in korte tijd</li>
                    <li className="text-item">Zeg migraine vaarwel</li>
                    <li className="text-item">Elke ochtend jeugdige energie</li>
                    <li className="text-item">Geen resultaten? Geld terug!</li>
                </ul>
                <button className="cta-button">Bestel nu & bespaar 50% <IoIosArrowRoundForward/></button>
                <ul className="features-list">
                    <li><img src={image1} alt="Icon 1"/>Gratis verzending</li>
                    <li><img src={image2} alt="Icon 2"/>60-dagen garantie</li>
                    <li><img src={image3} alt="Icon 3"/>24/7 ondersteuning</li>

                </ul>


                <div className="image-container">
                    <img src={girl} alt="Fiona R." className="testimonial-photo"/>

                  <div className="testimonial-name"> <h4 >Fiona R.</h4>
                  </div>

                   <div><a href="https://example.com" className="testimonial-link">Geverifieerde klant</a>
                   </div>
                    <div className="tick-mark">✔</div>
<hr/>
                    <div>
                    <p>"Ik heb eindelijk de perfecte hoofdtelefoon gevonden om mee te slapen. Ik was op zoek naar een
                        comfortabele hoofdband die mijn haar 's nachts uit mijn gezicht zou houden en toen kwam ik deze
                        tegen. Hij is gemakkelijk aan te sluiten, de batterij gaat lang mee en hij zit comfortabel op je
                        gezicht. Hij is ook comfortabel voor zijslapers. Echt een aanrader!"
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
