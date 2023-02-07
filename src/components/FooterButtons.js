import "../css/FooterButtons.css"

const FooterButtons = ({step, handleStep}) => {

    const nextStep = () => {
        if(step === 4) return handleStep(step);
        return handleStep(step++);
    }
    
    const goBack = () => {
        if(step === 1) return handleStep(step);
        return handleStep(step--);
    }

    return ( 
        <footer className="footer">

            {step !== 4 ? (<button onClick={nextStep} className="next_button">Next Step</button>) : (<button className="confirm_button">Confirm</button>)}
            
            {step !== 1 ? (<button onClick={goBack} className="back_button">Go Back</button>) : (<></>)}
            
        </footer>
    );
}
 
export default FooterButtons;