import '../css/Finishing.css';
import { useState } from 'react';

const Finishing = ({ setStep, plan, online, storage, profile, duration }) => {

    const [basePrice] = useState(() => {
        if (plan === 'Arcade' && duration === 'monthly') return 9;
        if (plan === 'Arcade' && duration === 'yearly') return 90;
        if (plan === 'Advanced' && duration === 'monthly') return 12;
        if (plan === 'Advanced' && duration === 'yearly') return 120;
        if (plan === 'Pro' && duration === 'monthly') return 15;
        if (plan === 'Pro' && duration === 'yearly') return 150;
    })

    const [onlinePrice] = useState(() => {
        if (online === true && duration === 'monthly') return 1;
        if (online === true && duration === 'yearly') return 10;
        return 0;
    })

    const [storagePrice] = useState(() => {
        if (storage === true && duration === 'monthly') return 2;
        if (storage === true && duration === 'yearly') return 20;
        return 0;
    })

    const [profilePrice] = useState(() => {
        if (profile === true && duration === 'monthly') return 2;
        if (profile === true && duration === 'yearly') return 20;
        return 0;
    })

    let total = basePrice + onlinePrice + storagePrice + profilePrice;
    
    return (
        <>
            <h2 className="form_heading">Finishing up</h2>
            <p className="form_paragraph">Double-check everything looks OK before confirming.</p>
            <ul className="bill">
                <li>
                    <div className="main_bill_wrapper">
                        <strong>{plan}({duration})</strong>
                        <button onClick={() => setStep(2)}>change</button>
                    </div>
                    <strong>${basePrice}/{duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li>
                { online && <li>
                        <span>Online Service</span>
                        <strong>+${onlinePrice}/{duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
                { storage && <li>
                        <span>Larger storage</span>
                        <strong>+${storagePrice}/{duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
                { profile && <li>
                        <span>Customizable profile</span>
                        <strong>+${profilePrice}/{duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
            </ul>
            <div className="total_wrapper">
                <span>Total (per {duration === 'monthly' ? 'month' : 'year'})</span>
                <strong>+${total}/{duration === 'monthly' ? 'mo' : 'yr'}</strong>
            </div>
        </>
    );
}
 
export default Finishing;