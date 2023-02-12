import '../css/Form.css';
import {useState} from 'react';
import FooterButtons from './FooterButtons';
import PersonalInfo from "./PersonalInfo";
import Plan from './Plan';
import AddOns from './AddOns';
import Finishing from './Finishing';
import ThankYou from './ThankYou';


function Form({step, setStep}) {

    const [data, setData] = useState(() => {
        return {
            name: '',
            email: '',
            phone: '',
            emptyName: false,
            emptyEmail: false,
            emptyPhone: false,
            plan: 'Arcade', // other possible values are 'Advanced' and 'Pro'
            duration: 'monthly', // other possible value is 'yearly'
            addOns: {online: false, storage: false, profile: false},
            confirm: false
        }
    })

    // function to return the step in the registration process
    const displayStep = () => {
        if (data.confirm === true) return <ThankYou />;
        if (step === 1) { // at step 1
            return (
                // return personal info form inputs
                <PersonalInfo data={data} setData={setData} />
            );
        } else if (step === 2) {
            return (
                <Plan data={data} setData={setData}/>
            );
        } else if (step === 3) {
            return (
                <AddOns data={data} setData={setData}/>
            );
        } else if (step === 4) {
            return (
                <Finishing data={data} setStep={setStep}/>
            );
        }
    }

    return (
        <div className="form_wrapper">
        { /*<div className="form_wrapper">*/ }
            <form>
                {displayStep()}
            </form>
            <FooterButtons data={data} setData={setData} step={step} setStep={setStep} />
        {/* </div> */}
        </div>

    );
}

export default Form;