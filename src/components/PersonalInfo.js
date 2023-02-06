import "../css/PersonalInfo.css"

function PersonalInfo() {
    return (
        <>
            <h2 className="form_heading" >Personal Info</h2>
            <p className="form_paragraph">Please Provide your name , email address, and phone number</p>
            <div className="input_group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="e.g Stephen King" />
            </div>
            <div className="input_group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="e.g stephenking@lorem.com" />
            </div>
            <div className="input_group">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="tel" id="phone_number" placeholder="e.g +1 234 567 890" />
            </div>

        </>
    );
}

export default PersonalInfo;