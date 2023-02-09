import "../css/Form.css";
import "../css/Plan.css";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const Plan = () => {
    return (
        <>
            <h2 className="form_heading">Select your plan</h2>
            <p className="form_paragraph">You have the option of monthly or yearly billing</p>
            <div className="plans_wrapper">
                <button type="button" className="arcade active_plan">
                    <img src={arcadeIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Arcade</strong>
                        <span>$9/mo</span>
                    </div>
                </button>
                <button type="button" className="advanced">
                    <img src={advancedIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Advanced</strong>
                        <span>$12/mo</span>
                    </div>
                </button>
                <button type="button" className="pro">
                    <img src={proIcon} alt="arcade icon" />
                    <div className="plan_text_wrapper">
                        <strong>Pro</strong>
                        <span>$15/mo</span>
                    </div>
                </button>
            </div>
            <div className="toggle_wrapper">
                <strong>Monthly</strong>
                <button type="button" className="monthly_toggle"></button>
                <div className="toggle_circle"></div>
                <button type="button" className="yearly_toggle"></button>
                <strong>Yearly</strong>
            </div>
        </>
    );
}

export default Plan;