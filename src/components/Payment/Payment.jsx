import React from 'react';
import './Payment.css';
const Payment = () => {
    return (
        <div className='pay'>
            <h2>Pay wiht card</h2>
            <div>
                <div className="pay-email">
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder="Your e-mail address"/>
                </div>
                <div className="pay-card">
                    <label>Card information</label>
                    <input type='text' name="cardNumber" placeholder='3244 4454 3324 3245'/>
                    <div>
                    <input type="text" name="expireDate" placeholder='MM / YY' />
                    <input type="text" name="CVC" placeholder='CVC'/>
                    </div>
                </div>
                <div className="pay-card-name">
                    <label>Cardholder Name</label>
                    <input type="text" name="Full name on card"/>
                </div>
                <div className="pay"></div>
            </div>
        </div>
    );
}

export default Payment;
