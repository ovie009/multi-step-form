import PersonalInfo from "./PersonalInfo";
import '../css/Form.css';
import {useState} from 'react';


function Form({step}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // state to store empty name input state
    const [emptyName, setEmptyName] = useState(() => {
        if(name === '') return true;
        return false;
    });

    // state to store empty email input state
    const [emptyEmail, setEmptyEmail] = useState(() => {
        if(email === '') return true;
        return false;
    });
    
    // state to store empty phone input state
    const [emptyPhone, setEmptyPhone] = useState(() => {
        if(phone === '') return true;
        return false;
    });

    // function to update name state
    // also updates name empty input status
    const updateName = (data) => {
        setEmptyName(() => {
            if(data === '') return true;
            return false;
        })
        return setName(data);
    }
    

    // function to update email state
    // also updates email empty input status
    const updateEmail = (data) => {
        setEmptyEmail(() => {
            if(data === '') return true;
            return false;
        })
        return setEmail(data);
    }

    // function to update phone state
    // also updates phone empty input status
    const updatePhone = (data) => {
        setEmptyPhone(() => {
            if(data === '') return true;
            return false;
        })
        return setPhone(data);
    }

    // function to return the step in the registration process
    const displayStep = () => {
        if (step === 1) { // at step 1
            return (
                // return personal info form inputs
                <PersonalInfo updateName={updateName} updateEmail={updateEmail} updatePhone={updatePhone} emptyName={emptyName} emptyEmail={emptyEmail} emptyPhone={emptyPhone}></PersonalInfo>
            );
        }
    }

    return (
        <form>
            {displayStep()}
        </form>
    );
}

export default Form;