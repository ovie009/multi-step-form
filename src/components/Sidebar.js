import "../css/Sidebar.css";

const Sidebar = ({step}) => {
    return ( 
        <div className="sidebar">
            <ul className="steps">
                <li>
                    <div className={step === 1 ? "numbering active_number" : "numbering"}>1</div>
                    <div className="step_info">
                        <span className="step_label">step 1</span>
                        <strong>Your Info</strong>
                    </div>
                </li>
                <li>
                    <div className={step === 2 ? "numbering active_number" : "numbering"}>2</div>
                    <div className="step_info">
                        <span className="step_label">step 2</span>
                        <strong>select plan</strong>
                    </div>
                </li>
                <li>
                    <div className={step === 3 ? "numbering active_number" : "numbering"}>3</div>
                    <div className="step_info">
                        <span className="step_label">step 3</span>
                        <strong>add-ons</strong>
                    </div>
                </li>
                <li>
                    <div className={step === 4 ? "numbering active_number" : "numbering"}>4</div>
                    <div className="step_info">
                        <span className="step_label">step 4</span>
                        <strong>summary</strong>
                    </div>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;