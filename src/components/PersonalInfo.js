import "../css/Form.css";
import "../css/PersonalInfo.css";

function PersonalInfo({updateName, updateEmail, updatePhone, emptyName, emptyEmail, emptyPhone}) {

    return (
        <>
            <h2 className="form_heading" >Personal Info</h2>
            <p className="form_paragraph">Please Provide your name , email address, and phone number</p>
            <div className="input_group">
                <label htmlFor="name">
                    <strong>Name</strong>
                    {emptyName && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="e.g Stephen King"
                    style={{
                        borderColor: `${emptyName ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updateName(event.target.value)}
                    />
            </div>
            <div className="input_group">
                <label htmlFor="email">
                    <strong>Email Address</strong>
                    {emptyEmail && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="e.g stephenking@lorem.com" 
                    style={{
                        borderColor: `${emptyEmail ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updateEmail(event.target.value)}
                    />
            </div>
            <div className="input_group">
                <label htmlFor="phone_number">
                    <strong>Phone Number</strong>
                    {emptyPhone && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="tel" 
                    id="phone_number" 
                    placeholder="e.g +1 234 567 890" 
                    style={{
                        borderColor: `${emptyPhone ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updatePhone(event.target.value)}
                />
            </div>

        </>
    );
}

export default PersonalInfo;