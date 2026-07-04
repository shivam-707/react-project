import { useState } from 'react'

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((formData) => {
            return {
                ...formData,
                [fieldName]: newValue
            };
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br></br><br></br>

            <label htmlFor="userName">User Name: </label>
            <input placeholder="Enter your name" type="text" value={formData.userName} onChange={handleInputChange} id="userName" name="userName"/>
            <br></br>

            <label htmlFor="password">Password: </label>
            <input placeholder="Enter your password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}
