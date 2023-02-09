import "../css/Form.css";
import "../css/Plan.css";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const Plan = ({plan, setPlan, duration, setDuration}) => {
    return (
        <>
            <h2 className="form_heading">Select your plan</h2>
            <p className="form_paragraph">You have the option of monthly or yearly billing</p>
            <div className="plans_wrapper">
                <button type="button" className={plan === 'Arcade' ? "active_plan" : ""} onClick={() => setPlan('Arcade')}>
                    <img src={arcadeIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Arcade</strong>
                        {duration === 'monthly' 
                            ? <span>$9/mo</span> 
                            : <>
                                <span>$90/yr</span> <em>2 months free</em>
                            </> 
                        }
                    </div>
                </button>
                <button type="button" className={plan === 'Advanced' ? "active_plan" : ""} onClick={() => setPlan('Advanced')}>
                    <img src={advancedIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Advanced</strong>
                        {duration === 'monthly' 
                            ? <span>$12/mo</span> 
                            : <>
                                <span>$120/yr</span> <em>2 months free</em>
                            </> 
                        }
                    </div>
                </button>
                <button type="button" className={plan === 'Pro' ? "active_plan" : ""} onClick={() => setPlan('Pro')}>
                    <img src={proIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Pro</strong>
                        {duration === 'monthly' 
                            ? <span>$15/mo</span> 
                            : <>
                                <span>$150/yr</span> <em>2 months free</em>
                            </> 
                        }
                    </div>
                </button>
            </div>
            <div className="toggle_wrapper">
                <strong>Monthly</strong>
                <button type="button" className="monthly_toggle" onClick={() => setDuration('monthly')}></button>
                <div className="toggle_circle" style={{
                    transform: `${duration === 'monthly' ? 'translateX(-2.5px)' : 'translateX(15px)'}`
                }}></div>
                <button type="button" className="yearly_toggle" onClick={() => setDuration('yearly')}></button>
                <strong>Yearly</strong>
            </div>
        </>
    );
}

export default Plan;