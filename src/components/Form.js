import PersonalInfo from "./PersonalInfo";
import '../css/Form.css';
import {useState} from 'react';
import FooterButtons from './FooterButtons';


function Form({step, setStep}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emptyName, setEmptyName] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPhone, setEmptyPhone] = useState(false);

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
        if (step === 1) { // at step 1
            return (
                // return personal info form inputs
                <PersonalInfo updateName={updateName} updateEmail={updateEmail} updatePhone={updatePhone} emptyName={emptyName} emptyEmail={emptyEmail} emptyPhone={emptyPhone}/>
            );
        }
    }

    return (
        <>
            <form>
                {displayStep()}
            </form>
            <FooterButtons step={step} setStep={setStep} name={name} email={email} phone={phone} setEmptyName={setEmptyName} setEmptyEmail={setEmptyEmail} setEmptyPhone={setEmptyPhone} />
        </>

    );
}

export default Form;