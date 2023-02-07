import "../css/Sidebar.css";

const Sidebar = ({step}) => {
    return ( 
        <div className="sidebar">
            <ul className="steps">
                <li>
                    <div className={step === 1 ? "numbering active_number" : "numbering"}>1</div>
                    <span className="step_label">step 1</span>
                    <strong>Your Info</strong>
                </li>
                <li>
                    <div className={step === 2 ? "numbering active_number" : "numbering"}>2</div>
                    <span className="step_label">step 2</span>
                    <strong>select plan</strong>
                </li>
                <li>
                    <div className={step === 3 ? "numbering active_number" : "numbering"}>3</div>
                    <span className="step_label">step 3</span>
                    <strong>add-ons</strong>
                </li>
                <li>
                    <div className={step === 4 ? "numbering active_number" : "numbering"}>4</div>
                    <span className="step_label">step 4</span>
                    <strong>summant</strong>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;