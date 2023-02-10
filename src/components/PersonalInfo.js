import "../css/Form.css";
import "../css/PersonalInfo.css";

function PersonalInfo({data, setData}) {

    const updateName = (input) => {
        let emptyField;
        if (input === '') emptyField = true;
        else emptyField = false; 
        setData(prevData => {
            return{
                ...prevData,
                name: input,
                emptyName: emptyField,
            }
        })
    }

    const updatePhone = (input) => {
        let emptyField;
        if (input === '') emptyField = true;
        else emptyField = false; 
        setData(prevData => {
            return{
                ...prevData,
                phone: input,
                emptyPhone: emptyField,
            }
        })
    }

    const updateEmail = (input) => {
        let emptyField;
        if (input === '') emptyField = true;
        else emptyField = false; 
        setData(prevData => {
            return{
                ...prevData,
                email: input,
                emptyEmail: emptyField,
            }
        })
    }

    return (
        <>
            <h2 className="form_heading" >Personal Info</h2>
            <p className="form_paragraph">Please Provide your name , email address, and phone number</p>
            <div className="input_group">
                <label htmlFor="name">
                    <strong>Name</strong>
                    {data.emptyName && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="text" 
                    id="name" 
                    value={data.name}
                    placeholder="e.g Stephen King"
                    style={{
                        borderColor: `${data.emptyName ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updateName(event.target.value)}
                    />
            </div>
            <div className="input_group">
                <label htmlFor="email">
                    <strong>Email Address</strong>
                    {data.emptyEmail && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="email" 
                    id="email" 
                    value={data.email}
                    placeholder="e.g stephenking@lorem.com" 
                    style={{
                        borderColor: `${data.emptyEmail ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updateEmail(event.target.value)}
                    />
            </div>
            <div className="input_group">
                <label htmlFor="phone_number">
                    <strong>Phone Number</strong>
                    {data.emptyPhone && <span className="empty_fields">This field is required</span> }
                </label>
                <input 
                    type="tel" 
                    id="phone_number" 
                    value={data.phone}
                    placeholder="e.g +1 234 567 890" 
                    style={{
                        borderColor: `${data.emptyPhone ? "red" : "hsl(229, 24%, 87%)"}`
                    }}
                    onChange={event => updatePhone(event.target.value)}
                />
            </div>

        </>
    );
}

export default PersonalInfo;