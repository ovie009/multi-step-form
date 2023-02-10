import '../css/Form.css';
import {useState} from 'react';
import FooterButtons from './FooterButtons';
import PersonalInfo from "./PersonalInfo";
import Plan from './Plan';
import AddOns from './AddOns';
import Finishing from './Finishing';
import ThankYou from './ThankYou';


function Form({step, setStep}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emptyName, setEmptyName] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPhone, setEmptyPhone] = useState(false);
    const [plan, setPlan] = useState('Arcade');
    const [duration, setDuration] = useState('monthly');
    const [online, setOnline] = useState(false);
    const [storage, setStorage] = useState(false);
    const [profile, setProfile] = useState(false);
    const [confirm, setConfirm] = useState(false);

    // function to update name state
    // also updates name empty input status
    const updateName = (data) => {
        setEmptyName(false);
        setName(data);
    }
    
    
    // function to update email state
    // also updates email empty input status
    const updateEmail = (data) => {
        setEmptyEmail(false);
        setEmail(data);
    }
    
    // function to update phone state
    // also updates phone empty input status
    const updatePhone = (data) => {
        setEmptyPhone(false);
        setPhone(data);
    }

    // function to return the step in the registration process
    const displayStep = () => {
        if (confirm === true) return <ThankYou />;
        if (step === 1) { // at step 1
            return (
                // return personal info form inputs
                <PersonalInfo name={name} email={email} phone={phone} updateName={updateName} updateEmail={updateEmail} updatePhone={updatePhone} emptyName={emptyName} emptyEmail={emptyEmail} emptyPhone={emptyPhone}/>
            );
        } else if (step === 2) {
            return (
                <Plan plan={plan} setPlan={setPlan} duration={duration} setDuration={setDuration}  />
            );
        } else if (step === 3) {
            return (
                <AddOns online={online} storage={storage} profile={profile} setOnline={setOnline} setProfile={setProfile} setStorage={setStorage} duration={duration} />
            );
        } else if (step === 4) {
            return (
                <Finishing setStep={setStep} plan={plan} online={online} storage={storage} profile={profile} duration={duration} />
            );
        }
    }

    return (
        <>
            <form>
                {displayStep()}
            </form>
            <FooterButtons step={step} setStep={setStep} name={name} email={email} phone={phone} setEmptyName={setEmptyName} setEmptyEmail={setEmptyEmail} setEmptyPhone={setEmptyPhone} confirm={confirm} setConfirm={setConfirm} />
        </>

    );
}

export default Form;