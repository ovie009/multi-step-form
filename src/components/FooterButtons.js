
import "../css/FooterButtons.css"

const FooterButtons = ({data, setData, step, setStep}) => {

    const nextStep = () => {
        if(step === 1) {
            let emptyName = false;
            let emptyEmail = false;
            let emptyPhone = false;
            if(data.name === '') {
                emptyName = true;
                setData(prevData => {
                    return{
                        ...prevData,
                        emptyName: emptyName
                    }
                })
            }
            if(data.email === '') {
                emptyEmail = true;
                setData(prevData => {
                    return{
                        ...prevData,
                        emptyEmail: emptyEmail
                    }
                })
            }
            if(data.phone === '') {
                emptyPhone = true;
                setData(prevData => {
                    return{
                        ...prevData,
                        emptyPhone: emptyPhone
                    }
                })
            }
            if (emptyName || emptyEmail || emptyPhone ) return setStep(step);
        }
        if(step === 4) return setStep(step);
        setStep(prevStep => ++prevStep);
    }
    
    const goBack = () => {
        if(step === 1) return setStep(step);
        setStep(prevStep => --prevStep);
    }

    const handleConfirm = () => {
        setData(prevData => {
            return {
                ...prevData,
                confirm: true
            }
        })
    }

    return !data.confirm && ( 
        <footer className="footer">

            {step !== 4 ? (<button onClick={nextStep} className="next_button">Next Step</button>) : (<button className="confirm_button" onClick={() => handleConfirm()}>Confirm</button>)}
            
            {step !== 1 ? (<button onClick={goBack} className="back_button">Go Back</button>) : (<></>)}
            
        </footer>
    );
}
 
export default FooterButtons;