

import { useState } from "react";

//Define a function that is our component, always ,make sure to declare the props paramater so you can use props in your component
const Form = (props) => {

    //State to hold the data of our form
    const [formData, setFormData] = useState({
        searchterm: "",
    });

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detecct key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.moviesearch(formData.searchterm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
            <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Form;