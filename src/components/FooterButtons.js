
import "../css/FooterButtons.css"

const FooterButtons = ({step, setStep, name, email, phone, setEmptyName, setEmptyEmail, setEmptyPhone, confirm, setConfirm}) => {

    const nextStep = () => {
        setConfirm(false);
        if(step === 1) {
            let emptyFields = false;
            if(name === '') {
                setEmptyName(true);
                emptyFields = true;
            }
            if(email === '') {
                setEmptyEmail(true);
                emptyFields = true;
            }
            if(phone === '') {
                setEmptyPhone(true);
                emptyFields = true;
            }
            if (emptyFields === true) return setStep(step);
        }
        if(step === 4) return setStep(step);
        setStep(prevStep => ++prevStep);
    }
    
    const goBack = () => {
        setConfirm(false);
        if(step === 1) return setStep(step);
        setStep(prevStep => --prevStep);
    }

    return !confirm && ( 
        <footer className="footer">

            {step !== 4 ? (<button onClick={nextStep} className="next_button">Next Step</button>) : (<button className="confirm_button" onClick={() => setConfirm(true)}>Confirm</button>)}
            
            {step !== 1 ? (<button onClick={goBack} className="back_button">Go Back</button>) : (<></>)}
            
        </footer>
    );
}
 
export default FooterButtons;