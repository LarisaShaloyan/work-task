import React from 'react';
import './Item.css'
import {IoIosArrowRoundForward} from "react-icons/io";
import item from '../../assets/item-fon.webp'
function Item(props) {
    return (
        <div className="Item">

            <div className="text-decoration">
                <p className="text">
                    <span className="title">Korting</span>
                    <br />
                    <span className="price">50%</span>
                    <br />
                    <span className="name">Alleen Vandaag</span>
                    <br />
                    <span className="leatste">Laatste kans om deze GROTE korting te krijgen</span>
                </p>

                <button className="cta-button">Bestel nu & bespaar 50% <IoIosArrowRoundForward/></button>
                <ul className="text-container">
                    <li className="text-item">Slechts €24,95 ipv. €50 (gebruikelijke prijs)</li>
                    <li className="text-item">- Alleen online verkrijgbaar</li>
                    <li className="text-item">- Zolang de voorraad strekt</li>

                </ul>

            </div>
            <img src={item}/>

        </div>
    );
}

export default Item;