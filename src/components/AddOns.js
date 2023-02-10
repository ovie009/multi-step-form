import '../css/AddOns.css';

const AddOns = ({data, setData}) => {

    const handleOnline = (value) => {
        setData(prevData => {
            return {
                ...prevData,
                addOns: {...prevData.addOns, online: value}
            }
        })
    }

    const handleStorage = (value) => {
        setData(prevData => {
            return {
                ...prevData,
                addOns: {...prevData.addOns, storage: value}
            }
        })
    }

    const handleProfile = (value) => {
        setData(prevData => {
            return {
                ...prevData,
                addOns: {...prevData.addOns, profile: value}
            }
        })
    }

    return (
        <>
            <h2 className="form_heading">Pick add-ons</h2>
            <p className="form_paragraph">Add-ons help enhance your gaming experience.</p>
            <div className="options_wrapper">
                <div 
                    className={data.addOns.online ? "option active_plan" : "option"} 
                    onClick={() => handleOnline(!data.addOns.online)}
                >
                    <input 
                        type="checkbox" 
                        name="online_service" 
                        id="online_service"
                        checked={data.addOns.online} 
                        onChange={event => handleOnline(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Online service</strong>
                        <span>Access to multiplayer games</span>
                    </div>
                    {data.duration === 'monthly' ? <span className="option_price">+$1/mo</span> : <span className="option_price">+$10/yr</span>}
                    
                </div>
                <div 
                    className={data.addOns.storage ? "option active_plan" : "option"}
                    onClick={() => handleStorage(!data.addOns.storage)}
                >
                    <input 
                        type="checkbox" 
                        name="larger_storage" 
                        id="larger_storage" 
                        checked={data.addOns.storage} 
                        onChange={event => handleStorage(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Larger storage</strong>
                        <span>Extra 1TB of cloud storage</span>
                    </div>
                    {data.duration === 'monthly' ? <span className="option_price">+$2/mo</span> : <span className="option_price">+$20/yr</span>}
                </div>
                <div 
                    className={data.addOns.profile ? "option active_plan" : "option"}
                    onClick={() => handleProfile(!data.addOns.profile)}
                >
                    <input 
                        type="checkbox" 
                        name="customizable_profile" 
                        id="customizable_profile" 
                        checked={data.addOns.profile} 
                        onChange={event => handleProfile(event.target.checked)} 
                    />
                    <div className="option_text_container">
                        <strong>Customizable profile</strong>
                        <span>Custom theme on your profile</span>
                    </div>
                    {data.duration === 'monthly' ? <span className="option_price">+$2/mo</span> : <span className="option_price">+$20/yr</span>}
                </div>
            </div>
        </>
    );
}
 
export default AddOns;