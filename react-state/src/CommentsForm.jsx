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
                ...formData,aimport { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
    let errors = {};
    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.comment) {
        errors.comment = "Comment is required";
    }
    return errors;
};

export default function CommentsForm({addNewComment}) {

    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 5
    });
    
    let formik = useFormik({
        initialValues: {
            username: "",
            comment: "",
            rating: 5
        },
        validate,
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            addNewComment(values);
            formik.resetForm();
        }
    });

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="Enter your username" value={formik.values.username} onChange={formik.handleChange} />
                <br></br>
                {formik.touched.username && formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
                <label htmlFor="comment">Comment: </label>
                <textarea id="comment" name="comment" placeholder="Enter your comment" value={formik.values.comment} onChange={formik.handleChange}></textarea>
                <br></br>
                {formik.touched.comment && formik.errors.comment && <div style={{ color: 'red' }}>{formik.errors.comment}</div>}
                <label htmlFor="rating">Rating: </label>
                <input placeholder="rating" type="number" id="rating" name="rating" min="1" max="5" value={formik.values.rating} onChange={formik.handleChange} />
                <br></br>
                {formik.touched.rating && formik.errors.rating && <div style={{ color: 'red' }}>{formik.errors.rating}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
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
