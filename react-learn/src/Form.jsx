function handleSubmit(event) {
    //event.preventDefault();
    console.log('Form submitted');
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}