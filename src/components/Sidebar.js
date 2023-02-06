import "../css/Sidebar.css";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <ul className="steps">
                <li>
                    <div className="numbering active_number">1</div>
                    <span className="step_label">step 1</span>
                    <strong>Your Info</strong>
                </li>
                <li>
                    <div className="numbering">2</div>
                    <span className="step_label">step 2</span>
                    <strong>select plan</strong>
                </li>
                <li>
                    <div className="numbering">3</div>
                    <span className="step_label">step 3</span>
                    <strong>add-ons</strong>
                </li>
                <li>
                    <div className="numbering">4</div>
                    <span className="step_label">step 4</span>
                    <strong>summant</strong>
                </li>
            </ul>
        </div>
    );
}
 
export default Sidebar;