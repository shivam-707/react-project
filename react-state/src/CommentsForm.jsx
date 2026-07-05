import { useState } from "react";

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        comment: "",
        rating: 5
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
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            comment: "",
            rating: 5
        });
    }

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment: </label>
                <textarea id="comment" name="comment" placeholder="Enter your comment" value={formData.comment} onChange={handleInputChange}></textarea>
                <br></br>
                <label htmlFor="rating">Rating: </label>
                <input placeholder="rating" type="number" id="rating" name="rating" min="1" max="5" value={formData.rating} onChange={handleInputChange} />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
