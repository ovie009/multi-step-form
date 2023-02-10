import '../css/Finishing.css';
import { useState } from 'react';

const Finishing = ({ data, setStep }) => {

    const [basePrice] = useState(() => {
        if (data.plan === 'Arcade' && data.duration === 'monthly') return 9;
        if (data.plan === 'Arcade' && data.duration === 'yearly') return 90;
        if (data.plan === 'Advanced' && data.duration === 'monthly') return 12;
        if (data.plan === 'Advanced' && data.duration === 'yearly') return 120;
        if (data.plan === 'Pro' && data.duration === 'monthly') return 15;
        if (data.plan === 'Pro' && data.duration === 'yearly') return 150;
    })

    const [onlinePrice] = useState(() => {
        if (data.addOns.online === true && data.duration === 'monthly') return 1;
        if (data.addOns.online === true && data.duration === 'yearly') return 10;
        return 0;
    })

    const [storagePrice] = useState(() => {
        if (data.addOns.storage === true && data.duration === 'monthly') return 2;
        if (data.addOns.storage === true && data.duration === 'yearly') return 20;
        return 0;
    })

    const [profilePrice] = useState(() => {
        if (data.addOns.profile === true && data.duration === 'monthly') return 2;
        if (data.addOns.profile === true && data.duration === 'yearly') return 20;
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
                        <strong>{data.plan}({data.duration})</strong>
                        <button onClick={() => setStep(2)}>change</button>
                    </div>
                    <strong>${basePrice}/{data.duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li>
                { data.addOns.online && <li>
                        <span>Online Service</span>
                        <strong>+${onlinePrice}/{data.duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
                { data.addOns.storage && <li>
                        <span>Larger storage</span>
                        <strong>+${storagePrice}/{data.duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
                { data.addOns.profile && <li>
                        <span>Customizable profile</span>
                        <strong>+${profilePrice}/{data.duration === 'monthly' ? 'mo' : 'yr'}</strong>
                </li> }
            </ul>
            <div className="total_wrapper">
                <span>Total (per {data.duration === 'monthly' ? 'month' : 'year'})</span>
                <strong>+${total}/{data.duration === 'monthly' ? 'mo' : 'yr'}</strong>
            </div>
        </>
    );
}
 
export default Finishing;