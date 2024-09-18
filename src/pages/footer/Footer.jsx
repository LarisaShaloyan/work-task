import React from 'react';
import './Footer.css'
import foot from '../../assets/footer.webp';
function Footer(props) {
    return (
        <div className="Footer">
            <div className="container">

               <div className="left-text"> <h2>Cotact Us</h2>
                <p>67 Hoofdstraat

                    12 AB Amsterdam, Nederland</p>
                <p>E-mail us: support@beahea.com

                    Call us:
                    +31 6 189645549</p>

                <p>🕙 Maandag - Vrijdag: 08:00 - 22:00

                    🕕 Zaterdag - Zondag: 08:00 - 18:00</p>
                <p>
                    We proberen al uw vragen binnen 24 uur te beantwoorden.</p>
               </div>
                <div className="text-center">
                    <h3>INFORMATION
                        </h3>
                    <p>Terugbetalingsbeleid
<br/>
                        Privacybeleid
<br/>
                        Algemene voorwaarden
<br/>
                        Shipping policy
<br/>
                        Contactgegevens
    </p>
                </div>
                <div className="footer-top section">
                    <img src={foot} alt="Footer" className="footer-top"/>

                </div>

                <p className="copyright">
                    &copy; Copyright © 2014 - 2024 DreamEase™ . All Rights Reserved.
                </p>
            </div>


            <a href="#top" className="back-top-btn" aria-label="back to top">

            </a>


        </div>
    );
}

export default Footer;