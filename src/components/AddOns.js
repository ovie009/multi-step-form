import '../css/AddOns.css';

const AddOns = ({online, storage, profile, setOnline, setProfile, setStorage, duration}) => {

    return (
        <>
            <h2 className="form_heading">Pick add-ons</h2>
            <p className="form_paragraph">Add-ons help enhance your gaming experience.</p>
            <div className="options_wrapper">
                <div 
                    className={online ? "option active_plan" : "option"} 
                    onClick={() => setOnline(prevOnline => !prevOnline)}
                >
                    <input 
                        type="checkbox" 
                        name="online_service" 
                        id="online_service"
                        checked={online} 
                        onChange={event => setOnline(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Online service</strong>
                        <span>Access to multiplayer games</span>
                    </div>
                    {duration === 'monthly' ? <span className="option_price">+$1/mo</span> : <span className="option_price">+$10/yr</span>}
                    
                </div>
                <div 
                    className={storage ? "option active_plan" : "option"}
                    onClick={() => setStorage(prevStorage => !prevStorage)}
                >
                    <input 
                        type="checkbox" 
                        name="larger_storage" 
                        id="larger_storage" 
                        checked={storage} 
                        onChange={event => setStorage(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Larger storage</strong>
                        <span>Extra 1TB of cloud storage</span>
                    </div>
                    {duration === 'monthly' ? <span className="option_price">+$2/mo</span> : <span className="option_price">+$20/yr</span>}
                </div>
                <div 
                    className={profile ? "option active_plan" : "option"}
                    onClick={() => setProfile(prevProfile => !prevProfile)}
                >
                    <input 
                        type="checkbox" 
                        name="customizable_profile" 
                        id="customizable_profile" 
                        checked={profile} 
                        onChange={event => setProfile(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Customizable profile</strong>
                        <span>Custom theme on your profile</span>
                    </div>
                    {duration === 'monthly' ? <span className="option_price">+$2/mo</span> : <span className="option_price">+$20/yr</span>}
                </div>
            </div>
        </>
    );
}
 
export default AddOns;